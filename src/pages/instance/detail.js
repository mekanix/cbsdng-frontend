import React from 'react'
import PropTypes from 'prop-types'
import {
  Switch,
} from '@material-ui/core'
import {
  withStore,
  errors,
} from 'freenit'

import Template from 'templates/default/detail'
// import styles from './styles'


class InstanceDetail extends React.Component {
  toggleOn = async (event, value) => {
    const { instance, notification } = this.props.store
    const { name } = this.props.match.params
    let response
    if (value) { response = await instance.start(name) }
    else { response = await instance.stop(name) }
    if (!response.ok) {
      const error = errors(response)
      notification.show(error.message)
    }
  }

  render() {
    const { messages } = this.props.store.socket
    const display = messages.map(line => line.payload)
    return (
      <Template secure>
        <Switch onChange={this.toggleOn} />
        <pre>
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
