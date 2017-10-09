(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.add = function(number1, number2) {
  return number1 + number2;
};

Calculator.prototype.subtract = function(number1, number2) {
  return number1 - number2;
};

Calculator.prototype.multiply = function(number1, number2) {
  return number1 * number2;
};

Calculator.prototype.divide = function(number1, number2) {
  return number1 / number2;
};

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){
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

},{"./../js/calculator.js":1}]},{},[2]);
