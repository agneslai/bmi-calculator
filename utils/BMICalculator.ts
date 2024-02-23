const calHealthyWeightRange = (height: number) => {
  const lowerLimit = (18.5 * (height * height)).toFixed(1);
  const upperLimit = (24.9 * (height * height)).toFixed(1);

  return {lowerLimit, upperLimit};
};

const calculateUseMetric = (weight: number, height: number) =>
  weight / (((height / 100) * height) / 100);

const calculateUseImperial = (
  sts: number,
  lbs: number,
  feet: number,
  inches: number,
) => {
  const totalInches = feet * 12 + inches;
  const totalLbs = sts * 14 + lbs;
  return (703 * totalLbs) / (totalInches * totalInches);
};

const getClassification = (bmi: number) => {
  if (Number.isNaN(bmi)) {
    return '';
  }

  if (bmi < 18.5) {
    return 'underweight';
  }
  if (bmi < 24.9) {
    return 'healthy weight';
  }
  if (bmi < 29.9) {
    return 'overweight';
  }
  return 'obese';
};

const getHealthyWeightRangeMetric = (height: number) =>
  calHealthyWeightRange(height / 100);

const getHealthyWeightRangeImperial = (feet: number, inches: number) => {
  const height = feet * 0.3048 + inches * 0.0254;
  return calHealthyWeightRange(height);
};

export {
  calculateUseMetric,
  calculateUseImperial,
  getClassification,
  getHealthyWeightRangeMetric,
  getHealthyWeightRangeImperial,
};
