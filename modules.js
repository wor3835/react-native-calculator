/*
{
    type: 'CONST'
    payload: {
        data
    }
}
*/

const PRESS_NUM = 'PRESS_NUM';

export const pressNum = num => ({
  type: PRESS_NUM,
  payload: num,
});

export const reducer = (state = '0', { type, payload }) => {
  switch (type) {
    case PRESS_NUM:
      return state + payload;
    default:
      return state;
  }
};
