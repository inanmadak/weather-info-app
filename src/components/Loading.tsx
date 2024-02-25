import { CSSProperties } from 'react';

const styles: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
};

export const Loading = () => {
  return <div style={styles}>Loading...</div>;
};
