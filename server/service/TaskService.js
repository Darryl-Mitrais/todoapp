const db = require('../dbConnector');
const pgClient = db.getPGClient();

class TaskService {

    async getTasks() {
        return await pgClient.query ("SELECT * FROM task");
    }

    async addTask( task ) {
        console.log( task );
        return await pgClient.query("INSERT INTO \
            task ( task_uuid, description, created_on ) \
            values ( $1, $2, to_timestamp ($3, 'dd/MM/yyyy') )", 
            [task.uuid, task.description, task.deadline] );
    }
    
}

module.exports = TaskService;