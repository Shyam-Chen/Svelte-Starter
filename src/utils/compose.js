export const compose = (f, g) => {
  return (x) => f(g(x));
};
