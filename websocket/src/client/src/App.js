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
      logs: '',
      inputMsg:''
    };
    this.done();
  }

  opensocket = (sock,hello)=>{
      sock.onopen = ()=> {
        this.log(hello + ' open');
          sock.send(hello);
      };
     
      sock.onmessage = (e)=> {
        this.log(hello + ' message ' +  e.data);
          // sock.close();
      };
     
      sock.onclose = ()=> {
        this.log(hello + ' close');
      };
  };

  log = (l) =>{
    console.log(l);
    this.setState((prevState,props) => {
      return {logs: prevState.logs + '\n' + l};
    });
  };

  done = () => {
    //test proxy http get
    axios.get('/hello')
      .then( (response)=> {
        this.log('hello request',response);
      })
      .catch( (error)=> {
        this.log(error);
      });

      //raw websocket
    // Create WebSocket connection.
    var socketRaw = this.socketRaw = new WebSocket('ws://localhost:8080');
    this.opensocket(socketRaw, 'raw socket');

    var sock = this.sock  = new SockJS('/sockjs');
    this.opensocket(sock, ' socketjs');

    //socket io have a diffrent api
    var sio = this.sio = io();
    // const sio = io('http://localhost:3000'); //it also work
    // const sio = io('http://localhost:3000',{path:'notwork'}); //did not worl, path did not work
    sio.on('connect', (data) => {
      this.log('sockio connected' ,  data);
      sio.send('socketio');
    });

    sio.on('message', (data) => {
      
      this.log('sockio data' + data);
    });

    sio.on('error', (error) => {
      this.log('----error', error);
    });

    sio.on('close', (error) => {
      this.log('io close');
    });

    // sio.send('socketio');
    // sio.emit('socketio---','ddd');
  };

  handleChange = (e) => {
    // console.log('dddd',e.target.value);
    let v = e.target.value;
    this.setState((pre,props)=>{
      return {inputMsg:v};
    });
  };

  handleSend = () => {
    let s = this.state.inputMsg;
    this.socketRaw.send(s);
    this.sock.send(s);
    this.sio.send(s);
  };

  render() {
    return (
      <div className = "App" >
      Send Message: <input onChange={this.handleChange} />
      <button type="button" onClick={this.handleSend} > Send </button><br/>
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