import express from 'express';
import * as path from 'path';

import mainRouter from './mainRoute';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Add middleware to parse JSON data
app.use(express.json());

app.use('/api', mainRouter);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
