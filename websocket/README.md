this example use three type of websocket server implementation

socket.io and sockjs are all implements a weird, arbitrary layer over the WebSocket protocol, which need server side support.



## Server:
sockjs https://github.com/sockjs/sockjs-node
raw websocket server https://github.com/websockets/ws
socket.io https://github.com/socketio/socket.io (did not work, no error, no request)

## Client(Node.js)
https://github.com/websockets/ws
Server connect to [Echo test](ws://echo.websocket.org) see http://websocket.org/echo.html

## Client(Browser):
HTML5 https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/dev-guides/hh673567(v=vs.85)
https://github.com/sockjs/sockjs-client
https://github.com/socketio/socket.io-client (did not work)




https://stackoverflow.com/questions/5510537/websocket-library-for-browsers





Client:
develop:
use proxy to access express server
proxy also work with websocket protocol



