let taxPercentage;
if (income <= 50000) {
  taxPercentage = 10;
} else if (income <= 100000) {
  taxPercentage = 20;
} else {
  taxPercentage = 30;
}

function calculateTax() {
    const name = document.getElementById("name").value;
    const profession = document.getElementById("profession").value;
    const income = document.getElementById("income").value;
    
    let taxPercentage;
  
    if (income <= 50000) {
      taxPercentage = 10;
    } else if (income <= 100000) {
      taxPercentage = 20;
    } else {
      taxPercentage = 30;
    }
    
    const tax = income * (taxPercentage / 100);
    const netIncome = income - tax;
    
    const result = `Name: ${name}\nProfession: ${profession}\nIncome: ${income}\nTax Percentage: ${taxPercentage}%\nTax: ${tax}\nNet Income: ${netIncome}`;
    
    alert(result);
  }