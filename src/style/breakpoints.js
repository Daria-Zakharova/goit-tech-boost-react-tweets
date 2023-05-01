const breakpoints = {
  desk: 1200,
  tab: 768,
};

export const mediaQuery = (key) => {
  if (key === "mob") {
    return `@media screen and (max-width: ${breakpoints.tab - 1}px)`;
  }
  return `@media screen and (min-width: ${breakpoints[key]}px)`;
};
