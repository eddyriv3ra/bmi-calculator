import FirstSection from './FirstSection';
import FourthSection from './FourthSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.mainContent}>
      <FirstSection />
      <SecondSection />
      {/* <ThirdSection />
      <FourthSection /> */}
    </div>
  );
};

export default MainPage;
