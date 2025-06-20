import { DBase, endDB, getDB } from '../dbase/DBase';
import {dateTimeToStr} from '../dbase/DateStr'
import { users_table } from './sql/users_table';
import { tasks_table } from './sql/tasks_table';
import { status_table } from './sql/status_table';
import { priority_table } from './sql/priority_table';

async function run() {
    var db: DBase = getDB();

    var dt = await db.NOW();
    console.log("START INSTALLER", dateTimeToStr(dt));

    //Создание таблиц
    console.log("ADDING TABLE");
    await db.query(users_table.sql);
    await db.query(tasks_table.sql);
    await db.query(status_table.sql);
    await db.query(priority_table.sql);
    console.log("TABLE ADD");

    //Добавление статусов по умолчанию
    await db.query("INSERT INTO status(namestatus) VALUES ('Задача назначена');"+
        "INSERT INTO status(namestatus) VALUES ('Задача принята исполнителем');"+
        "INSERT INTO status(namestatus) VALUES ('Задача в работе');"+
        "INSERT INTO status(namestatus) VALUES ('Задача завершена');"+
        "INSERT INTO status(namestatus) VALUES ('Задача отменена');"+
        "INSERT INTO status(namestatus) VALUES ('Задача изменена');"
    )
    

    //Добавление приоритетности
    await db.query("INSERT INTO priority(namepriority) VALUES ('Низкий');"+
        "INSERT INTO priority(namepriority) VALUES ('Ниже среднего');"+
        "INSERT INTO priority(namepriority) VALUES ('Средний');"+
        "INSERT INTO priority(namepriority) VALUES ('Выше среднего');"+
        "INSERT INTO priority(namepriority) VALUES ('Высокий');")

    endDB();
    console.log("END INSTALLER");
}

run();
