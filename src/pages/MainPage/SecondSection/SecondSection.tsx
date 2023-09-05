import Image from 'next/image';
import styles from './SecondSection.module.scss';

const SecondSection = () => {
  return (
    <div className={styles.second}>
      <div className={styles.leftSideContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/image-bmi-guy.png"
            // width={360}
            // height={411}
            alt="guy"
            className={styles.image}
            priority
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.rightSideContainer}>
        <p className={styles.bmiResultMeans}>What your BMI result means</p>
        <p className={styles.bmiDesc}>
          A BMI range of 18.5 to 24.9 is considered a &apos;healthy
          weight.&apos; Maintaining a healthy weight may lower your chances of
          experiencing health issues later on, such as obesity and type 2
          diabetes. Aim for a nutritious diet with reduced fat and sugar
          content, incorporating ample fruits and vegetables. Additionally,
          strive for regular physical activity, ideally about 30 minutes daily
          for five days a week.
        </p>
      </div>
    </div>
  );
};

export default SecondSection;
