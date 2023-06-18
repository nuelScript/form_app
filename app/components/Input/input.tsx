'use client';
import React from 'react';

interface InputProps {
    id: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    value?: string;
    label: string;
    type?: React.HTMLInputTypeAttribute;
    disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    onChange,
    type,
    value,
    disabled,   
}) => {
    return (
      <div className=" w-full relative">
        <input
          id={id}
          value={value}
          type={type}
          onChange={onChange}
          disabled={disabled}
          className={`block
                rounded-md
                px-6
                pt-6
                pb-1
                w-full
                text-md
                text-black
                bg-neutral-300
                appearance-none
                focus:outline-none
                focus:ring-0
                peer
                    `}
                placeholder=''
        />
        <label
          className={`
                    absolute
            text-md
            text-zinc-900
            duration-150
            transform
            -translate-y-3
            scale-75
            top-4
            z-10
            origin-[0]
            left-5
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus: scale-75
            peer-focus:-translate-y-3
                `}
          htmlFor={id}
        >
          {label}
        </label>
      </div>
    );
}

export default Input;