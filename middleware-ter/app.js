import express                 from 'express';
import { rateLimit }           from 'express-rate-limit';
import { body, validationResult} from 'express-validator';

const app = express();
app.use(express.json());

app.use(rateLimit({ windowMs: 60_000, max: 10 }));

app.post('/registro',
  body('email').isEmail(),
  body('password').isStrongPassword(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors.array());
    res.json({ ok:true });
  });

export default app;
