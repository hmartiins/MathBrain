import React from 'react';

import Ilustration from './images/mainImg.png'; 
import styles from './styles.module.css';
import { FaArrowRight } from 'react-icons/fa';

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
              <span className={styles.spanHeader}>Sobre o projeto</span>
              <span className={styles.spanHeader}>Contato</span>
              <span className={styles.spanHeader}>Sobre</span>
              <span className={styles.app}>Baixe o app mobile</span>
            </div>  
          </div>
          <div className={styles.containerMain}>
            <div className={styles.illustration}>
              <img 
                src={Ilustration} 
                className={styles.illustrationImg} 
                alt="ilustration"
              />
            </div>
            <div className={styles.contentMain}>
              <span className={styles.textMain}>
                Uma nova maneira de realizar cálculos..
              </span><br/>
              <p className={styles.textSecondary}>
                Esse é o seu site para realizar contas matemáticas com resulução
                e com <br />estabilidade. Abandone de vez aquelas calculadoras, onde 
                você apenas coloca<br /> os números e ela te mostra o resultado. Aqui 
                você calcula e aprende !!
              </p>
              <button className={styles.button}>
                <span>
                  Entre já !
                </span>
                <FaArrowRight className={styles.icon} size={16} color={'#fff' } />
              </button>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
}

export default Main;
