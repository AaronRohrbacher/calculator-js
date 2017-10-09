var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var newCalculator = new Calculator(number1, number2);
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    if (operator === "add") {
      result = newCalculator.add(number1, number2);
    } else if (operator === "subtract") {
      result = newCalculator.subtract(number1, number2);
    } else if (operator === "multiply") {
      result = newCalculator.multiply(number1, number2);
    } else if (operator === "divide") {
      result = newCalculator.divide(number1, number2);
    }
    $("#output").text(result);
  });
});

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
