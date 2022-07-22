import React, { FC, useState, useRef } from 'react';
import styles from './../Input.module.css';
import passStyles from './PasswordInput.module.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { InputHTMLAttributes } from 'react';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
  label: string;
  isError?: boolean;
  helperText?: string | null;
}

export const PasswordInput: FC<InputProps> = ({
  isError = false,
  label,
  helperText,
  type,
  value,
  ...props
}) => {
  const [isShow, setShow] = useState(false);
  const [isFocus, setFocus] = useState(!!value ?? false);
  const inputRef = useRef<HTMLInputElement>(null);
  const hasError = isFocus && isError ? styles.error : '';
  const isPasswordType = type === 'password';
  const isTextType = isPasswordType && isShow;
  const showPasswordHandler = () => setShow(!isShow);
  const onBlurHandler = () => !value && setFocus(false);
  const inputRefHandler = () => {
    inputRef.current?.focus();
    setFocus(true);
  };
  const iconStyles = { color: '#d5d5d5', '&:hover': { color: '#a9a9a9' } };

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
        type={isTextType ? 'text' : type}
        {...props}
      />
      {isFocus && isError && helperText && (
        <p className={styles.helper_text}>{helperText}</p>
      )}
      {value && isPasswordType && (
        <div className={passStyles.password_block} onClick={showPasswordHandler}>
          {isShow ? (
            <VisibilityOffIcon sx={iconStyles} />
          ) : (
            <VisibilityIcon sx={iconStyles} />
          )}
        </div>
      )}
    </div>
  );
};
