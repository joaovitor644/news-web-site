import express from 'express';
import consolreload from './tools/consoleUpdate';
import Logger from "./tools/Logger"

const createLog = Logger.createLog
const Log = new Logger.Logger
const app = express()
const port = 3000

app.set('views','src/views')
app.set("view engine", "ejs")
app.use(express.static("public"));

let data = {
    "requests":0
}

app.get('/', (req: any,res: any) => {
    res.render('index',(err: string,html: any) => {
        if(err){
            createLog(Log.error("Falha ao renderizar a pagina :"+ err),"src/log/server.log")
        }
    })
    createLog(Log.info("GET '/' Request"),"src/log/server.log")
    data.requests++
})

app.listen(3000, () => {
    consolreload(port,data);
    createLog(Log.info("Server Rodando"),"src/log/server.log")
})