const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist/municipalidad-morales')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/municipalidad-morales/index.html'));
});

console.log(__dirname);

const port = process.env.PORT || '3001';
app.set('port', port)

const server = http.createServer(app);
server.listen(port, ()=> console.log('Running app'));
