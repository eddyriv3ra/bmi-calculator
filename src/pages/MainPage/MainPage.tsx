import React from 'react';
import Image from 'next/image';
import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div>
      <div className={styles.bodyMass}>
        <div className={styles.gameIcon}>
          <Image
            src="/images/game-icons.svg"
            alt="game-icon"
            width={64}
            height={64}
          />
        </div>
        <div className={styles.centerContainer}>
          <div className={styles.boxText}>
            <p className={styles.mainText}>Body Mass Index Calculator</p>
            <p className={styles.mainDesc}>
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </p>
          </div>
          <div className={styles.calculatorContainer}></div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
