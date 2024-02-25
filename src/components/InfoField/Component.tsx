import { FC } from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

interface InfoFieldProps {
  label: string;
  value: string;
  vertical?: boolean;
}

export const InfoField: FC<InfoFieldProps> = ({ value, label, vertical }) => {
  return (
    <div className={cx(styles.infoField, { [styles.vertical]: vertical })}>
      <label>{label}</label>
      <span>{value}</span>
    </div>
  );
};
