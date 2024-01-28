const PORT = process.env.PORT || 3000
const http = require('http')
var fs = require('fs');

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  fs.readFile(__dirname + '/package.json', function(err, data) {
    if(err) return next(err);
    res.type('txt').send(data.toString());
  });
})

server.listen(PORT, () => {
  console.log(`Server running on port:${PORT}/`)
})