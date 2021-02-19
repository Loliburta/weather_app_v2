export const ChooseDesktopBackground = (degrees, time) => {
  if (degrees < 5) {
    if (time > 20 || time < 5) {
      return "desktop night";
    }
    return "desktop";
  } else if (degrees < 15) {
    if (time > 20 || time < 5) {
      return "desktop night";
    }
    return "desktop normal";
  } else if (degrees < 30) {
    return "desktop warm";
  }
  return "desktop hot";
};