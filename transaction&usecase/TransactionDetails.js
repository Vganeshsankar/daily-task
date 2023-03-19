const transactions = [
	{ id: 1, mode: 'credit', type: 'payment', date: '2022-01-01', amount: 100, to: 'ganesh' },
	{ id: 2, mode: 'debit', type: 'refund', date: '2022-01-02', amount: 50, to: 'yuvaraj' },
	{ id: 3, mode: 'credit', type: 'payment', date: '2022-01-03', amount: 200, to: 'sri' }
];

const tableBody = document.getElementById('transactions-table');

transactions.forEach(transaction => {
	const row = document.createElement('tr');
	row.innerHTML = `
		<td>${transaction.id}</td>
		<td>${transaction.mode}</td>
		<td>${transaction.type}</td>
		<td>${transaction.date}</td>
		<td>${transaction.amount}</td>
		<td>${transaction.to}</td>
	`;
	tableBody.appendChild(row);
});