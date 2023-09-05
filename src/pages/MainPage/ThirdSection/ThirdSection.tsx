import styles from './ThirdSection.module.scss';
import Image from 'next/image';

const items = [
  {
    id: 1,
    iconName: 'bowl-food-light',
    backgroundColor: 'rgba(242, 30, 132, 0.15)',
    title: 'Healthy eating',
    description:
      'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.',
  },
  {
    id: 2,
    iconName: 'ph-barbell-light',
    backgroundColor: 'rgba(246, 145, 52, 0.15)',
    title: 'Regular exercise',
    description:
      'Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.',
  },
  {
    id: 3,
    iconName: 'ph-moon-stars-light',
    backgroundColor: 'rgba(34, 193, 193, 0.15)',
    title: 'Adequate sleep',
    description:
      'Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.',
  },
];

const ThirdSection = () => {
  return (
    <div className={styles.thirdSection}>
      {items.map((item) => {
        return (
          <div key={item.id} className={styles.item}>
            <div
              className={styles.iconContainer}
              style={{ background: item.backgroundColor }}
            >
              <Image
                src={`/images/${item.iconName}.svg`}
                width={32}
                height={32}
                objectFit="contain"
                alt="bowl-food-light"
              />
            </div>
            <div className={styles.rightContainer}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ThirdSection;
