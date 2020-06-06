import React from 'react';

import Ilustration from './images/mainImg.png'; 
import styles from './styles.module.css';

const Main: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <div className={styles.headerContainer}>
            <span className={styles.textLogo}> 
              MathBrain
            </span>
            <div className={styles.headerRight}>
              <span className={styles.spanHeader}>Sobre o porjeto</span>
              <span className={styles.spanHeader}>Contato</span>
              <span className={styles.spanHeader}>Sobre</span>
              <span className={styles.myButton}>Baixe o app mobile</span>
            </div>  
          </div>
          <div className={styles.illustration}>
            <img 
              src={Ilustration} 
              className={styles.illustrationImg} 
              alt="ilustration"
            />
          </div>
        </div>
      </div>      
    </div>
  );
}

export default Main;
