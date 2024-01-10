require('dotenv').config()
const { checkConnection} = require('./database/index')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

async function checkAndSyncMongo() {
    await checkConnection()
}

function initAndListen(){
    const app = express()
    .use(cors())
    .use(morgan('dev'))
    .use(express.json())
    .use('/Back', require('./routes'))
    .listen(3000, () => {
        console.log(`Listening on port ${3000}`)
    })
}

async function startAPI(){
    await checkAndSyncMongo()
    initAndListen()
}

startAPI()