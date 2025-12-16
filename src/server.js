import express from 'express';
import {config} from 'dotenv'
import { connectDB, disconnectDB } from './config/db.js';

import movieRoutes from './routes/movieRoutes.js';

config();
connectDB();
const app = express();

//API Routes
app.use('/movies', movieRoutes);

const port = 5001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Handle unhandled promise rejections (e.g., database connection errors)
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on("uncaughtException", async (err) => {
  console.error("Uncaught Exception:", err);
  await disconnectDB();
  process.exit(1);
});

// Graceful shutdown
process.on("SIGTERM", async () => {
  console.log("SIGTERM received, shutting down gracefully");
  server.close(async () => {
    await disconnectDB();
    process.exit(0);
  });
});