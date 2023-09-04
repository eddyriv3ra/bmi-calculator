import styles from './ResultDisplay.module.scss';

interface IResultDisplay {
  bmi: number;
}

const ResultDisplay = ({ bmi }: IResultDisplay) => {
  const bmiCategories = () => {
    switch (true) {
      case bmi < 18.5: {
        return 'underweight';
      }
      case bmi >= 18.5 && bmi <= 24.9: {
        return 'healthy weight';
      }
      case bmi >= 25 && bmi <= 29.9: {
        return 'overweight';
      }
      case bmi >= 30 && bmi <= 39.9: {
        return 'obese';
      }
      default:
        return 'morbidly obese';
    }
  };

  return (
    <div
      className={`${styles.resultsContainer} ${
        bmi ? styles.resultsWithBmi : ''
      }`}
    >
      {bmi ? (
        <div className={styles.result}>
          <div className={styles.leftDesc}>
            <p className={styles.your}>Your BMI is...</p>
            <p className={styles.bmiValue}>{bmi}</p>
          </div>
          <div className={styles.desc}>
            Your BMI suggests you’re a {bmiCategories()}.
          </div>
        </div>
      ) : (
        <>
          <p className={styles.heading}>Welcome!</p>
          <p className={styles.message}>
            Enter your height and weight and you’ll see your BMI result here
          </p>
        </>
      )}
    </div>
  );
};

export default ResultDisplay;
