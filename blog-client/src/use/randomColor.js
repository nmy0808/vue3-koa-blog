export const randomColor = () => {
  const getColor =()=>Math.random() * 255;
  return `
  rgb(${getColor()},${getColor()},${getColor()})
  `;
};
