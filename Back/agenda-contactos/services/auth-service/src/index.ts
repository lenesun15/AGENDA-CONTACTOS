import express from 'express';
import { json } from 'body-parser';
import { initializePassport } from './strategies/passport';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(json());
initializePassport(app);

app.listen(PORT, () => {
    console.log(`Auth service running on port ${PORT}`);
});