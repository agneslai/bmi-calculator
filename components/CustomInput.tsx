import React, { ChangeEventHandler, Dispatch, SetStateAction } from 'react'

interface Props {
  label?: string;
  value: number;
  unit: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const CustomInput = ({ label, value, unit, onChange }: Props) => {
  return (
    <label className='flex flex-col gap-y-[8px]'>
      <span className='text-blue-grey text-[14px] leading-150 min-h-[20px]'>{label}</span>
      <div className="flex justify-between items-center px-[24px] py-[20px] gap-x-[24px] rounded-[12px] border-grey border-[1px] focus-within:border-blue">
        <input
          type="number"
          value={value}
          onChange={onChange}
          name={label || unit}
          className={`w-full outline-none text-[24px] font-semibol ${value === 0 ? 'text-grey' : 'text-dark-blue'}`}
          min={0}
        />
        <p className='text-blue font-semiBold text-[24px] -tracking-5'>{unit}</p>
      </div>
    </label>
  )
}

export default CustomInput;