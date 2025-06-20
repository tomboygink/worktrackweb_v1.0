import express from "express"
import http from 'http'
import bodyParser, { json } from 'body-parser';
import config from '../config.json'
import { Router } from "./Router";
import cors from "cors";

import { WebSocketServer ,WebSocket } from "ws";


class Server {
    app: express.Express = null;
    server: http.Server = null;
    wss: WebSocketServer = null;
    clients:Set<WebSocket> = null;


    constructor() {
        this.app = express();
        this.server = http.createServer(this.app); //Создание сервера HTTP
        this.wss = new WebSocketServer({server: this.server});  //Создание WebSocket

        this.clients = new Set();
    }

    //Маршрутизация по ссылкам
    route() {
        this.app.use(cors());
        this.app.use(bodyParser.json({limit: '100mb'})) //Парсер для post запросов 
        this.app.post("/api", async (req: express.Request, res: express.Response) => {
           // console.log("req.body ", req.body);
            res.send(await Router(req.body));

            if(req.body.cmd ==  "add_task")
            {

                //создаем JSON-объект для передачи уведомления 
                var notification: any = {
                    cmd: "notification",
                    executorid: "",
                    nametask: ""
                };
                //Присваеваем значения 
                notification.executorid = req.body.args.executorid;
                notification.nametask = req.body.args.nametask;

                //отправляем клиенту 
                this.clients.forEach(client => {
                    client.send(JSON.stringify(notification));
                });
            }
        })
    }

    //WebSocket 
    webSocket(){
        this.wss.on("connection", (ws)=>{
            console.log("Подключен новый клиент");
            this.clients.add(ws);
            
            ws.on("message", (message)=>{
                console.log(`Received message: ${message}`);
                ws.send(`Echo: ${message}`);
            });
            
            //ws.send(JSON.stringify("TEST"));

            ws.on("close", () => {
                console.log("Клиент отключен");
                this.clients.delete(ws);
            });

        });

    }


    //Запуск сервера 
    run() {
        this.route();
        this.webSocket();

        this.server.listen(config.server_config.port, () => { console.log(`Сервер запушен: http://${config.server_config.host}:${config.server_config.port}`) })
    }
}

var srv = new Server();
srv.run();