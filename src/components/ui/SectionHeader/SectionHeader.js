import styles from './SectionHeader.module.css';

function SectionHeader({ subtitle, title, description, align = 'center', light = false }) {
  const classes = [
    styles.header,
    styles[align],
    light ? styles.light : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {subtitle && (
        <span className={styles.subtitle}>{subtitle}</span>
      )}
      <h2 className={styles.title}>{title}</h2>
      {description && (
        <p className={styles.description}>{description}</p>
      )}
    </div>
  );
}

export default SectionHeader;
