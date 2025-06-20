import morgan  from 'morgan';
import path from "path";
import { fileURLToPath } from "url";
import { createStream } from 'rotating-file-stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const accessLog = createStream('access.log', {
    interval: '1d',
    path: path.join(__dirname, '../logs')
  });

const logger = morgan('combined', { stream: accessLog });

export default logger;

