import { prisma } from "../config/db.js";

export const addToWatchlist = async (req, res) => {
  const { movieId, status, rating, notes, userId } = req.body;

  //Verify Movie exists
  const movie = await prisma.movie.findUnique({
    where: { id: movieId },
  });

  if (!movie) {
    return res.status(404).json({ merror: "Movie not found" });
  }

  const existingInWatchlist = await prisma.watchlistItem.findUnique({
    where: {
      userId_movieId: {
        userId: userId,
        movieId: movieId,
      },
    },
  });
  if (existingInWatchlist) {
    return res.status(404).json({ merror: "Movie already in watchlist" });
  }

  const watlistItem = await prisma.watchlistItem.create({
    data: {
      userId,
      movieId,
      status: status || "PLANNED",
      rating,
      notes,
    },
  });

  res.status(200).json({
    status: "Success",
    data: {
      watlistItem,
    },
  });
};

