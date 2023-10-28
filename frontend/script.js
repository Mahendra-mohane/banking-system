// public/script.js

document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const accountNumber = document.getElementById('accountNumber').value;
    const amount = parseFloat(document.getElementById('amount').value);

    fetch('/api/deposit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accountNumber, amount }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').textContent = data.message;
    })
    .catch(error => console.error('Error:', error));
});

function withdraw() {
    const accountNumber = document.getElementById('accountNumber').value;
    const amount = parseFloat(document.getElementById('amount').value);

    fetch('/api/withdraw', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accountNumber, amount }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').textContent = data.message;
    })
    .catch(error => console.error('Error:', error));
}
