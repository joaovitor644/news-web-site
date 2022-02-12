const Logger = class Logger {
    private date = new Date(Date.now())

    public getDateLog(){
        return `${this.date.getFullYear()}-${this.date.getMonth() + 1 < 10? "0" + `${this.date.getMonth() + 1}` : this.date.getMonth() + 1}-${this.date.getDate() < 10? "0" + `${this.date.getDate()}`: this.date.getDate()}`;
    }
    public getClockLog(){
        return `${this.date.getHours() < 10? "0" + `${this.date.getHours()}`: this.date.getHours()}:${this.date.getMinutes() < 10? "0" + `${this.date.getMinutes()}`: this.date.getMinutes()}:${this.date.getSeconds() < 10? "0" + `${this.date.getSeconds()}`: this.date.getSeconds() }`
    }
    public info(message: string) {
        return `${this.getDateLog()} ${this.getClockLog()} INFO ${message} \r\n`
    }
    public debug(message: string) {
        return `${this.getDateLog()} ${this.getClockLog()} DEBUG ${message} \r\n`
    }
    public warning(message: string) {
        return `${this.getDateLog()} ${this.getClockLog()} WARNING ${message} \r\n`
    }
    public error(message: string) {
        return `${this.getDateLog()} ${this.getClockLog()} ERROR ${message} \r\n`
    }
    public critical(message: string) {
        return `${this.getDateLog()} ${this.getClockLog()} CRITICAL ${message} \r\n`
    }
}

const createLog = function createLog(msg: string,pathToFile: string){
    const fs = require('fs')

    fs.writeFile(pathToFile ,msg,{encoding:'utf-8',flag:"a+"},() => {});
}

export = {
    createLog,
    Logger
}
