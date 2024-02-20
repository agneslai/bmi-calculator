"use client"

import { useEffect, useState } from "react";
import CustomInput from "./Input";
import { calculateUseImperial, calculateUseMetric, getRange } from "@/utils/BMICalculator";

interface IResult {
  bmi: number;
  range: string;
}

const Calculator = () => {
  const [mode, setMode] = useState<'metric' | 'imperial'>('imperial');

  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);

  const [feet, setFeet] = useState<number>(0);
  const [inches, setInches] = useState<number>(0);
  const [sts, setSts] = useState<number>(0);
  const [lbs, setLbs] = useState<number>(0);

  const [result, setResult] = useState<IResult>({bmi: 0, range: "Healthy weight"});

  useEffect(() => {
    let bmi = 0;
    if (mode === "metric" && (weight !== 0 && height !== 0)) {
      bmi = calculateUseMetric(weight, height)
    } else if (mode === 'imperial' && (feet !== 0 && sts !== 0)) {
      bmi = calculateUseImperial(sts, lbs, feet, inches);
    }
    const range = getRange(bmi);
    setResult({bmi:parseFloat(bmi.toFixed(1)), range});
  }, [weight, height, sts, lbs, feet, inches])

  return (
    <div className="w-full flex flex-col gap-y-[32px] bg-white p-[32px] rounded-[16px] shadow-default">
      <p className="text-dark-blue font-semibold text-[24px] -tracking-5">Enter your details below</p>

      <div className="flex justify-between items-center gap-x-[24px]">
        <div className="flex flex-1 gap-x-[18px]">
          <input type="radio" name="metric" value="metric" id="metric" />
          <label htmlFor="metric">Metric</label>
        </div>
        <div className="flex flex-1 gap-x-[18px]">
          <input type="radio" name="Imperial" value="Imperial" id="Imperial" />
          <label htmlFor="Imperial">Imperial</label>
        </div>
      </div>

      <div>
        {mode === 'metric' ?
          <div className="flex gap-[24px] justify-between items-center">
            <CustomInput label="Height" value={height} onChange={(e) => setHeight(parseInt(e.target.value))} unit="cm" />
            <CustomInput label="Weight" value={weight} onChange={(e) => setWeight(parseInt(e.target.value))} unit="kg" />
          </div>
          :
          <div className="flex flex-col gap-y-[24px]">
            <div className="flex gap-[24px] justify-between items-center">
              <CustomInput label="Height" value={feet} onChange={(e) => setFeet(parseInt(e.target.value))} unit="ft" />
              <CustomInput label="" value={inches} onChange={(e) => setInches(parseInt(e.target.value))} unit="in" />
            </div>
            <div className="flex gap-[24px] justify-between items-center">
              <CustomInput label="Weight" value={sts} onChange={(e) => setSts(parseInt(e.target.value))} unit="st" />
              <CustomInput label="" value={lbs} onChange={(e) => setLbs(parseInt(e.target.value))} unit="lbs" />
            </div>
          </div>
        }
      </div>

      <div className="bg-gradient-to-r from-[#345FF6] to-[#587DFF] text-white p-[32px] rounded-tr-full rounded-br-full rounded-tl-2xl rounded-bl-2xl overflow-hidden">
        {result ?
          <div className="flex justify-between items-center gap-x-[24px]">
            <div>
              <p className="text-[16px] font-semibold">Your BMI is...</p>
              <p className="text-[64px] title">{result.bmi}</p>
            </div>
            <p className="text-[14px] leading-150">Your BMI suggests you’re a {result.range}. Your ideal weight is between 63.3kgs - 85.2kgs.</p>
          </div>
          :
          <div className="flex flex-col gap-y-[24px] ">
            <p className="text-[24px]">Welcome!</p>
            <p className="text-[14px] leading-150">Enter your height and weight and you’ll see your BMI result here</p>
          </div>
        }
      </div>

    </div>
  )
}

export default Calculator