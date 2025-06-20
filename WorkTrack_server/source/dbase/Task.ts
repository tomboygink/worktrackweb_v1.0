import crypto from "crypto";
import CONFIG from "../config.json";
import { dateTimeToSQL, dateTimeToStr, strToDateTime } from "./DateStr";
import { DBase, getDB } from "./DBase";

export class Task {
    db: DBase;
    args: any;

    constructor(_args: any) {
        this.db = getDB();
        this.args = _args;
    }

    async insertTask() {
        try {
            var db_response = await this.db.query(
                "INSERT INTO task (nametask, datecreate, datechange, dateestimatedcompletion, dateend, document, authorid, executorid, statusid, priorityid, info)" +
                "VALUES(\'" + this.args.nametask + "\', \'" + dateTimeToSQL(new Date(this.args.datecreate)) + "\', " +
                this.args.datechange + ", \'" + dateTimeToSQL(new Date(this.args.dateestimatedcompletion)) + "\', "
                + this.args.dateend + ", \'" + this.args.document + "\', "
                + this.args.authorid + ", " + this.args.executorid + ", "
                + this.args.statusid + ", " + this.args.priorityid + ", \'" + this.args.info + "\')" +
                "RETURNING id"
            );
            return db_response.rows;
        }
        catch{
            return 0
        }
    }

    async updateTask() {


        if (this.args.statusid === "4") {
            var db_response = await this.db.query("UPDATE task SET datechange = \'" + dateTimeToSQL(new Date(this.args.datechange))
                + "\', dateend=\'" + dateTimeToSQL(new Date(this.args.dateend)) + "\', statusid = "
                + this.args.statusid + ", document = \'\' " + " WHERE id = " + this.args.id + " RETURNING id");
            return db_response.rows;
        }
        else {
            var db_response = await this.db.query("UPDATE task SET datechange = \'" + dateTimeToSQL(new Date(this.args.datechange)) + "\', statusid = "
                + this.args.statusid + " WHERE id = " + this.args.id + " RETURNING id");
            return db_response.rows;
        }

    }

    async updateAuthorTask() {
        var db_response = await this.db.query("UPDATE task SET datechange = \'" + dateTimeToSQL(new Date(this.args.datechange)) + "\', nametask = \'" +
            this.args.nametask + "\', dateestimatedcompletion = \'" + dateTimeToSQL(new Date(this.args.dateestimatedcompletion)) + "\', document =\'" +
            this.args.document + "\',  statusid = " + this.args.statusid + ", info = \'" + this.args.info + "\' WHERE id = " + this.args.id + " RETURNING id");
        return db_response.rows;
    }

    async selectAuthorTask() {
        var db_response = await this.db.query("SELECT * FROM task WHERE authorId = " + this.args.id + "ORDER BY id DESC");
        return db_response.rows
    }

    async selectExecutorTask() {
        var db_response = await this.db.query("SELECT * FROM task WHERE executorId = " + this.args.id + "ORDER BY id DESC");
        return db_response.rows
    }


    async updatePriorityTask() {
        var db_response = await this.db.query("UPDATE task SET datechange = \'" + dateTimeToSQL(new Date(this.args.datechange)) + "\', priorityid = " +
            this.args.priorityid + "WHERE id = " + this.args.id + " RETURNING id")
        return db_response.rows;
    }
}