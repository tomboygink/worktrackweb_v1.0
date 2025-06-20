export const tasks_table = {
    sql: `
    DROP TABLE IF EXISTS task;
    CREATE TABLE task (
    id                          BIGSERIAL NOT NULL PRIMARY KEY,
    nametask                    VARCHAR(250) DEFAULT(''),
    datecreate                  TIMESTAMP DEFAULT(CURRENT_TIMESTAMP),
    dateestimatedcompletion     TIMESTAMP DEFAULT(CURRENT_TIMESTAMP),
    dateend                     TIMESTAMP DEFAULT(CURRENT_TIMESTAMP),
    document                    TEXT,
    authorId                    BIGSERIAL NOT NULL,
    executorId                  BIGSERIAL NOT NULL,
    statusId                    BIGSERIAL NOT NULL,
    priorityId                  BIGSERIAL NOT NULL,
    datechange                  TIMESTAMP DEFAULT(CURRENT_TIMESTAMP),
    info                        TEXT
    );
    `,
    args: new Array()
};
