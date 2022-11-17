const calculator = {
  add: function(a,b) {
    console.log(a+b);
  },
  minus: function(a,b) {
    console.log(a-b);
  },
  div: function(a,b) {
    console.log(a/b);
  },
  multi: function(a,b) {
    console.log(a*b);
  },
  power:function(a,b) {
    console.log(a**b);
  }
};

calculator.add(2,5);
calculator.minus(99,3);
calculator.div(25,5);
calculator.multi(22,5);
calculator.power(2,5);