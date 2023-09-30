import { connectDatabase } from "./src/modules/database/connection";

const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const app = express();

connectDatabase();

app.listen(process.env.PORT, () => {
    console.log('server started');
});