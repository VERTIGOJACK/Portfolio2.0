const formatDateTime = (string) => {
  let myString = "";
  myString = string;
  const dateTime = myString.split("T");
  return dateTime[0];
};

export default formatDateTime;
