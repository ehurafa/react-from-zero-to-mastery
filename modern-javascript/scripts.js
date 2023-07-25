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

// 6 destructuring
const fruits = ["Maça", "Laranja", "Mamão"];

const [f1, f2, f3] = fruits;

const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periféricos",
    color: "Cinza"
}

const { name: productName, price, category: productCategory, color } = productDetails;

console.log(`O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory}`)

// 7 spread operator
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [0, ...a1, 4]

console.log(a4)

const carName = { name: "Gol" }
const carBrand = { brand: "VW" }
const otherInfos = { km: 100000, price: 49000 }

const car = { ...carName, ...carBrand, ...otherInfos, wheels: 4 }

console.log(car)

// 8 class
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discout) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product("Camisa gola V", 20)

console.log(shirt.name)

console.log(shirt.productWithDiscount(10))

console.log(shirt.productWithDiscount(50))

const tenis = new Product("Tenis verde", 200)

console.log(tenis.productWithDiscount(20))

//9 inheritance
class ProductWithAttributes extends Product {

    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log('As cores são:')
        this.colors.forEach(color => {
            console.log(color)
        })
    }

}

const hat = new ProductWithAttributes('Chapéu', 29.99, ['Preto', 'Azul', 'Verde'])

console.log(hat.name)

console.log(hat.productWithDiscount(10))

hat.showColors()

