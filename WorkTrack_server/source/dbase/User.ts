import crypto from "crypto";
import CONFIG from "../config.json";
import { dateTimeToSQL, dateTimeToStr } from "./DateStr";
import { DBase, getDB } from "./DBase";

export class User {
    db: DBase;
    args: any;

    constructor(_args: any) {
        this.db = getDB();
        this.args = _args;
    }

    async insertUser() {
        var check_user = await this.selectUser();
        if (check_user[0] === undefined || check_user.length === 0) {
            var pass = crypto
                .createHmac("sha256", CONFIG.crypto_code)
                .update(this.args.password)
                .digest("hex");
            var repass = crypto
                .createHmac("sha256", CONFIG.crypto_code)
                .update(this.args.repassword)
                .digest("hex");

            if (pass === repass) {

                var db_response = await this.db.query(
                    "INSERT INTO users (firstname, lastname, login, password)" +
                    "VALUES(\'" + this.args.firstname + "\', \'" + this.args.lastname + "\', \'" + this.args.login + "\', \'" + pass + "\')" +
                    "RETURNING id"
                );
                return db_response.rows;
            }
            else {
                return [];
            }
        }
    }

    async selectUser() {
        if (this.args.repass === undefined) {

            var pass = crypto
                .createHmac("sha256", CONFIG.crypto_code)
                .update(this.args.password)
                .digest("hex");

            var db_response = await this.db.query('select * from users where login = \'' + this.args.login + '\' and password = \'' + pass + '\'');
            return db_response.rows;
        }
        else {
            var db_response = await this.db.query('select * from users where login = \'' + this.args.login + '\'');
            return db_response.rows;
        }
    }

    async selectAllUser() {
        var db_response = await this.db.query("select * from users");
        return db_response.rows;
    }
}