import React from 'react'
import PropTypes from 'prop-types'
import {
  Switch,
} from '@material-ui/core'
import {
  withStore,
  errors,
} from 'freenit'
import Ansi from 'ansi-to-react'

import Types from 'types'
import Template from 'templates/default/detail'
import styles from './styles'


class InstanceDetail extends React.Component {
  toggleOn = async (event, value) => {
    let response
    const { instance, notification, socket } = this.props.store
    const { name } = this.props.match.params
    socket.setMessages([])
    if (value) { response = await instance.start(name) }
    else { response = await instance.stop(name) }
    if (!response.ok) {
      const error = errors(response)
      notification.show(error.message)
    }
  }

  render() {
    const { messages } = this.props.store.socket
    const display = messages.filter(message => ![-1, Types.EXIT, Types.CONNECTION_CLOSED].includes(message.type)).map(message => {
      return <Ansi>{message.payload}</Ansi>
    })
    return (
      <Template secure>
        <Switch onChange={this.toggleOn} />
        <pre style={styles.terminal}>
          {display}
        </pre>
      </Template>
    )
  }
}


InstanceDetail.propTypes = {
  store: PropTypes.shape({
    notification: PropTypes.shape({
      show: PropTypes.func.isRequired,
    }).isRequired,
    instance: PropTypes.shape({
      fetch: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
}


export default withStore(InstanceDetail)
