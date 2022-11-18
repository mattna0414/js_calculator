const calculator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  div: function (a, b) {
    return a / b;
  },
  multi: function (a, b) {
    return a * b;
  },
  power: function (a, b) {
    return a ** b;
  },//function을 return값으로 반환(console사용안함)
};

const plusResult = calculator.add(2, 5);
const minusResult = calculator.minus(99, 3);
const divResult = calculator.div(25, 5);
const multiResult = calculator.multi(22, 5);
const powerResult = calculator.power(2, 5);

console.log(plusResult);
console.log(minusResult);
console.log(divResult);
console.log(multiResult);
console.log(powerResult);