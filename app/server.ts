import express from 'express';
import path from 'path'
import consolreload from './tools/consoleUpdate';
import Logger from "./tools/Logger"
import { mainControler , Data } from './controllers/main'

const createLog = Logger.createLog
const Log = new Logger.Logger
const app = express()
const port = 3000

app.set('views','app/views')
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname,"public")));

app.use('/', mainControler.index);
app.use('/404', mainControler.status404);


app.listen(3000)