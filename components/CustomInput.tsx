import { ChangeEventHandler } from 'react';

interface Props {
  label?: string;
  value?: number;
  unit: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const CustomInput = ({ label, value, unit, onChange }: Props) => (
  <label className='flex flex-col gap-y-[8px] w-full' htmlFor={label}>
    <span className='text-blue-grey text-[14px] text-start leading-150 min-h-[20px]'>{label}</span>
    <div className="flex justify-between items-center px-[24px] py-[20px] gap-x-[24px] rounded-[12px] border-grey border-[1px] focus-within:border-blue">
      <input
        id={label}
        type="number"
        value={value}
        onChange={onChange}
        placeholder='0'
        min={0}
        className="w-full outline-none text-[24px] font-semibol placeholder-gray-300 text-dark-blue"
      />
      <p className='text-blue font-semiBold text-[24px] -tracking-5'>{unit}</p>
    </div>
  </label>
);

export default CustomInput;