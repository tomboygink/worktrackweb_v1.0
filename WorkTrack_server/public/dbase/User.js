"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var crypto_1 = __importDefault(require("crypto"));
var config_json_1 = __importDefault(require("../config.json"));
var DBase_1 = require("./DBase");
var User = (function () {
    function User(_args) {
        this.db = (0, DBase_1.getDB)();
        this.args = _args;
    }
    User.prototype.insertUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var check_user, pass, repass, db_response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.selectUser()];
                    case 1:
                        check_user = _a.sent();
                        if (!(check_user[0] === undefined || check_user.length === 0)) return [3, 4];
                        pass = crypto_1.default
                            .createHmac("sha256", config_json_1.default.crypto_code)
                            .update(this.args.password)
                            .digest("hex");
                        repass = crypto_1.default
                            .createHmac("sha256", config_json_1.default.crypto_code)
                            .update(this.args.repassword)
                            .digest("hex");
                        if (!(pass === repass)) return [3, 3];
                        return [4, this.db.query("INSERT INTO users (firstname, lastname, login, password)" +
                                "VALUES(\'" + this.args.firstname + "\', \'" + this.args.lastname + "\', \'" + this.args.login + "\', \'" + pass + "\')" +
                                "RETURNING id")];
                    case 2:
                        db_response = _a.sent();
                        return [2, db_response.rows];
                    case 3: return [2, []];
                    case 4: return [2];
                }
            });
        });
    };
    User.prototype.selectUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pass, db_response, db_response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.args.repass === undefined)) return [3, 2];
                        pass = crypto_1.default
                            .createHmac("sha256", config_json_1.default.crypto_code)
                            .update(this.args.password)
                            .digest("hex");
                        return [4, this.db.query('select * from users where login = \'' + this.args.login + '\' and password = \'' + pass + '\'')];
                    case 1:
                        db_response = _a.sent();
                        return [2, db_response.rows];
                    case 2: return [4, this.db.query('select * from users where login = \'' + this.args.login + '\'')];
                    case 3:
                        db_response = _a.sent();
                        return [2, db_response.rows];
                }
            });
        });
    };
    User.prototype.selectAllUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var db_response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.db.query("select * from users")];
                    case 1:
                        db_response = _a.sent();
                        return [2, db_response.rows];
                }
            });
        });
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map