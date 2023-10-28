# S1 D3 Level - 1 Assignment: TypeScript Banking System - Classes and Interfaces

### Objective

The aim of this assignment is to develop a TypeScript program that showcases your understanding of object-oriented programming principles, with a focus on classes and interfaces. By completing this assignment, you will gain hands-on experience in building a simple banking system in TypeScript.

### Task

Your task is to create a TypeScript program that simulates a basic banking system. The program should consist of the following key components:

1. **Bank Account Class:**
    - Design a `BankAccount` class that represents a customer's bank account. The class should include the following attributes:
        - `accountNumber` (string): A unique identifier for the account.
        - `accountHolder` (string): The name of the account holder.
        - `balance` (number): The current balance in the account.
        - `transactions` (an array of transaction objects): To log all financial transactions.
    - Implement the following methods in the class:
        - `deposit(amount: number)`: This method should allow customers to deposit funds into their account.
        - `withdraw(amount: number)`: This method should enable customers to withdraw funds from their account. Be sure to prevent withdrawals that exceed the available balance.
        - `getBalance()`: Create a method that displays the current balance of the account.
2. **Transaction Interface:**
    - Define a `Transaction` interface that specifies the structure of a transaction object. A transaction should include the following properties:
        - `type` (string): Describing the transaction type, e.g., 'deposit' or 'withdraw'.
        - `amount` (number): Indicating the transaction amount.
        - `timestamp` (Date): Capturing the date and time of the transaction.
3. **Transactions Logging:**
    - Implement a feature within the `BankAccount` class to log each transaction in the `transactions` array along with a timestamp to record when the transaction occurred.
4. **Usage:**
    - Instantiate a `BankAccount` object and demonstrate the usage of your program by conducting a series of deposit and withdrawal operations. Make sure to display the account balance after each transaction.

### Requirements

For a successful completion of this assignment, adhere to the following requirements:

1. Use TypeScript classes to define the `BankAccount` class and the `Transaction` interface.
2. Implement error handling to ensure that withdrawals do not exceed the available balance.
3. Provide a clear demonstration of how your program functions, including creating an instance of the `BankAccount` class, performing multiple transactions, and displaying the updated account balance after each operation.

### Assessment

Your assignment will be assessed based on the following criteria:

- Effective use of TypeScript classes and interfaces.
- Correct implementation of deposit and withdrawal methods.
- Accurate transaction logging with timestamps.
- Appropriate error handling to prevent overdraws.
- Clear and comprehensive demonstration of your program's functionality.