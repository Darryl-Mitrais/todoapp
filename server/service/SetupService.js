const db = require('../dbConnector');
const pgClient = db.getPGClient();


let setup = () => {
    pgClient
    .query("CREATE TABLE IF NOT EXISTS \
        users ( \
            users_id serial PRIMARY KEY,\
            users_uuid VARCHAR(255) NOT NULL UNIQUE,\
            username VARCHAR (50) NOT NULL UNIQUE,\
            password VARCHAR (50) NOT NULL,\
            created_on TIMESTAMP NOT NULL\
        )"
    ).catch ( (err) => console.error( err ) );
    
    pgClient
    .query("CREATE TABLE IF NOT EXISTS \
        task ( \
            task_id serial PRIMARY KEY,\
            task_uuid VARCHAR(255) NOT NULL UNIQUE,\
            description VARCHAR ( 255 ) NOT NULL,\
            created_on TIMESTAMP NOT NULL,\
            is_done BOOLEAN NOT NULL DEFAULT 'f'\
        )"
    ).catch ( (err) => console.error(err));
    
    pgClient
    .query("CREATE TABLE IF NOT EXISTS \
        user_task (\
            users_task_id serial NOT NULL PRIMARY KEY,\
            users_id INT NOT NULL REFERENCES users,\
            task_id INT NOT NULL REFERENCES task\
        )"
    ).catch ( (err) => console.error(err));
}


module.exports = { setup };