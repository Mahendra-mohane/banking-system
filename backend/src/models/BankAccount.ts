// src/models/BankAccount.ts

import { Transaction } from "./Transaction";

class BankAccount {
  accountNumber: string;
  accountHolder: string;
  balance: number;
  transactions: Transaction[] = [];

  constructor(accountNumber: string, accountHolder: string) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = 0;
  }

  deposit(amount: number): void {
    this.balance += amount;
    this.logTransaction('deposit', amount);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      throw new Error("Insufficient funds");
    }
    this.balance -= amount;
    this.logTransaction('withdraw', amount);
  }

  getBalance(): number {
    return this.balance;
  }

  private logTransaction(type: string, amount: number): void {
    const transaction: Transaction = {
      type,
      amount,
      timestamp: new Date(),
    };
    this.transactions.push(transaction);
  }
}

export { BankAccount };
