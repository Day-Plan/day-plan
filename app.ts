import bodyParser from "body-parser";
import AccountRouter from "./src/modules/account/account.router";
import { connectDatabase } from "./src/modules/database/connection";

const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const app = express();

connectDatabase();

app.use(bodyParser.json());
app.use('/accounts', AccountRouter.getRoutes());

app.listen(process.env.PORT, () => {
    console.log('server started');
});