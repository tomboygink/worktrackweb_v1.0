import crypto from "crypto";
import CONFIG from "../config.json";
import { dateTimeToSQL, dateTimeToStr } from "./DateStr";
import { DBase, getDB } from "./DBase";

export class Priority {
    db: DBase;
    args: any;

    constructor(_args: any) {
        this.db = getDB();
        this.args = _args;
    }

    async selectPriority(){
        var db_response = await this.db.query("SELECT * FROM priority")
        return db_response.rows
    }
}