this example use three type of websocket server implementation

socket.io and sockjs are all implements a weird, arbitrary layer over the WebSocket protocol, which need server side support.



## Server:
socket.io https://github.com/socketio/socket.io
sockjs https://github.com/sockjs/sockjs-node
raw websocket server https://github.com/websockets/ws

## Client(Node.js)
https://github.com/websockets/ws
Server connect to [Echo test](ws://echo.websocket.org) see http://websocket.org/echo.html

## Client(Browser):
https://github.com/socketio/socket.io-client
https://github.com/sockjs/sockjs-client


https://stackoverflow.com/questions/5510537/websocket-library-for-browsers





Client:
develop:
use proxy to access express server
but proxy can not work with websocket



