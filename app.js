const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello world! This is a Node js app')
});

app.listen(port, () => {
  console.log(`This server is running on port http://localhost:${port}`)
})