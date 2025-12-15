import express from 'express';
const router = express.Router();

router.get('/allMovies', (req, res) => {
    console.log("Received a request at /movies", req.method, req.url);
    res.json({ movies: ['Inception', 'Interstellar', 'The Dark Knight'] });
});

export default router;