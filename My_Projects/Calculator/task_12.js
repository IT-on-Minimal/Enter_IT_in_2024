function calc(oper_1, oper_2, operation) {
  switch (operation) {
    case "add":
      alert(oper_1 + oper_2);
      break;
    case "multi":
      alert(oper_1 * oper_2);
      break;
    case "subtract":
      alert(oper_1 - oper_2);
      break;
    case "divide":
      alert(oper_1 / oper_2);
      break;
    case "power":
      alert(oper_1 ** oper_2);
      break;
    default:
      alert("Lost operator O_O");
      Again();
  }
}

function Again() {
  let again = prompt("Would you like to try again? yes/no");
  switch (again) {
    case "yes":
      PullRun(run);
      break;
    default:
      alert("Good Day!");
  }
}

function PullRun(run) {
  if (run == "yes") {
    let oper_1 = Number(prompt("Enter the first operand"));
    let oper_2 = Number(prompt("Enter the second operand"));
    let operation = prompt("Enter the operator");
    calc(oper_1, oper_2, operation);
  } else {
    alert("Good Day!");
  }
}
let run = prompt("Хотите ли вы вызвать калькулятор?");
PullRun(run);
