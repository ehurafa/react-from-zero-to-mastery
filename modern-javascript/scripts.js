// var let and const
let i = 100;

for (let i = 0; i < 5; i++) {
    console.log(i)
}

console.log(i);

// 2 arrow function
const sum = function(a, b) {
    return a + b;
}

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSum(5,5));

const user = {
    name: "Theo",
    sayUserName() {
        var self = this;
        setTimeout(function() {
            console.log(self);
            console.log("Username: " + self.name)
        }, 500);
    },
    sayUserNameArrow() {
        setTimeout(() =>  {
            console.log(this);
            console.log("Username: " + this.name)
        }, 500);
    }
}

// user.sayUserName();
// user.sayUserNameArrow();


// filter
const arr = [1, 2, 3, 4, 5]

const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n
    }
})

console.log(highNumbers)

const users = [
    { name: "Rafael", available: true },
    { name: "Pedro", available: false },
    { name: "João", available: false },
    { name: "Marcos", available: true }
]
const availableUsers = users.filter((user) => user.available)

console.log(availableUsers);


// 4 map
const products = [
    {
        name: 'Camisa', price: 10.99, category: 'Roupas'
    },
    {
        name: 'Chaleira elétrica', price: 49.99, category: 'Eletro'
    },
    {
        name: 'Fogão', price: 400, category: 'Eletro'
    },
    {
        name: 'Calça jeans', price: 50.99, category: 'Roupas'
    }
];

products.map((product) => {
    if(product.category === 'Roupas') {
        product.onSale = true
    }
})

console.log(products)

// 5 template literals

const userName = "Rafael"
const age = 32

console.log(`O nome do usuário é ${userName} e ele tem ${age} anos.`);