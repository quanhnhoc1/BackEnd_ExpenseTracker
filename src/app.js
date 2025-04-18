import express from "express";
import cors from "cors";
import transactionsRoute from "./routes/transactions.route.js";
import errorsController from "./controllers/errors.controller.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/transaction", transactionsRoute);
app.use(errorsController.resourceNotFound);
app.use(errorsController.handleError);
app.get("/", (req, res) => {
  res.json({ message: ` "Hello World", port: process.env.PORT1 ` });
});

export default app;
