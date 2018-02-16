// ./index

// This module lets you use ES6 modules (import/export syntax) in nodejs modules
// require('import-export');

const config = require('./config/server')
const restify = require('restify')

// global. is from what source?

global.server = restify.createServer({
  name: config.name,
  version: config.version
})

server.pre(restify.pre.sanitizePath());
server.use(restify.bodyParser())

server.on('uncaughtException', (req, res, route, err) => {
  res.send(err)
})

server.listen(config.port, function() {
    const routes = require('./api/routes')
    // todo logging
    console.log(`Server listening, port: ${config.port}`)
})

server.get(
  /\/(.*)?\..*/,
  restify.plugins.serveStatic({
    directory: './public',
  })
)
