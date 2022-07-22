import { InputHTMLAttributes } from 'react';
import { ChangeEventType } from 'models/events';

export interface IInput
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
  isError?: boolean;
  label?: string;
  helperText?: string | null;
  onChange: ChangeEventType;
}
