import React, { ChangeEventHandler, Dispatch, SetStateAction } from 'react'

interface Props {
  label?: string;
  value: number;
  unit: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const CustomInput = ({ label = "x", value, unit, onChange }: Props) => {
  return (
    <div className='flex flex-col gap-y-[8px]'>
      <p className='text-blue-grey text-[14px] leading-150'>{label}</p>
      <div className="flex justify-between items-center px-[24px] py-[20px] gap-x-[24px] rounded-[12px] border-grey border-[1px] focus-within:border-blue">
        <input
          type="number"
          value={value}
          onChange={onChange}
          name={label}
          className='w-full outline-none text-[24px] font-semibold'
          min={0}
        />
        <p className='text-blue font-semiBold text-[24px] -tracking-5'>{unit}</p>
      </div>
    </div>
  )
}

export default CustomInput;