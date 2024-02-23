'use client';

import { useEffect, useState } from 'react';
import { calculateUseImperial, calculateUseMetric, getClassification, getHealthyWeightRangeMetric, getHealthyWeightRangeImperial } from '@/utils/BMICalculator';
import CustomInput from './CustomInput';
import CustomRadio from './CustomRadio';

interface IResult {
  bmi: number;
  classification: string;
  weightRange: { lowerLimit: string, upperLimit: string }
}

const initialState = {
  bmi: 0,
  classification: '',
  weightRange: { lowerLimit: '0', upperLimit: '0' }
};

const Calculator = () => {
  const [mode, setMode] = useState<'metric' | 'imperial' | string>('metric');

  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);

  const [feet, setFeet] = useState<number>(0);
  const [inches, setInches] = useState<number>(0);
  const [sts, setSts] = useState<number>(0);
  const [lbs, setLbs] = useState<number>(0);

  const [result, setResult] = useState<IResult>(initialState);

  useEffect(() => {
    let bmi = 0;
    let weightRange = { lowerLimit: '0', upperLimit: '0' };

    if (mode === 'metric' && (weight !== 0 && height !== 0)) {
      bmi = calculateUseMetric(weight, height);
      weightRange = getHealthyWeightRangeMetric(height);
    } else if (mode === 'imperial' && (feet !== 0 && sts !== 0)) {
      bmi = calculateUseImperial(sts, lbs, feet, inches);
      weightRange = getHealthyWeightRangeImperial(feet, inches);
    }

    const classification = getClassification(bmi);
    setResult({ bmi: parseFloat(bmi.toFixed(1)), classification, weightRange });

  }, [weight, height, sts, lbs, feet, inches]);

  useEffect(() => {
    setResult(initialState);
  }, [mode]);

  return (
    <div className="calculator">
      <p className="calculator__title">Enter your details below</p>

      <div className="flex justify-between items-center gap-x-[24px]">
        <CustomRadio value="metric" checked={mode === 'metric'} label="Metric" onChange={(e) => setMode(e.target.value)} onClick={(value) => setMode(value)} />
        <CustomRadio value='imperial' checked={mode === 'imperial'} label="Imperial" onChange={(e) => setMode(e.target.value)} onClick={(value) => setMode(value)} />
      </div>


      {mode === 'metric' ?
        <div className="flex flex-col gap-y-[16px] md:flex-row md:gap-[24px] justify-between items-center">
          <CustomInput label="Height" value={height} onChange={(e) => setHeight(parseInt(e.target.value, 10))} unit="cm" />
          <CustomInput label="Weight" value={weight} onChange={(e) => setWeight(parseInt(e.target.value, 10))} unit="kg" />
        </div>
        :
        <div className="flex flex-col gap-y-[16px] lg:gap-y-[24px]">
          <div className="flex gap-[16px] lg:gap-[24px] justify-between items-center">
            <CustomInput label="Height" value={feet} onChange={(e) => setFeet(parseInt(e.target.value, 10))} unit="ft" />
            <CustomInput label="" value={inches} onChange={(e) => setInches(parseInt(e.target.value, 10))} unit="in" />
          </div>
          <div className="flex gap-[16px] lg:gap-[24px] justify-between items-center">
            <CustomInput label="Weight" value={sts} onChange={(e) => setSts(parseInt(e.target.value, 10))} unit="st" />
            <CustomInput label="" value={lbs} onChange={(e) => setLbs(parseInt(e.target.value, 10))} unit="lbs" />
          </div>
        </div>
      }

      <div className="calculator__result ">
        {result.bmi !== 0 ?
          <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center gap-y-[24px] md:gap-x-[24px]">
            <div>
              <p className="text-[16px] font-semibold mb-[8px] md:m-0]">Your BMI is...</p>
              <p className="text-[64px] font-semibold leading-110 -tracking-5">{Number.isNaN(result.bmi) ? '-' : result.bmi}</p>
            </div>
            <p className="text-[14px] leading-150 text-start">
              Your BMI suggests you’re {result.classification}. Your ideal weight is between {result.weightRange.lowerLimit}kgs - {result.weightRange.upperLimit}kgs.
            </p>
          </div>
          :
          <div className="flex flex-col gap-y-[24px] ">
            <p className="text-[24px]">Welcome!</p>
            <p className="text-[14px] leading-150">Enter your height and weight and you’ll see your BMI result here</p>
          </div>
        }
      </div>

    </div>
  );
};

export default Calculator;