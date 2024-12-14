const http = require('http')
const app = require('./app')
const PORT = process.env.PORT

const myServer = http.createServer(app)

myServer.listen(PORT,()=>{
    console.log(`Listening on the port number: ${PORT}`)
})