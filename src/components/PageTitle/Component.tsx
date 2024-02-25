import { FC } from 'react';

import styles from './styles.module.scss';

export const PageTitle: FC<{ title: string }> = ({ title }) => {
  return <h1 className={styles.pageTitle}>{title}</h1>;
};
