import styles from './Badge.module.css';

function Badge({ children, color, className = '' }) {
  return (
    <span
      className={`${styles.badge} ${className}`}
      style={color ? { background: `${color}15`, color: color } : {}}
    >
      {children}
    </span>
  );
}

export default Badge;
