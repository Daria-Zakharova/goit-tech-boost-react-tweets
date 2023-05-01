export const transition = (...properties) => {
  const transitionOptions = "250ms ease-in-out";

  return properties
    .reduce((res, propName) => `${res}${propName} ${transitionOptions}, `, "")
    .slice(0, -2);
};
