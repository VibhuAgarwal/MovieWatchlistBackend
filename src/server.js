import express from 'express';

import movieRoutes from './routes/movieRoutes.js';
const app = express();

//API Routes
app.use('/movies', movieRoutes);

const port = 5001;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

