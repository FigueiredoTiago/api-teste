import express, { Request, Response } from "express";
import cors from "cors";
import personRoutes from "./routes/routes";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Tudo ok fine!");
});

app.use("/person", personRoutes);

export default app;
