import styles from './ResultDisplay.module.scss';

const ResultDisplay = () => {
  return (
    <div className={styles.resultsContainer}>
      <p className={styles.heading}>Welcome!</p>
      <p className={styles.message}>
        Enter your height and weight and you’ll see your BMI result here
      </p>
    </div>
  );
};

export default ResultDisplay;
