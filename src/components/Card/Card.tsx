import Image from 'next/image';
import styles from './Card.module.scss';

interface ICard {
  title: string;
  description: string;
  iconName: string;
  customCardStyle?: string;
}

const Card = ({ title, description, iconName, customCardStyle }: ICard) => {
  return (
    <div className={`${styles.card} ${customCardStyle}`}>
      <div className={styles.cardTop}>
        <Image
          src={`./images/${iconName}.svg`}
          width={32}
          height={32}
          alt="gender"
        />
        <p className={styles.title}>{title}</p>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Card;
