import styles from './FourthSection.module.scss';
import Card from '@/components/Card';

const FourthSection = () => {
  return (
    <div className={styles.fourth}>
      <div className={styles.firstRow}>
        <div className={styles.limitations}>
          <p className={styles.title}>Limitations of BMI</p>
          <p className={styles.description}>
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>
        <Card
          title="Gender"
          iconName="ph-gender-intersex-light"
          description="The development and body fat composition of girls and boys vary with
        age. Consequently, a child's age and gender are considered when
        evaluating their BMI."
        />
      </div>
      <div className={styles.secondRow}>
        <Card
          title="Age"
          iconName="ph-cake-light"
          description="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
        />
        <Card
          title="Muscle"
          iconName="flexed-biceps"
          description="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
        />
      </div>
      <div className={styles.thirdRow}>
        <Card
          title="Pregnancy"
          iconName="ph-baby-light"
          description="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
        />
        <Card
          title="Race"
          iconName="ph-person-light"
          description="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
        />
      </div>
    </div>
  );
};

export default FourthSection;
