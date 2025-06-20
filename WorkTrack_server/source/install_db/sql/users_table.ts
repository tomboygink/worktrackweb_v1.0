export const users_table = {
    sql: `
    DROP TABLE IF EXISTS users;
    CREATE TABLE users (
    id              BIGSERIAL NOT NULL PRIMARY KEY,
    firstname       VARCHAR(250) DEFAULT(''),
    lastname        VARCHAR(250) DEFAULT(''),
    login           VARCHAR(250) DEFAULT(''),
    password        VARCHAR(250) DEFAULT('')
        
    );
    `,
    args: new Array()
};
