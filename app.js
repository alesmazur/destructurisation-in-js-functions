const guitarStrings = {
  st1: "E",
  st2: "B",
  st3: "G",
  st4: "D",
  st5: "A",
  St6: "E",
};
const aboutGuitar = ({ st1, st2, st3, st4 }) => {
  return `I prefere to drop  ${st1} string on my guitar to ${st4} string`;
};
console.log(aboutGuitar(guitarStrings));
