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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = Router;
var User_1 = require("../dbase/User");
var Task_1 = require("../dbase/Task");
var Status_1 = require("../dbase/Status");
var Priority_1 = require("../dbase/Priority");
function Router(body) {
    return __awaiter(this, void 0, void 0, function () {
        var res, data, _a, user, user, user, task, task, task, task, task, status, priority, task;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    res = {
                        cmd: "",
                        error: "",
                        data: [],
                    };
                    _a = body.cmd;
                    switch (_a) {
                        case "check": return [3, 1];
                        case "add_user": return [3, 2];
                        case "auth": return [3, 4];
                        case "get_users": return [3, 6];
                        case "add_task": return [3, 8];
                        case "get_executor_task": return [3, 10];
                        case "get_author_task": return [3, 12];
                        case "update_task": return [3, 14];
                        case "update_task_author": return [3, 16];
                        case "get_status": return [3, 18];
                        case "get_priority": return [3, 20];
                        case "update_task_priority": return [3, 22];
                    }
                    return [3, 24];
                case 1:
                    {
                        res.cmd = body.cmd;
                        res.data = "ok";
                        res.error = null;
                    }
                    return [3, 25];
                case 2:
                    user = new User_1.User(body.args);
                    return [4, user.insertUser()];
                case 3:
                    data = _b.sent();
                    if (data === undefined || data.length === 0 || data[0] === undefined) {
                        res.cmd = body.cmd;
                        res.error = "Ошибка при создании пользователя";
                        res.data = null;
                    }
                    else {
                        res.cmd = body.cmd;
                        res.error = null;
                        res.data = data;
                    }
                    return [3, 25];
                case 4:
                    user = new User_1.User(body.args);
                    return [4, user.selectUser()];
                case 5:
                    data = _b.sent();
                    if (data.length === 0 || data[0] === undefined) {
                        res.cmd = body.cmd;
                        res.error = "Проверте правильность данных или данного пользователя не существует";
                        res.data = null;
                    }
                    else {
                        res.cmd = body.cmd;
                        res.error = null;
                        res.data = data;
                    }
                    return [3, 25];
                case 6:
                    user = new User_1.User(body.args);
                    return [4, user.selectAllUser()];
                case 7:
                    data = _b.sent();
                    if (data.length === 0 || data[0] === undefined) {
                        res.cmd = body.cmd;
                        res.error = "Пользователей нет";
                        res.data = null;
                    }
                    else {
                        res.cmd = body.cmd;
                        res.error = null;
                        res.data = data;
                    }
                    return [3, 25];
                case 8:
                    task = new Task_1.Task(body.args);
                    return [4, task.insertTask()];
                case 9:
                    data = _b.sent();
                    if (data == 0 || data.length === 0 || data[0] === undefined) {
                        res.cmd = body.cmd;
                        res.error = "Ошибка при создании задачи";
                        res.data = null;
                    }
                    else {
                        res.cmd = body.cmd;
                        res.error = null;
                        res.data = data;
                    }
                    return [3, 25];
                case 10:
                    task = new Task_1.Task(body.args);
                    return [4, task.selectExecutorTask()];
                case 11:
                    data = _b.sent();
                    if (data.length === 0 || data[0] === undefined) {
                        res.cmd = body.cmd;
                        res.error = "Ошибка при получении задач или они отсутствуют";
                        res.data = null;
                    }
                    else {
                        res.cmd = body.cmd;
                        res.error = null;
                        res.data = data;
                    }
                    return [3, 25];
                case 12:
                    task = new Task_1.Task(body.args);
                    return [4, task.selectAuthorTask()];
                case 13:
                    data = _b.sent();
                    if (data.length === 0 || data[0] === undefined) {
                        res.cmd = body.cmd;
                        res.error = "Ошибка при получении задач или они отсутствуют";
                        res.data = null;
                    }
                    else {
                        res.cmd = body.cmd;
                        res.error = null;
                        res.data = data;
                    }
                    return [3, 25];
                case 14:
                    task = new Task_1.Task(body.args);
                    return [4, task.updateTask()];
                case 15:
                    data = _b.sent();
                    if (data.length === 0 || data[0] === undefined) {
                        res.cmd = body.cmd;
                        res.error = "Ошибка при изменении статуса";
                        res.data = null;
                    }
                    else {
                        res.cmd = body.cmd;
                        res.error = null;
                        res.data = data;
                    }
                    return [3, 25];
                case 16:
                    task = new Task_1.Task(body.args);
                    return [4, task.updateAuthorTask()];
                case 17:
                    data = _b.sent();
                    if (data.length === 0 || data[0] === undefined) {
                        res.cmd = body.cmd;
                        res.error = "Ошибка при изменении статуса";
                        res.data = null;
                    }
                    else {
                        res.cmd = body.cmd;
                        res.error = null;
                        res.data = data;
                    }
                    return [3, 25];
                case 18:
                    status = new Status_1.Status(body.args);
                    return [4, status.selectStatus()];
                case 19:
                    data = _b.sent();
                    if (data.length === 0 || data[0] === undefined) {
                        res.cmd = body.cmd;
                        res.error = "Ошибка при получении статусов задач";
                        res.data = null;
                    }
                    else {
                        res.cmd = body.cmd;
                        res.error = null;
                        res.data = data;
                    }
                    return [3, 25];
                case 20:
                    priority = new Priority_1.Priority(body.args);
                    return [4, priority.selectPriority()];
                case 21:
                    data = _b.sent();
                    if (data.length === 0 || data[0] === undefined) {
                        res.cmd = body.cmd;
                        res.error = "Ошибка при получении статусов приорита";
                        res.data = null;
                    }
                    else {
                        res.cmd = body.cmd;
                        res.error = null;
                        res.data = data;
                    }
                    return [3, 25];
                case 22:
                    task = new Task_1.Task(body.args);
                    return [4, task.updatePriorityTask()];
                case 23:
                    data = _b.sent();
                    if (data.length === 0 || data[0] === undefined) {
                        res.cmd = body.cmd;
                        res.error = "Ошибка при изменении приоритета";
                        res.data = null;
                    }
                    else {
                        res.cmd = body.cmd;
                        res.error = null;
                        res.data = data;
                    }
                    return [3, 25];
                case 24:
                    {
                        res.cmd = body.cmd;
                        res.error = "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \"".concat(body.cmd, "\" \u043D\u0435 \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u0430");
                        res.data = null;
                    }
                    _b.label = 25;
                case 25: return [2, JSON.stringify(res)];
            }
        });
    });
}
//# sourceMappingURL=Router.js.map