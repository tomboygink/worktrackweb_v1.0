"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.priority_table = void 0;
exports.priority_table = {
    sql: "\n    DROP TABLE IF EXISTS priority;\n    CREATE TABLE priority (\n    id                  BIGSERIAL NOT NULL PRIMARY KEY,\n    namepriority        VARCHAR(250) DEFAULT('')\n    );\n    ",
    args: new Array()
};
//# sourceMappingURL=priority_table.js.map