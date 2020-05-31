import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:  false }));

app.use(routes);

app.listen(3333);