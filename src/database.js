const mongoose = require('mongoose');
require('dotenv').config({ path: './db.env' });
try {
    console.log(""+process.env.DB_URL)
    mongoose.connect(""+process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log("DATABASE READY");
    });

} catch (error) {
    console.log("Error on database conection");
}

