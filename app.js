const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const myLogger = (req, res, next) => {
  console.log('Middleware log 1');
  next();
};

//MIDDLEWARES
app.use(express.static('public'));
app.use(myLogger);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'temp/PCAT_Starter_Files/index.html'));
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
