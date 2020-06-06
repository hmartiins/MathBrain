import React from 'react';

import styles from './styles.module.css';

const Wave: React.FC = () => {
  return (
    <svg className={styles.svgWave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#4911a8" fill-opacity="1" d="M0,0L48,5.3C96,11,192,21,288,53.3C384,85,480,139,576,138.7C672,139,768,85,864,90.7C960,96,1056,160,1152,176C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
  );
}

export default Wave;
