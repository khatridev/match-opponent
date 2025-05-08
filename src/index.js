import { createServer } from 'http';
import { readFile } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const PORT = 3000;

const server = createServer((req, res) => {
		const __dirname = fileURLToPath(new URL('.', import.meta.url));
		const filePath = join(__dirname, 'views/index.html');
		console.log(__dirname, filePath);
		console.log(new URL('.', import.meta.url),filePath)
		readFile(filePath, 'utf8', (err, data) => {
			if (err) {
				res.writeHead(500, { 'Content-Type': 'text/plain' });
				res.end('Internal Server Error');
			} else {
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.end(data);
			}
		});
	
});

server.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});