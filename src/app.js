import express from "express";
import cors from "cors";
import transactionsRoute from "./routes/transactions.route.js";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: ` "Hello World", port: process.env.PORT1 ` });
});
app.use("/", transactionsRoute);
export default app;
