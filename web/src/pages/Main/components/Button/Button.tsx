import React from 'react';

import styles from './styles.module.css';

interface Iprops {
  titleButton: string;
}

const Button: React.FC<Iprops> = (props) => {
  return <strong className={styles.button}>{props.titleButton}</strong>;
};

export default Button;
