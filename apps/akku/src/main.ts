import express from 'express';
import * as path from 'path';
import cors from 'cors'; // Import the cors middleware

import mainRouter from './mainRoute';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Add middleware to parse JSON data
app.use(express.json());

// Use CORS middleware to allow cross-origin requests
app.use(cors());

app.use('/api', mainRouter);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
