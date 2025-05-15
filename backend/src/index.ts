
import express from 'express';
import cors from 'cors';
import { setupVite } from './vite';
import { createServer } from 'http';
import { initEmailConfig } from './emailService';
import routes from './routes';
import { config } from 'dotenv';

config();
initEmailConfig();

const app = express();
const server = createServer(app);
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api', routes);

if (process.env.NODE_ENV === 'development') {
  setupVite(app, server);
}

server.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
