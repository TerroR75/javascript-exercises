const ftoc = function (f) {
  let c = (f - 32) * 0.5556;
  return Math.round(c * 10) / 10;
};

const ctof = function (c) {
  let f = (c * 1.8) + 32;
  return Math.round(f * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
