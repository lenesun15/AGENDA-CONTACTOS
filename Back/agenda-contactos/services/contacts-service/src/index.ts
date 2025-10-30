import express from 'express';
import bodyParser from 'body-parser';
import { contactRouter } from './controllers/contactController';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/contacts', contactRouter);

app.listen(PORT, () => {
    console.log(`Contacts service is running on http://localhost:${PORT}`);
});