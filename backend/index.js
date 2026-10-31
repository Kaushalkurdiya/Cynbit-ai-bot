import "dotenv/config";
import express from "express";
import cors from "cors";
import chatRoute from "./routes/chat.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => res.json({ ok: true }));


app.post("/api/enroll", (req, res) => {
  console.log("Enrollment request:", req.body);
  res.json({ ok: true, message: "Request received" });
});

app.use("/api/chat", chatRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
