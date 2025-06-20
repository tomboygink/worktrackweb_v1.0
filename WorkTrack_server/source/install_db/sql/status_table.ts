export const status_table = {
    sql: `
    DROP TABLE IF EXISTS status;
    CREATE TABLE status (
    id                  BIGSERIAL NOT NULL PRIMARY KEY,
    namestatus          VARCHAR(250) DEFAULT('')
    );
    `,
    args: new Array()
};
