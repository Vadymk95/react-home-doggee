import React, { FC, HTMLProps, useState } from 'react';
import styles from './Input.module.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface InputProps extends HTMLProps<HTMLInputElement> {
  isError?: boolean;
  helperText?: string | null;
}

export const Input: FC<InputProps> = ({
  isError = false,
  helperText,
  type,
  ...props
}) => {
  const [isShow, setShow] = useState(false);
  const className = isError ? styles.error : '';
  const isPasswordType = type === 'password';
  const isTextType = isPasswordType && isShow;
  const showPasswordHandler = () => setShow(!isShow);
  const iconStyles = { color: '#d5d5d5', '&:hover': { color: '#a9a9a9' } };

  return (
    <div className={styles.container}>
      <input
        type={isTextType ? 'text' : type}
        {...props}
        className={`${styles.input} ${className}`}
      />
      {isError && helperText && (
        <p className={styles.helper_text}>{helperText}</p>
      )}
      {isPasswordType && (
        <div className={styles.password_block} onClick={showPasswordHandler}>
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
