import { createServer } from 'node:http'

const server = createServer((_req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' })
	res.end('hello world')
})

server.listen(process.env.PORT)
