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

user.sayUserName();

user.sayUserNameArrow();