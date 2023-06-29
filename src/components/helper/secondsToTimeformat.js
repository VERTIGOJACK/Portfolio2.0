const secondsToTimeFormat = (inputSeconds) => {
  if (inputSeconds <= 0 || isNaN(inputSeconds)) {
    return "--/--";
  } else {
    let minutes = Math.floor(inputSeconds / 60);
    let seconds = Math.floor(inputSeconds - minutes * 60);
    return minutes + ":" + addLeadingZero(seconds);
  }
};

const addLeadingZero = (input) => {
  if (input <= 9) {
    return "0" + input;
  } else {
    return input;
  }
};

export { secondsToTimeFormat };
