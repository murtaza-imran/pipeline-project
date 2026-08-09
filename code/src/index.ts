import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
const app: Application = express();
const PORT = process.env.PORT || 7000;

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});

const quotes: string[] = [
  "The only way to do great work is to love what you do.",
  "Life is what happens when you're busy making other plans.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "It does not matter how slowly you go as long as you do not stop.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
];

app.get("/quotes", (req: Request, res: Response) => {
  return res.json({ quotes });
});

app.get("/quotes/random", (req: Request, res: Response) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return res.json({ quote });
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


