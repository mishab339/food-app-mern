import express from "express";
const systemRouter = express.Router();
import path from 'path'

systemRouter.delete("/admin/clear-images", (req, res) => {
  const uploadDir = path.join(process.cwd(), "uploads");

  fs.readdirSync(uploadDir).forEach((file) => {
    fs.unlinkSync(path.join(uploadDir, file));
  });

  res.json({
    success: true,
    message: "Images cleared",
  });
});

export default systemRouter
