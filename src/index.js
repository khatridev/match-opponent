import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';
import fs from 'fs';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = 3000;
app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname,'public','views','index.html'));
})

app.get('/api/config', (req, res) => {
	try {
		const fileContents = fs.readFileSync('./src/config/teams.yml');
		const data = yaml.load(fileContents);
		res.json(data);
	} catch (e) {
		console.error(e);
		res.status(500).json({ error: 'Failed to load YAML' });
	}
})

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});