import { scrapeResults } from '../utils/scraper.js';

export const getResults = async (req, res) => {
    try {
        const results = await scrapeResults();
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch results' });
    }
};