import React, { useState } from 'react'

// Pages
import {
  Auth,
  Profile,
  Resolution,
  Role,
  Store,
  User,
  EmptyTemplate,
} from 'freenit'
import { withRouter } from 'react-router-dom'
import Instance from 'pages/instance'
import Socket from 'pages/socket'
import Landing from 'pages/landing'


export const data = {}


const Provider = (props) => {
  const store = {
    auth: new Auth.store(useState(Auth.initial.detail)),
    history: props.history,
    landing: new Landing.store(useState(Landing.initial.detail)),
    instance: new Instance.store(
      useState(Instance.initial.detail),
      useState(Instance.initial.list),
    ),
    notification: new EmptyTemplate.store(
      useState(EmptyTemplate.initial.detail),
    ),
    profile: new Profile.store(
      useState(Profile.initial.detail),
    ),
    resolution: new Resolution.store(useState(Resolution.initial.detail)),
    role: new Role.store(
      useState(Role.initial.detail),
      useState(Role.initial.list),
    ),
    socket: new Socket.store(useState(Socket.initial.messages)),
    user: new User.store(
      useState(User.initial.detail),
      useState(User.initial.list),
    ),
  }
  data.store = store
  return (
    <Store.Provider value={store}>
      {props.children}
    </Store.Provider>
  )
}


export const StoreProvider = withRouter(Provider)
