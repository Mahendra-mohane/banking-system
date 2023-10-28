"use strict";
// src/routes/api.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BankAccount_1 = require("../models/BankAccount");
const router = (0, express_1.Router)();
router.post("/deposit", (req, res) => {
    const { accountNumber, amount } = req.body;
    const account = new BankAccount_1.BankAccount(accountNumber, "John Doe");
    account.deposit(amount);
    res.json({ message: `Deposited $${amount} into account ${accountNumber}` });
});
router.post("/withdraw", (req, res) => {
    const { accountNumber, amount } = req.body;
    const account = new BankAccount_1.BankAccount(accountNumber, "John Doe");
    try {
        account.withdraw(amount);
        res.json({ message: `Withdrawn $${amount} from account ${accountNumber}` });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
router.get("/transactions/:accountNumber", (req, res) => {
    const accountNumber = req.params.accountNumber;
    const account = new BankAccount_1.BankAccount(accountNumber, "John Doe");
    res.json({ transactions: account.transactions });
});
exports.default = router;
