/*imports*/
const express = require('express');
require('dotenv').config({path: './db.env'});


/*inicializaciones*/
const app = express();
const PORT = process.env.PORT || 8080;
const DB = require('./database');
app.use(express.json());
app.use(require('./endpoints/index'));

/*server*/
app.listen(PORT, () => {
    console.log("********************************************");
    console.log("SERVER ON PORT:", PORT);
    console.log("********************************************");
})


