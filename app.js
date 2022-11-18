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
const minusResult = calculator.minus(plusResult, 3);
const divResult = calculator.div(minusResult, 5);
const multiResult = calculator.multi(divResult, plusResult);
const powerResult = calculator.power(multiResult, minusResult);
//console 창에서는 아무일도 안일어나지만 결과함수를 불러오면 값이 나옴