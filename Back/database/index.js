const mongoose = require('mongoose');
require("dotenv").config();

async function checkConnection() {
    try {
        await mongoose.connect(process.env.host);
        console.log('Connection successful');
    } catch (error) {
        throw error;
    }
}

module.exports = { checkConnection };
