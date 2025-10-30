import express from 'express';
import { SearchController } from './controllers/SearchController';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const searchController = new SearchController();

app.get('/search', (req, res) => {
    const query = req.query.q;
    searchController.searchContacts(query)
        .then(results => res.json(results))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.listen(PORT, () => {
    console.log(`Search service is running on port ${PORT}`);
});