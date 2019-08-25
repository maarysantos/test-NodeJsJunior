function calculateExpense (distance, capacity, priceLiter){

    const amountGasoline = distance / capacity;
    const expenseTotal = amountGasoline * priceLiter;

    return expenseTotal;

}

module.exports = calculateExpense;