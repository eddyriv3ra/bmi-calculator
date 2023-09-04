import Image from 'next/image';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
    </div>
  );
};

export default MainPage;
