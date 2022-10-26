import React from 'react';
import classes from './styles.module.scss';

const NotificationCard: React.FC<NotificationCardProps> = (props) => {
  const { imgSrc, name, description, time } = props;

  return (
    <section className={classes.card}>
      <img src={imgSrc} alt={`${name} ${description}`} className={classes.cardImage} />
      <div className={classes.cardContent}>
        <p className={classes.cardDescription}>
          <span className={classes.cardName}>{name}</span> {description}
        </p>
        <p className={classes.cardTime}>{time}</p>
      </div>
    </section>
  );
};

export default NotificationCard;
