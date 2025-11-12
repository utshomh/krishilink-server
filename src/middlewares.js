import admin from "firebase-admin";

export const verifyFirebaseToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Must provide a valid access token to access this resource",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const userInfo = await admin.auth().verifyIdToken(token);
    req.headers.tokenEmail = userInfo.email;
  } catch (error) {
    console.error("Firebase token verification failed:", error.message);
    res.status(401).json({ message: "Invalid or expired access token" });
  }
};
