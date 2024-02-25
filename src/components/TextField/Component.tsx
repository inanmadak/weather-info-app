import { FC, HTMLProps, PropsWithoutRef } from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

export interface TextFieldProps extends HTMLProps<Omit<HTMLInputElement, 'type' | 'capture'>> {
  label: string;
}

export const TextField: FC<TextFieldProps> = ({ className, ref, ...props }) => {
  return (
    <div>
      <input type='text' className={cx(styles.textField, className)} {...props} />
    </div>
  );
};
