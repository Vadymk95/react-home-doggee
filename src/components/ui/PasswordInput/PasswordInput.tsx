import React, { FC, useState } from 'react';
import styles from './PasswordInput.module.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { InputHTMLAttributes } from 'react';
import { Input } from '../Input/Input';
import { ChangeEventType } from '@models';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
  isError?: boolean;
  helperText?: string | null;
  onChange: ChangeEventType;
}

export const PasswordInput: FC<InputProps> = ({
  isError = false,
  helperText,
  value,
  onChange,
}) => {
  const [type, setType] = useState('password');
  const [isShow, setShow] = useState(false);

  const showPasswordHandler = () => {
    setShow(!isShow);
    if (isShow) return setType('password');
    setType('text');
  };

  const iconStyles = { color: '#d5d5d5', '&:hover': { color: '#a9a9a9' } };

  return (
    <div className={styles.container}>
      <Input
        isError={isError}
        type={type}
        label="password"
        helperText={helperText}
        value={value}
        onChange={onChange}
      />
      {value && (
        <div className={styles.show_icon_block} onClick={showPasswordHandler}>
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
