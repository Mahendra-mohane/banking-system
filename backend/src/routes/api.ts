// src/routes/api.ts

import { Router, Request, Response } from "express";
import { BankAccount } from "../models/BankAccount";

const router = Router();

router.post("/deposit", (req: Request, res: Response) => {
  const { accountNumber, amount } = req.body;

  const account = new BankAccount(accountNumber, "John Doe");
  account.deposit(amount);

  res.json({ message: `Deposited $${amount} into account ${accountNumber}` });
});

router.post("/withdraw", (req: Request, res: Response) => {
  const { accountNumber, amount } = req.body;

  const account = new BankAccount(accountNumber, "John Doe");
  try {
    account.withdraw(amount);
    res.json({ message: `Withdrawn $${amount} from account ${accountNumber}` });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/transactions/:accountNumber", (req: Request, res: Response) => {
  const accountNumber = req.params.accountNumber;
  const account = new BankAccount(accountNumber, "John Doe");

  res.json({ transactions: account.transactions });
});

export default router;
