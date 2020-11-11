import React from 'react'
import PropTypes from 'prop-types'
import {
  // errors,
  withStore,
} from 'freenit'

// import Template from 'templates/default/detail'
// import styles from './styles'


class Interactive extends React.Component {
  render() {
    const { socket } = this.props.store.socket
    console.log(socket)
    return (
      <div>
        cvrc
      </div>
    )
  }
}


Interactive.propTypes = {
  store: PropTypes.shape({
    notification: PropTypes.shape({
      show: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
}


export default withStore(Interactive)
