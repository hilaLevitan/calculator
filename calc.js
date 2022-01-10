"use strict";
let stat, num, result1, result2, op, flag, flag2; //first operand

const reset = function () {
  stat = 1;
  flag = true;
  result1 = 0;
  result2 = 0;
  flag2 = true;
};

reset();
const solve = function () {
  console.log(result2);
  board.textContent = calc(Number(result1), Number(result2), op);
  result1 = board.textContent;
  result2 = 0;
};
const pressNum = function () {
  if (board.textContent === "0" && flag2) {
    board.textContent = null;
    flag2 = false;
  }
  if (
    isNaN(this.textContent) &&
    this.textContent !== "=" &&
    this.textContent !== "."
  ) {
    result1 = Number(board.textContent);
    console.log(result1);
    stat = 2;
    op = this.textContent;
    board.textContent += op;
  } else if (this.textContent === "=") {
    if (stat != 3) return;
    solve();
  } else {
    num = this.textContent;
    board.textContent += num;
  }
  if (stat === 1) result1 += num;
  else if (stat === 2) {
    num = 0;
    stat = 3;
  } else if (stat === 3) {
    if (flag) {
      flag = false;
      result2 = num;
    } else result2 += num === "=" || num === result2 ? 0 : num;
    console.log(result2);
  }
};
const calc = function (opd1, opd2, op) {
  stat = 4;

  if (op === "+") return opd1 + opd2;
  if (op === "-") return opd1 - opd2;
  if (op === "x") return opd1 * opd2;

  return opd1 / opd2;
};

const bn1 = document.querySelector("#num1");
const bn2 = document.querySelector("#num2");
const bn3 = document.querySelector("#num3");
const bn4 = document.querySelector("#num4");
const bn5 = document.querySelector("#num5");
const bn6 = document.querySelector("#num6");
const bn7 = document.querySelector("#num7");
const bn8 = document.querySelector("#num8");
const bn9 = document.querySelector("#num9");
const bn0 = document.querySelector("#num0");
const dot = document.querySelector("#dot");
const dev = document.querySelector("#op_÷");
const mul = document.querySelector("#op_x");
const plus = document.querySelector("#op_pl");
const minus = document.querySelector("#op_-");
const equil = document.querySelector("#op_eq");
const ce = document.getElementById("ce");
bn1.addEventListener("click", pressNum);
bn2.addEventListener("click", pressNum);
bn3.addEventListener("click", pressNum);
bn4.addEventListener("click", pressNum);
bn5.addEventListener("click", pressNum);
bn6.addEventListener("click", pressNum);
bn7.addEventListener("click", pressNum);
bn8.addEventListener("click", pressNum);
bn9.addEventListener("click", pressNum);
bn0.addEventListener("click", pressNum);
dot.addEventListener("click", pressNum);
dev.addEventListener("click", pressNum);
mul.addEventListener("click", pressNum);
plus.addEventListener("click", pressNum);
minus.addEventListener("click", pressNum);
equil.addEventListener("click", pressNum);

const board = document.querySelector(".board");

ce.addEventListener("click", function () {
  board.textContent = 0;
  reset();
});
