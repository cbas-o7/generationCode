export function costCalculator(transaction) {
    transaction = parseFloat(transaction)
    return transaction + 3 + (transaction*0.01)
}