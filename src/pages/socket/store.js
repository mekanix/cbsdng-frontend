import io from 'socket.io-client'


export default class SocketStore {
  constructor() {
    this.socket = io({ transports: ['websocket'] })
  }
}
