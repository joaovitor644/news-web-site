import express from 'express'
import Logger from '../tools/Logger'
import data from '../models/dataRender'

export let Data = data

const logger = new Logger.Logger
const createLog = Logger.createLog
const Router = express.Router();

export let mainControler = {
    index: Router.get('/', (req: any,res: any) => {
        res.render('index',(err: string,html: any) => {
            if(err){
                createLog(logger.error(`Falha ao renderizar a pagina :${err}`),"src/log/server.log")
                res.redirect('/404')
            }
            if(html){
                res.send(html)
            }
        })
        createLog(logger.info("GET '/' Request"),"app/log/server.log")
        Data.request++
    }),
    status404: Router.get('/404', (req: any,res: any) => {
        res.send('404 error')
    }),

}
