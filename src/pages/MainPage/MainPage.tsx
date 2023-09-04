import BodyMassCalculator from './BodyMassCalculator';
import Image from 'next/image';
import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div>
      <BodyMassCalculator />
      <div className={styles.second}>
        <div className={styles.leftSideContainer}>
          <Image
            src="/images/image-bmi-guy.png"
            width={468}
            height={533}
            alt="guy"
            className={styles.image}
          />
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
    </div>
  );
};

export default MainPage;
