export const ChooseBackground = (degrees, time) => {
  if (degrees < 5) {
    if (time > 20 || time < 5) {
      return "app night";
    }
    return "app";
  } else if (degrees < 15) {
    if (time > 20 || time < 5) {
      return "app night";
    }
    return "app normal";
  } else if (degrees < 30) {
    return "app warm";
  }
  return "app hot";
};
