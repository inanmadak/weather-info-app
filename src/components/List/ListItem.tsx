import { FC, MouseEventHandler } from 'react';

import styles from './styles.module.scss';

export interface ListItemProps {
  onClick?: MouseEventHandler<HTMLLIElement>;
  onRemove?: MouseEventHandler<HTMLLIElement>;
  children?: React.ReactNode;
  id: string | number;
}

export const ListItem: FC<ListItemProps> = ({ id, onClick, onRemove, children }) => {
  return (
    <li onClick={onClick} data-id={id} className={styles.listItem}>
      <span>{children}</span>
      <span className={styles.remove} data-id={id} onClick={onRemove} title='Remove' aria-label='Remove'>
        x
      </span>
    </li>
  );
};
