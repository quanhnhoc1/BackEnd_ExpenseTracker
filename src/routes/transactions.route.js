import express from "express";
// import { createTransaction } from "../controllers/transactions.controller.js";
import transactionController from "../controllers/transactions.controller.js";
import errorsController from "../controllers/errors.controller.js";
const router = express.Router();

router
  .route("/")
  .post(transactionController.createTransaction)
  .get(transactionController.getTransactions)
  .delete(transactionController.deleteAllTransactions)
  .all(errorsController.methodNotAllowed);

router
  .route("/:id")
  .get(transactionController.getTransactionByID)
  .delete(transactionController.deleteTransaction)
  .all(errorsController.methodNotAllowed);

export default router;
