import express from 'express'
import { callQR } from './qr.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.get('/', async (req,res) => {
    res.json({qr : await callQR()})
})

app.listen(3000,() => console.log("Server on"))