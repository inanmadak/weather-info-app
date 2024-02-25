import { FC, HTMLProps } from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

export interface TextFieldProps extends HTMLProps<Omit<HTMLInputElement, 'type' | 'capture'>> {
  label?: string;
}

export const TextField: FC<TextFieldProps> = ({ className, label, ref, ...props }) => {
  return (
    <div>
      {label ? <label>{label}</label> : null}
      <input type='text' className={cx(styles.textField, className)} {...props} />
    </div>
  );
};
