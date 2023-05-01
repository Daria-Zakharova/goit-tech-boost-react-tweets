export const addSeparatingCommas = (num) => {
  // add comma every 3 symbols starting from the 3rd symbol from the end using regex
  if (num < 1000) {
    return num;
  }
  const regex = /\B(?=(\d{3})+(?!\d))/g;
  const result = num.toString().replace(regex, ",");

  return result;
};
