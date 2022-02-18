const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors')

const projectsRouter = require('../api/project/router') 
const resourcesRouter = require('../api/resource/router') 
const tasksRouter = require('../api/task/router') 

const server = express();
server.use(express.json());
server.use(logger('dev'));
server.use(helmet());
server.use(cors()) // cors() returns a (req, res, nex) => { // stuff and then next() }

server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourcesRouter)
server.use('/api/tasks', tasksRouter)

server.use('/', (req, res)=>{
    res.send('hello!')
})

server.use((err, req, res, next) => { // eslint-disable-line   
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server;
