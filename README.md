# Examples for Node.js


## [Websocket Example](./websocket)

this example use three type of websocket server implementation

socket.io and sockjs are all implements a weird, arbitrary layer over the WebSocket protocol, which need server side support.



### Server:
sockjs https://github.com/sockjs/sockjs-node  
raw websocket server https://github.com/websockets/ws   
socket.io https://github.com/socketio/socket.io (did not work, no error, no request if use path option, the api is not good)

### Client(Node.js)
https://github.com/websockets/ws  
Server connect to [Echo test](ws://echo.websocket.org) see http://websocket.org/echo.html  

### Client(Browser):
HTML5    https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/dev-guides/hh673567(v=vs.85)
https://github.com/sockjs/sockjs-client   
https://github.com/socketio/socket.io-client (the path option did not work)




https://stackoverflow.com/questions/5510537/websocket-library-for-browsers



### Client:  
#### develop:  
use proxy to access express server  
proxy also work with websocket protocol  

### How To Run
#### Server
```shell  
npm run dev  
```

#### Client  
```shell
cd src/client  
npm start  
```


## [Miscellaneous Examples](./misc_examples)

### module cycle require
refer to this article [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)  
![](https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/files/2018/03/43_cjs_cycle.png)
but we should not mess our code up like such a require relation.
Run:
go into folder misc_examples\src\module_cycle_require
```shell
node .\m_a.js
```

