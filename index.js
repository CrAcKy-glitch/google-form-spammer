import submitBulkResponses from "./routes/submitResponses.js";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const app = express();
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 5001;
/* GET home page. */
app.get("/server-check", (req, res) => {
  res.status(200).send("server reachable");
});
app.get("/", submitBulkResponses);
app.listen(PORT, async () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});

export default router;
