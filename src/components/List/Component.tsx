import React, { FC } from 'react';

import styles from './styles.module.scss';

export interface ListProps {
  title: string;
  emptyMessage?: string;
  children?: React.ReactNode;
}

export const List: FC<ListProps> = ({ title, emptyMessage, children }) => {
  return (
    <div className={styles.list}>
      <h3>{title}</h3>
      {emptyMessage && <p>{emptyMessage}</p>}
      <ul>{children}</ul>
    </div>
  );
};
