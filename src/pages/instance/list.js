import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Button,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core'
import {
  errors,
  withStore,
} from 'freenit'

import Template from 'templates/default/detail'
import styles from './styles'


class InstanceList extends React.Component {
  constructor(props) {
    super(props)
    this.fetch()
  }

  fetch = async () => {
    const { instance, notification } = this.props.store
    const response = await instance.fetchAll()
    if (!response.ok) {
      const error = errors(response)
      notification.show(`Error executing fetch: ${error.message}`)
    }
  }

  render() {
    const instanceList = this.props.store.instance.list.data.map(instance => (
      <List style={styles[instance.hypervisor]} key={instance.name}>
        <ListItem dense button>
          <ListItemText primary={instance.name} secondary={instance.hostname} />
          <ListItemSecondaryAction>
            <Link to={`/instance/${instance.name}`}>
              <Button
                style={styles.details}
                variant="outlined"
                color="primary"
              >
                Details
              </Button>
            </Link>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    ))
    return (
      <Template secure>
        {instanceList}
      </Template>
    )
  }
}


InstanceList.propTypes = {
  store: PropTypes.shape({
    notification: PropTypes.shape({
      show: PropTypes.func.isRequired,
    }).isRequired,
    instance: PropTypes.shape({
      fetchAll: PropTypes.func.isRequired,
      list: PropTypes.shape({
        data: PropTypes.array.isRequired,
        pages: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}


export default withStore(InstanceList)
