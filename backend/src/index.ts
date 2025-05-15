
import express from 'express';
import cors from 'cors';
import routes from './routes';
import { config } from 'dotenv';

config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
