import React, { FC, HTMLProps } from 'react';
import styles from './Input.module.css';

interface InputProps extends HTMLProps<HTMLInputElement> {
  isError?: boolean;
  helperText?: string | null;
}

export const Input: FC<InputProps> = ({
  isError = false,
  helperText,
  ...props
}) => {
  const className = isError ? styles.error : '';
  return (
    <>
      <input {...props} className={`${styles.input} ${className}`} />
      {isError && helperText && (
        <p className={styles.helper_text}>{helperText}</p>
      )}
    </>
  );
};
