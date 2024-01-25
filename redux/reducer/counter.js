const innitialNumber = {
  numberCake: 0,
  total: 100,
};

const CounterReducer = (state = innitialNumber, action) => {
  switch (action.type) {
    case "Increment":
      return {
        ...state,
        numberCake: state.numberCake + action.payload,
        total: state.total - state.numberCake,
      };
    case "Decrement":
      return {
        ...state,
        numberCake: state.numberCake - action.payload,
        total: state.total - state.numberCake,
      };
    default:
      return state;
  }
};

export default CounterReducer;
