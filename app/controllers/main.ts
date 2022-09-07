import express from 'express'
import type { Request, Response } from 'express';

const Router = express.Router();

export let mainControler = {
    index: Router.get('/', (req: Request, res: Response) => {
        res.render('index',(err: string,html: any) => {
            if(err){
                res.redirect('/404')
            }
            if(html){
                res.send(html)
            }
        })
    }),
    status404: Router.get('/404', (req: Request, res: Response) => {
        res.send('404 error')
    }),
    about: Router.get('/about',(req,res) => {
        res.render('about',(err: string,html: any) => {
            if(err){
                res.redirect('/404')
            }
            if(html){
                res.send(html)
            }
        })
    }),
    contact: Router.get('/contact' , (req: Request, res: Response) => {
        res.render('contact',(err: string,html: any) => {
            if(err){
                res.redirect('/404')
            }
            if(html){
                res.send(html)
            }
        })
    })
}
