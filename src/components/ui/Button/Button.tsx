import React, { FC, HTMLProps } from 'react';
import styles from './Button.module.css';

interface IButton extends HTMLProps<HTMLButtonElement> {
  lol?: string;
}

export const Button: FC<IButton> = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};
