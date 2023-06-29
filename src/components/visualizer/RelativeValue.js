export const RelativeValue = (desiredPercent, ofValue) => {
  let result = 0;
  //turn percent to value between 0 and 1
  desiredPercent = desiredPercent / 100;
  result = ofValue * desiredPercent;
  return result;
};
