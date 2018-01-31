/*
Performs the postfix calculations
*/
const OPP = "OPP"; // operation selected
const CLEAR = "CLEAR"; // clear button
const NUMBER_PRESSED = "NUMBER_PRESSED"; // number button pressed
const EQUALS = "EQUALS"; // equals operation selected

/*
start state, used for clear function.
*/
const start = { stack: [], state: "replace" };

/*
Givene to integers and an operation, the function evaluates the expression
*/
const performOp = (num1, num2, operation) => {
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);
  if (operation === "÷") {
    // division operation
    return number2 / number1;
  } else if (operation === "-") {
    // subtraction operation
    return number2 - number1;
  } else if (operation === "+") {
    // addition operation
    return number2 + number1;
  }
};

/*
Function called when clear is pressed.
*/
export const clear = () => ({
  type: CLEAR
});

/*
Function called when /,-, or + is pressed. Returns operation of button pressed.
*/
export const opp = op => ({
  type: OPP, // operation type
  ans: op // specific operation
});

/*
Function called when number is pressed. Returns integer value of button.
*/
export const pressNum = num => ({
  type: NUMBER_PRESSED,
  ans: num // integer
});

/*
Function called when equals symbol is pressed.
*/
export const equals = () => ({
  type: EQUALS // equals symbol
});

export const SolveFunc = (
  state = { stack: [], state: "replace" },
  { type, ans }
) => {
  switch (type) {
    case EQUALS: // equals function called
      return {
        stack: [state.stack[0] || "0", ...state.stack],
        state: "replace"
      };
    case CLEAR: // clear function called, return initial state
      return start;
    case OPP: // operation selected, call performOp
      return {
        stack: [`${performOp(state.stack[0], state.stack[1], ans)}`],
        state: "replace"
      };
    case NUMBER_PRESSED: // number button pressed
      if (state.state === "replace") {
        // put new number on answer bar
        return {
          stack: [ans, ...state.stack.splice(1)],
          state: "append"
        };
      } else if (state.state === "append") {
        // append number to back of current number
        return {
          stack: [(state.stack[0] || "0") + ans, ...state.stack.splice(1)],
          state: "append"
        };
      }
      break;
    default:
      return state;
  }
};
