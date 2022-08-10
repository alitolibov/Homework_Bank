let bank = [
    {
        name: "uztelecom",
        budget: 200000,
        tax: 12,
        expensesPerYear: [
            {
                title: "rent",
                total: 13000,
            },
            {
                title: "salaries",
                total: 85000,
            },
            {
                title: "furniture",
                total: 15000,
            },
        ],
    },
    {
        name: "artel",
        budget: 500000,
        tax: 12,
        expensesPerYear: [{
                title: "rent",
                total: 15000,
            },
            {
                title: "salaries",
                total: 150000,
            },
            {
                title: "furniture",
                total: 25000,
            },
        ],
    },
    {
        name: "gm",
        budget: 1000000,
        tax: 12,
        expensesPerYear: [{
                title: "rent",
                total: 30000,
            },
            {
                title: "salaries",
                total: 350000,
            },
            {
                title: "furniture",
                total: 90000,
            }
        ]
    }
]
let arrBankSumma = []
for(let item of bank) {
    item.taxSumma = item.budget / 100 * item.tax
    arrBankSumma.push(item.taxSumma)

    item.expensesPerYearAll = item.expensesPerYear.reduce((a,b) => {
        return a + b.total
    }, 0)

    item.budgetall = item.budget - item.expensesPerYearAll - item.taxSumma
}
let min = Math.min(...arrBankSumma) 
let max = Math.max(...arrBankSumma)

min = bank.find(item => item.taxSumma === min)
max = bank.find(item => item.taxSumma === max)

console.log(bank);
console.log(max,min);





