// Set up import/export
require('import-export');

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
    // not import yet b/c of server.<method>s
    const routes = require('./api/routes')
    console.log(`Server listening, port: ${config.port}`)
})
