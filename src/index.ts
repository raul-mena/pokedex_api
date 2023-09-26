import express from 'express';
import { port } from './utils/Constants';
import routes from './routes';
import cors from 'cors';
// init server
const app = express();
app.use(express.json());
//cors config
app.use(cors())
// test route to check if server is running
app.get('/', (_req, res) => {
  res.send({status: 200})
})
// server routes
app.use('/api', routes)
// init server
app.listen(port, () => {
  console.log('server running in port', port);
})