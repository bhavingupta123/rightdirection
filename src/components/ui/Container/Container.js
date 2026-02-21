import styles from './Container.module.css';

function Container({ children, className = '', narrow, wide }) {
  const classes = [
    styles.container,
    narrow ? styles.narrow : '',
    wide ? styles.wide : '',
    className,
  ].filter(Boolean).join(' ');

  return <div className={classes}>{children}</div>;
}

export default Container;
