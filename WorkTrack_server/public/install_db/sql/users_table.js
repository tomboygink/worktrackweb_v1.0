"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users_table = void 0;
exports.users_table = {
    sql: "\n    DROP TABLE IF EXISTS users;\n    CREATE TABLE users (\n    id              BIGSERIAL NOT NULL PRIMARY KEY,\n    firstname       VARCHAR(250) DEFAULT(''),\n    lastname        VARCHAR(250) DEFAULT(''),\n    login           VARCHAR(250) DEFAULT(''),\n    password        VARCHAR(250) DEFAULT('')\n        \n    );\n    ",
    args: new Array()
};
//# sourceMappingURL=users_table.js.map