import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import SockJS from 'sockjs-client';
import io from 'socket.io-client';


class App extends Component {

  constructor() {
    super();
    this.state = {
      logs: ''
    };
    this.done();
  }

  opensocket = (sock,hello)=>{
      sock.onopen = function() {
          console.log('open');
          sock.send(hello);
      };
     
      sock.onmessage = function(e) {
          console.log('message', e.data);
          sock.close();
      };
     
      sock.onclose = function() {
          console.log('close');
      };
  };

  done = () => {
    //test proxy http get
    axios.get('/hello')
      .then(function (response) {
        console.log('hello request',response);
      })
      .catch(function (error) {
        console.log(error);
      });

      //raw websocket
    // Create WebSocket connection.
    const socketRaw = new WebSocket('ws://localhost:8080');
    this.opensocket(socketRaw, 'raw socket');

    const sock = new SockJS('/sockjs');
    this.opensocket(sock, ' socketjs');

    //socket io have a diffrent api
    const sio = io('http://localhost:8080',{path:'notwork'});
    // this.opensocket(sockio,' socket-io');
    sio.on('connect', (data) => {
      console.log('sockio' + data);
    });

    sio.on('open', (data) => {
      sio.send('socketio');
    });

    sio.on('error', (error) => {
      console.log('----error', error);
    });

    // sio.send('socketio');
    // sio.emit('socketio---','ddd');
  };

  render() {
    return (
      <div className = "App" >
      Send Message: <input />
      <button> Send </button><br/>
      Logs: <textarea columns = "40"
      rows = "30"
      value = {
        this.state.logs
      } > 
      </textarea><br/>
      </div>
    );
  }
}

export default App;