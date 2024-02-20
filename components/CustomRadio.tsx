'use client';

import { ChangeEventHandler } from 'react';

interface Props {
  label: string;
  value: 'metric' | 'imperial';
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClick: (value: 'metric' | 'imperial') => void;
}

const CustomRadio = ({ label, value, checked, onChange, onClick }: Props) => (
  <button
    className="custom-radio flex flex-1 items-center gap-x-[18px]"
    type='button'
    onClick={() => onClick(value)}
  >
    <input type="radio" name={label} value={value} checked={checked} onChange={onChange} className="appearance-none" />
    <label
      htmlFor={label}
      className="cursor-pointer text-[16px] font-semibold leading-150 text-dark-blue"
    >{label}
    </label>
  </button>
);

export default CustomRadio;