/*
{
    type: 'CONST'
    payload: {
        data
    }
}
*/

const PRESS_NUM = 'PRESS_NUM';
const EQUALS = 'EQUALS';
const OPP = 'OPP';
const CLEAR = 'CLEAR';

export const pressNum = num => ({
  type: PRESS_NUM,
  payload: num,
});

export const equals = () => ({
  type: EQUALS,
});

export const opp = op => ({
  type: OPP,
  payload: op,
});

export const clear = () => ({
  type: CLEAR,
});

const performOp = (x, y, op) => {
  const num1 = parseFloat(x);
  const num2 = parseFloat(y);
  if (op === 'pow') {
    return num1 ** num2;
  } else if (op === '+') {
    return num2 + num1;
  } else if (op === '-') {
    return num2 - num1;
  } else if (op === '÷') {
    return num2 / num1;
  }
  return 0;
};

const initial = { stack: [], state: 'replace' };

export const reducer = (state = { stack: [], state: 'replace' }, { type, payload }) => {
  switch (type) {
    case CLEAR:
      return initial;
    case OPP:
      return {
        stack: [`${performOp(state.stack[0], state.stack[1], payload)}`, ...state.stack.slice(2)],
        state: 'replace',
      };
    case EQUALS:
      return {
        stack: [state.stack[0] || '0', ...state.stack],
        state: 'replace',
      };
    case PRESS_NUM:
      if (state.state === 'append') {
        return {
          stack: [(state.stack[0] || '0') + payload, ...state.stack.splice(1)],
          state: 'append',
        };
      } else if (state.state === 'replace') {
        return {
          stack: [payload, ...state.stack.splice(1)],
          state: 'append',
        };
      } else if (state.state === 'push') {
        return {
          stack: [payload, ...state.stack],
          state: 'append',
        };
      }
      break;
    default:
      return state;
  }
};
