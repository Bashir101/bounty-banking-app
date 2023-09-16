// Class definition for BankAccount
class BankAccount {
    constructor(accountHolder, accountType) {
        this.accountHolder = accountHolder;
        this.accountType = accountType;
        this.balance = 0;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            throw new Error('Insufficient funds');
        }
    }
}

// DOM element references
const accountHolderInput = document.getElementById('account-holder');
const accountTypeInput = document.getElementById('account-type');
const balanceDisplay = document.getElementById('balance-display');
const amountInput = document.getElementById('amount');
const transactionTypeSelect = document.getElementById('transaction-type');
const performTransactionButton = document.getElementById('perform-transaction');
const messageElement = document.getElementById('message');

let currentAccount = null;

// Event listener for transaction button click
performTransactionButton.addEventListener('click', () => {
    // Get user inputs
    const accountHolder = accountHolderInput.value;
    const accountType = accountTypeInput.value;
    const transactionType = transactionTypeSelect.value;
    const amount = parseFloat(amountInput.value);

    try {
        // Check if there is an active account, if not, create one
        if (!currentAccount) {
            currentAccount = new BankAccount(accountHolder, accountType);
            messageElement.textContent = `Account created for ${currentAccount.accountHolder}.`;
        }

        // Use a switch statement to perform the selected transaction
        switch (transactionType) {
            case 'deposit':
                currentAccount.deposit(amount);
                messageElement.textContent = `Deposited $${amount.toFixed(2)} into ${currentAccount.accountHolder}'s account.`;
                break;
            case 'withdraw':
                currentAccount.withdraw(amount);
                messageElement.textContent = `Withdrawn $${amount.toFixed(2)} from ${currentAccount.accountHolder}'s account.`;
                break;
            case 'balance':
                messageElement.textContent = `${currentAccount.accountHolder}'s balance is $${currentAccount.balance.toFixed(2)}.`;
                break;
            default:
                messageElement.textContent = 'Invalid transaction type.';
        }

        // Update the displayed balance
        balanceDisplay.textContent = `$${currentAccount.balance.toFixed(2)}`;
    } catch (error) {
        // Handle exceptions (e.g., insufficient funds or invalid inputs) using try-catch
        messageElement.textContent = error.message;
    } finally {
        // Clear the amount input field
        amountInput.value = '';
    }
});
