const calculateUseMetric = (weight: number, height: number) => {
  return (weight / (height / 100 * height / 100));
}

const calculateUseImperial = (sts: number, lbs: number, feet: number, inches: number) => {
  const totalInches = (feet * 12) + inches;
  const totalLbs = (sts * 14) + lbs;
  return 703 * totalLbs / (totalInches * totalInches);
}

const getRange = (bmi: number) => {
  if (bmi < 18.5) {
    return "Underweight"
  } else if (bmi < 24.9) {
    return "Healthy weight"
  } else if (bmi < 29.9) {
    return "Overweight"
  } else {
    return "Obese"
  };
}

export {
  calculateUseMetric,
  calculateUseImperial,
  getRange,
}