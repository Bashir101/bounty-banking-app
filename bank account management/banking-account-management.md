# Bank Account Management Website Guide

Welcome to the Bank Account Management website, a tool designed for easy and intuitive management of your financial transactions. This web application is built with modern web technologies, including HTML, CSS, and JavaScript. It showcases key programming concepts such as classes, switch statements, and robust error handling with try-catch-finally blocks.

## How to Use the Website

### Account Setup

1. Begin by entering your account holder's name in the "Account Holder Name" field.

2. Select your account type:
   - Choose "Savings" for a savings account.
   - Choose "Current" for a current account.

### Performing Transactions

3. **Deposit Funds**: To add money to your account, enter the desired amount in the "Amount" field. Select "Deposit" from the "Transaction Type" dropdown and click "Perform Transaction." A success message will appear, detailing the deposited amount.

4. **Withdraw Funds**: To withdraw money, specify the amount in the "Amount" field. Select "Withdraw" from the "Transaction Type" dropdown and click "Perform Transaction." If you have sufficient funds, the withdrawal will be processed, and you will receive a confirmation message. In case of insufficient funds, an error message will alert you.

5. **Check Account Balance**: Simply select "Check Balance" from the "Transaction Type" dropdown and click "Perform Transaction." Your account's current balance will be displayed, providing a quick overview of your financial status.

### Message Display

6. Any transaction results or informational messages will be prominently displayed in the message area below the form. This ensures you stay informed about your financial activities.

### Balance Display

7. Your current account balance is prominently displayed at the top of the page, allowing you to track your finances easily.

## Incorporation of Programming Concepts

### Object-Oriented Approach (Classes)

We employ an object-oriented approach by utilizing the `BankAccount` class. Each instance of this class represents an individual account and holds essential data such as account holder name, account type, and balance. Additionally, the class features methods for depositing and withdrawing funds, encapsulating the core functionalities.

### Transaction Handling (Switch Statements)

To cater to different user actions, we implement a switch statement. This control structure determines the nature of the transaction based on the user's selection (deposit, withdrawal, or balance check) and directs the corresponding method within the `BankAccount` class.

### Robust Error Handling (Try-Catch-Finally)

Robust error handling is achieved through try-catch-finally statements. These mechanisms gracefully manage exceptions, ensuring that your experience remains smooth and error-free. For instance, if a withdrawal request exceeds the available balance, the system gracefully handles the error and presents an "Insufficient funds" message.

This website not only provides a user-friendly interface for managing your bank account but also serves as an educational tool for understanding key web development and programming concepts. Enjoy effortless financial management while gaining insights into coding practices.

