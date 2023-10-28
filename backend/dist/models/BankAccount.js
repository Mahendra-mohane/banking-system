"use strict";
// src/models/BankAccount.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(accountNumber, accountHolder) {
        this.transactions = [];
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = 0;
    }
    deposit(amount) {
        this.balance += amount;
        this.logTransaction('deposit', amount);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }
        this.balance -= amount;
        this.logTransaction('withdraw', amount);
    }
    getBalance() {
        return this.balance;
    }
    logTransaction(type, amount) {
        const transaction = {
            type,
            amount,
            timestamp: new Date(),
        };
        this.transactions.push(transaction);
    }
}
exports.BankAccount = BankAccount;
