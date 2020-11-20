import socket from 'socketio'


export default class SocketStore {
  constructor(messages) {
    this.messages = messages[0]
    this.setMessages = messages[1]
    socket.off('output')
    socket.on('output', this.onOutput)
  }

  onOutput = (message) => {
    this.setMessages([ ...this.messages, message ])
  }
}
