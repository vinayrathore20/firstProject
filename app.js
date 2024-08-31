import express from 'express';
import web from './router/web.js';
import database from './db/config.js';
import bodyParser, { json, urlencoded } from 'body-parser';

const app = express();

const port = "3000";
const url = process.env.PORT || "mongodb://localhost:27017";

database(url);

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/user', web);


app.listen(port, () => {
	console.log(`server started at port ${port}`);
})



