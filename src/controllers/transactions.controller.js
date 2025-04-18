function createTransaction(req, res) {
  return res.send({
    message: "create Transactions handlers",
  });
}
function getTransactions(req, res) {
  return res.send({
    message: "get all transactions",
  });
}

function getTransactionByID(req, res) {
  return res.send({
    message: `get a transaction by id`,
  });
}
function deleteTransaction(req, res) {
  return res.send({
    message: "delete transaction",
  });
}

function deleteAllTransactions(req, res) {
  return res.send({
    message: "delete all transactions",
  });
}
export default {
  createTransaction,
  getTransactions,
  deleteTransaction,
  deleteAllTransactions,
  getTransactionByID,
};
