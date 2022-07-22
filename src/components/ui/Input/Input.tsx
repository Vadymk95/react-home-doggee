import React, { FC, useState, useRef } from 'react';

import { IInput } from '@models';

import styles from './../Input.module.css';

export const Input: FC<IInput> = ({
  isError = false,
  label,
  helperText,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const hasError = isError ? styles.error : '';
  const inputRefHandler = () => inputRef.current?.focus();

  return (
    <div
      className={`${styles.container} ${hasError}`}
      onClick={inputRefHandler}
    >
      <input ref={inputRef} className={styles.input} {...props} />
      <label className={styles.label}>{label}</label>
      {isError && helperText && (
        <p className={styles.helper_text}>{helperText}</p>
      )}
    </div>
  );
};
