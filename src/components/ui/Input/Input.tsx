import React, { FC, useState, useRef } from 'react';
import styles from './../Input.module.css';
import { InputHTMLAttributes } from 'react';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
  label: string;
  isError?: boolean;
  helperText?: string | null;
}

export const Input: FC<InputProps> = ({
  isError = false,
  label,
  helperText,
  type,
  value,
  ...props
}) => {
  const [isFocus, setFocus] = useState(!!value ?? false);
  const inputRef = useRef<HTMLInputElement>(null);
  const hasError = isFocus && isError ? styles.error : '';
  const onBlurHandler = () => !value && setFocus(false);
  const inputRefHandler = () => {
    inputRef.current?.focus();
    setFocus(true);
  };

  return (
    <div
      className={`${styles.container} ${
        isFocus ? styles.focused : ''
      } ${hasError}`}
      onClick={inputRefHandler}
    >
      <label className={styles.label}>
        {label}
      </label>
      <input
        ref={inputRef}
        onBlur={onBlurHandler}
        className={styles.input}
        type={type}
        {...props}
      />
      {isFocus && isError && helperText && (
        <p className={styles.helper_text}>{helperText}</p>
      )}
    </div>
  );
};
