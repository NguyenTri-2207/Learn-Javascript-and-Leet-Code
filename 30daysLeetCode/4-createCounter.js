var createCounter = function (init) {
  let inittial = init;
  return {
    reset: () => (init = inittial),
    increment: () => ++init,
    decrement: () => --init,
  };
};

const counter = createCounter(11);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
