const calculateUseMetric = (weight: number, height: number) => (weight / (height / 100 * height / 100));

const calculateUseImperial = (sts: number, lbs: number, feet: number, inches: number) => {
  const totalInches = (feet * 12) + inches;
  const totalLbs = (sts * 14) + lbs;
  return 703 * totalLbs / (totalInches * totalInches);
};

const getRange = (bmi: number) => {
  if (bmi < 18.5) {
    return 'Underweight';
  } if (bmi < 24.9) {
    return 'Healthy weight';
  } if (bmi < 29.9) {
    return 'Overweight';
  } 
    return 'Obese';
};

export {
  calculateUseMetric,
  calculateUseImperial,
  getRange,
};