import cors    from 'cors';

const whitelist = ['https://www.google.com', 'https://www.google.com.br'];

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || whitelist.includes(origin)) {
        callback(null, true);
        } else {
        callback(new Error('⛔ Acceso CORS denegado'));
        }
    }
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
