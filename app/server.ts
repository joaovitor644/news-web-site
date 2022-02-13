import express from 'express';
import path from 'path'
import { mainControler } from './controllers/main'

const app = express()
const port = process.env.PORT || 3000

app.set('views','app/views')
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname,"public")));

app.use('/', mainControler.index);
app.use('/404', mainControler.status404);


app.listen(port)