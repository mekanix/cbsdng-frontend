import io from 'socket.io-client'


export default class SocketStore {
  constructor() {
    this.socket = io({ transports: ['websocket'] })
    this.socket.on('output', this.onOutput)
  }

  onOutput = (data) => {
    console.log(data)
  }
}
