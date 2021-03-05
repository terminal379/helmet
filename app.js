const express = require('express');
const mongoose = require('mongoose');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');

// db
mongoose.connect('mongodb://localhost/projecte-llibres', { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', (error) => console.log(error));

// middlewares;
app.use(morgan('dev'));
app.use(helmet())
app.use(express.json());
const llibresRouter = require('./routes/llibres');
app.use('/llibres', llibresRouter);


// inicialitzar el servidor
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Servidor inicialitzat al port ${port}`));