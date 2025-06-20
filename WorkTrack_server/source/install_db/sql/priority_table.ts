export const priority_table = {
    sql: `
    DROP TABLE IF EXISTS priority;
    CREATE TABLE priority (
    id                  BIGSERIAL NOT NULL PRIMARY KEY,
    namepriority        VARCHAR(250) DEFAULT('')
    );
    `,
    args: new Array()
};
