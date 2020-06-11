import React from 'react';

import styles from './styles.module.css';

interface Iprops {
  titleButton: string;
}

const Button: React.FC<Iprops> = (props) => {
  return (
    <button className={styles.button}>
      <strong>{props.titleButton}</strong>
    </button>
  );
};

export default Button;
