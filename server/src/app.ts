require('dotenv').config()

import express from "express";

const app = express()
const cors = require('cors');

app.use(cors());


const countryRouter = require('./routes/country')
const packagesRouter = require('./routes/packages')
const pkgProductsRouter = require('./routes/pkgproducts')
const profitCenterRouter = require('./routes/profitcenter')

app.use('/country', countryRouter)
app.use('/packages', packagesRouter)
app.use('/pkgproducts', pkgProductsRouter)
app.use('/profitcenter', profitCenterRouter)

const server = app.listen(5000, () => {
    console.log('Listening to server port: 5000');
})

const socketChat = require('./socket/chat')
const io = socketChat(server); 