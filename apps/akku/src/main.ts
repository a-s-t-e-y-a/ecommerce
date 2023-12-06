import express from 'express';
import path from 'path';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mainRouter from './mainRoute';
import bodyParser from 'body-parser';

const app = express();


// Use bodyParser for parsing JSON and URL-encoded data
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

// Use CORS middleware to allow cross-origin requests
app.use(cors());

app.use('/api', mainRouter);

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);

