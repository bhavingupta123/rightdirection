import { Link } from 'react-router-dom';
import styles from './Button.module.css';

function Button({ children, variant = 'primary', size = 'md', to, href, onClick, fullWidth, icon: Icon, className = '', type = 'button' }) {
  const classes = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {Icon && <Icon className={styles.icon} />}
      {children}
    </>
  );

  if (to) {
    return <Link to={to} className={classes}>{content}</Link>;
  }

  if (href) {
    return <a href={href} className={classes} target="_blank" rel="noopener noreferrer">{content}</a>;
  }

  return <button type={type} className={classes} onClick={onClick}>{content}</button>;
}

export default Button;
