import crypto from "crypto";
import CONFIG from "../config.json";
import { dateTimeToSQL, dateTimeToStr } from "./DateStr";
import { DBase, getDB } from "./DBase";

export class Status {
    db: DBase;
    args: any;

    constructor(_args: any) {
        this.db = getDB();
        this.args = _args;
    }

    async selectStatus(){
        var db_response = await this.db.query("SELECT * FROM status")
        return db_response.rows
    }
}