import styles from './Card.module.css';

function Card({ children, className = '', hoverable = true, onClick }) {
  const classes = [
    styles.card,
    hoverable ? styles.hoverable : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
}

export default Card;
