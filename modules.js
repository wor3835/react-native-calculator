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

export const pressNum = num => ({
  type: PRESS_NUM,
  payload: num,
});

export const equals = () => ({
  type: EQUALS,
});

export const reducer = (state = { stack: [], inputState: 'new' }, { type, payload }) => {
  switch (type) {
    case EQUALS:
      return {
        stack: [state.stack[0] || '0', ...state.stack],
        inputState: 'replace',
      };
    case PRESS_NUM:
      if (state.inputState === 'append') {
        return {
          stack: [(state.stack[0] || '0') + payload, ...state.stack.slice(1)],
          inputState: 'append',
        };
      } else if (state.inputState === 'replace') {
        return {
          stack: [payload, ...state.stack.slice(1)],
          inputState: 'append',
        };
      }
      return {
        ...state,
        stack: [payload, ...state.stack.slice(1)],
        inputState: 'append',
      };
    default:
      return state;
  }
};
