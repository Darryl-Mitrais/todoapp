
// Setup uuid
const { v4: uuidv4 } = require('uuid');

// Express Setup
const express = require('express');
const cors = require('cors');
const TaskService = require ('./service/TaskService');
const SetupService = require('./service/SetupService');

const app = express();
app.use(cors());
app.use(express.urlencoded( { extended: true } ));
app.use(express.json());

// Postgres Client setup and build the tables if required
SetupService.setup();

// Express route handlers
app.get('/', (req, res) => {
    res.send('hi');
});

app.get ('/tasks', async ( req, res ) => {
    const taskService = new TaskService();
    const tasks = await taskService.getTasks();
    res.send (tasks.rows);
});

app.post('/tasks', async ( req, res ) => {
    const description = req.body.description;
    const deadline = req.body.deadline;
    const taskService = new TaskService();
    const uuid = uuidv4();
    console.log( deadline );
    console.log( new Date (deadline) );
    const task = {
        description: description,
        deadline: new Date ( deadline ).toLocaleString('en-GB'),
        uuid: uuid
    }

    const result = await taskService.addTask ( task );
    // validation check if deadline is not less than today
    // validation check if either fields are empty
    console.log(result);
    res.send ( { working: true } );
});

app.put('/task/:id', async ( req, res ) => {

});

app.delete('/task/:id', async ( req, res ) => {

});

app.listen ( 5000, err => {
    console.log('Listening on port 5000');
});