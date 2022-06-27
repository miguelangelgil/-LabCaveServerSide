const http = require('http')
const moment = require('moment')

/**
 * Create the server
 */
const app = http.createServer((req, res) => {
  // Return the currentTime of the server
  if (req.url.indexOf('/time') !== -1) {
    res.writeHead(200, { 'Content-type': 'text/datetime' })
    res.write(moment().format(req.url.substring(req.url.indexOf('=') + 1, req.url.length - 1)))
    res.end()
  } else {
    res.writeHead(404, { 'Content-type': 'text/plain' })
    res.write('Service not found')
    res.end()
  }
})

/**
 * The port listening by the server
 */
app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
