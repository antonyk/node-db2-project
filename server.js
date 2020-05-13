const express = require('express');
const cors = require('cors');

const server = express();
server.use(express.json());
server.use(cors());

const apiRouter = express.Router();
server.use('/api/v1', apiRouter);

const carsRouter = require('./routes/carsRouter');
apiRouter.use('/cars', carsRouter);

module.exports = server;