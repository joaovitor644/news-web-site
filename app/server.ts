import express from 'express';
import consolreload from './tools/consoleUpdate';
import Logger from "./tools/Logger"
import { mainControler , Data } from './controllers/main'

const createLog = Logger.createLog
const Log = new Logger.Logger
const app = express()
const port = 3000

app.set('views','app/views')
app.set("view engine", "ejs")
app.use(express.static("public"));

app.use('/', mainControler.index);
app.use('/404', mainControler.status404);


app.listen(3000, () => {
    consolreload(port,Data);
    createLog(Log.info("Server Rodando"),"app/log/server.log")
})