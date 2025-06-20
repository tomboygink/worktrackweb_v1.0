"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status_table = void 0;
exports.status_table = {
    sql: "\n    DROP TABLE IF EXISTS status;\n    CREATE TABLE status (\n    id                  BIGSERIAL NOT NULL PRIMARY KEY,\n    namestatus          VARCHAR(250) DEFAULT('')\n    );\n    ",
    args: new Array()
};
//# sourceMappingURL=status_table.js.map