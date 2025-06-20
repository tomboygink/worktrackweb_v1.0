"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasks_table = void 0;
exports.tasks_table = {
    sql: "\n    DROP TABLE IF EXISTS task;\n    CREATE TABLE task (\n    id                          BIGSERIAL NOT NULL PRIMARY KEY,\n    nametask                    VARCHAR(250) DEFAULT(''),\n    datecreate                  TIMESTAMP DEFAULT(CURRENT_TIMESTAMP),\n    dateestimatedcompletion     TIMESTAMP DEFAULT(CURRENT_TIMESTAMP),\n    dateend                     TIMESTAMP DEFAULT(CURRENT_TIMESTAMP),\n    document                    TEXT,\n    authorId                    BIGSERIAL NOT NULL,\n    executorId                  BIGSERIAL NOT NULL,\n    statusId                    BIGSERIAL NOT NULL,\n    priorityId                  BIGSERIAL NOT NULL,\n    datechange                  TIMESTAMP DEFAULT(CURRENT_TIMESTAMP),\n    info                        TEXT\n    );\n    ",
    args: new Array()
};
//# sourceMappingURL=tasks_table.js.map