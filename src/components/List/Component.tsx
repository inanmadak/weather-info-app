import React, { FC } from 'react';

import styles from './styles.module.scss';

export interface ListProps {
  title: string;
  children?: React.ReactNode;
}

export const List: FC<ListProps> = ({ title, children }) => {
  return (
    <div className={styles.list}>
      <h3>{title}</h3>
      <ul>{children}</ul>
    </div>
  );
};
