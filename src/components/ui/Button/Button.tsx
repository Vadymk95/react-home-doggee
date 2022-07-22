import React, { FC } from 'react';
import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: string;
}

export const Button: FC<IButton> = ({ children, isLoading = false }) => {
  return (
    <button className={styles.btn}>
      {isLoading ? (
        <div className={styles['dot-container']}>
          <div className={styles['dot-flashing']} />
        </div>
      ) : (
        children
      )}
    </button>
  );
};
