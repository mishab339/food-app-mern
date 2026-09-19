import express from "express";
import path from 'path'

const systemRouter = express.Router();

systemRouter.delete("/admin/clear-images", (req, res) => {
    try {
        const uploadDir = path.join(process.cwd(), "uploads");

        if (!fs.existsSync(uploadDir)) {
            return res.json({
                success: true,
                message: "Upload directory does not exist"
            });
        }

        const files = fs.readdirSync(uploadDir);

        for (const file of files) {
            const filePath = path.join(uploadDir, file);

            if (fs.statSync(filePath).isFile()) {
                fs.unlinkSync(filePath);
            }
        }

        res.json({
            success: true,
            message: `${files.length} files deleted`
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to clear uploads"
        });
    }
});

export default systemRouter
