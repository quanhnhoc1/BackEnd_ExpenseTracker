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
export default { createTransaction, getTransactions };
