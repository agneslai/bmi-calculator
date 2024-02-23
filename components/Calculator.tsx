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
  const [metric, setMetric] = useState<{ kg?: number, cm?: number }>();
  const [imperial, setImperial] = useState<{ feet?: number, inches?: number, sts?: number, lbs?: number }>();
  const [result, setResult] = useState<IResult>(initialState);

  const handleChange = (key: string, newValue: string) => {
    if (key === 'cm' || key === 'kg') {
      setMetric((prevMetric) => ({
        ...prevMetric,
        [key]: newValue ? Number(newValue) : undefined
      }));
    } else {
      setImperial((prevMetric) => ({
        ...prevMetric,
        [key]: newValue ? Number(newValue) : undefined
      }));
    }
  };

  useEffect(() => {
    let bmi = 0;
    let weightRange = { lowerLimit: '0', upperLimit: '0' };

    if (mode === 'metric' && metric?.kg && metric?.cm) {
      bmi = calculateUseMetric(metric.kg, metric.cm);
      weightRange = getHealthyWeightRangeMetric(metric.cm);
    } else if (mode === 'imperial' && (imperial?.feet && imperial.sts)) {
      bmi = calculateUseImperial(imperial.feet, imperial.inches || 0, imperial.sts, imperial.lbs || 0);
      weightRange = getHealthyWeightRangeImperial(imperial.feet, imperial.inches || 0);
    }

    const classification = getClassification(bmi);
    setResult({ bmi: parseFloat(bmi.toFixed(1)), classification, weightRange });

  }, [metric, imperial]);

  useEffect(() => {
    setResult(initialState);
    setMetric(undefined);
    setImperial(undefined);
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
          <CustomInput label="Height" value={metric?.cm} onChange={(e) => handleChange('cm', e.target.value)} unit="cm" />
          <CustomInput label="Weight" value={metric?.kg} onChange={(e) => handleChange('kg', e.target.value)} unit="kg" />
        </div>
        :
        <div className="flex flex-col gap-y-[16px] lg:gap-y-[24px]">
          <div className="flex gap-[16px] lg:gap-[24px] justify-between items-center">
            <CustomInput label="Height" value={imperial?.feet} onChange={(e) => handleChange('feet', e.target.value)} unit="ft" />
            <CustomInput label="" value={imperial?.inches} onChange={(e) => handleChange('inches', e.target.value)} unit="in" />
          </div>
          <div className="flex gap-[16px] lg:gap-[24px] justify-between items-center">
            <CustomInput label="Weight" value={imperial?.sts} onChange={(e) => handleChange('sts', e.target.value)} unit="st" />
            <CustomInput label="" value={imperial?.lbs} onChange={(e) => handleChange('lbs', e.target.value)} unit="lbs" />
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