import express from "express";
// import { createTransaction } from "../controllers/transactions.controller.js";
import transactionController from "../controllers/transactions.controller.js";
const router = express.Router();

router
  .route("/")
  .post(transactionController.createTransaction)
  .get(transactionController.getTransactions);

export default router;
