import Image from 'next/image';
import styles from './Card.module.scss';

interface ICard {
  title: string;
  description: string;
  iconName: string;
}

const Card = ({ title, description, iconName }: ICard) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <Image
          src={`/images/${iconName}.svg`}
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
