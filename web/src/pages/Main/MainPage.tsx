import React from 'react';

// import Wave from './components/wave';
import styles from './styles.module.css';

const Main: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <span className={styles.textLogo}>
            MathBrain
          </span>  
        </div>

      </div>      
    </div>
  );
}

export default Main;
