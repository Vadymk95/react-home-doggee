import { IInput } from '@models';
import React, { FC } from 'react';
import styles from './Checkbox.module.css';

export const Checkbox: FC<IInput> = ({ label, checked, ...props }) => {
  return (
    <label className={styles.container}>
      <input className={styles.checkbox} type="checkbox" checked={checked} {...props}/>
      <span className={styles.custom_checkbox} />
      <span className={styles.label}>{label}</span>
    </label>
  );
};
