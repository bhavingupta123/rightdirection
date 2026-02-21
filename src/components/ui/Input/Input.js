import styles from './Input.module.css';

function Input({ label, type = 'text', name, value, onChange, error, required, placeholder, as = 'input', options = [] }) {
  const inputProps = {
    id: name,
    name,
    value,
    onChange,
    placeholder,
    required,
    className: `${styles.input} ${error ? styles.inputError : ''}`,
  };

  return (
    <div className={styles.field}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      {as === 'textarea' ? (
        <textarea {...inputProps} rows={5} />
      ) : as === 'select' ? (
        <select {...inputProps}>
          <option value="">{placeholder || 'Select an option'}</option>
          {options.map((opt) => (
            <option key={opt.value || opt} value={opt.value || opt}>
              {opt.label || opt}
            </option>
          ))}
        </select>
      ) : (
        <input {...inputProps} type={type} />
      )}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}

export default Input;
