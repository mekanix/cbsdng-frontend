import io from 'socket.io-client'


let sock = null


export default class SocketStore {
  constructor() {
    if (sock == null) {
      sock = io({ transports: ['websocket'] })
      sock.on('output', this.onOutput)
    }
    this.socket = sock
  }

  onOutput = (data) => {
    console.log(data)
  }
}
