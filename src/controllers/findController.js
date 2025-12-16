import { prisma } from "../config/db.js";

const findUserByEmail = async (req, res) => {
  try {
    const { email } = req.query;

    // Validate input
    if (!email) {
      return res.status(400).json({
        status: "fail",
        message: "Email query parameter is required",
      });
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    });

    // User not found
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User does not exist",
      });
    }

    // Success
    return res.status(200).json({
      status: "success",
      data: { user },
    });
  } catch (error) {
    console.error("Find user error:", error);

    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

export { findUserByEmail };
