import styles from './InputText.module.scss';

interface IInputText {
  label?: string;
  value: string | number;
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputName: string;
  unit: string;
  className?: string | undefined;
}

const InputText = ({
  label,
  value,
  setValue,
  inputName,
  unit,
  className,
}: IInputText) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredValue = event.target.value;
    if (
      !/^0/.test(enteredValue) &&
      !isNaN(Number(enteredValue)) &&
      enteredValue.length <= 8
    ) {
      setValue(event);
    }
  };

  return (
    <div className={className}>
      {label ? (
        <label className={styles.label} htmlFor="input-text">
          {label}
        </label>
      ) : null}
      <div className={styles.inputContainer}>
        <span className={styles.rightText}>{unit}</span>
        <input
          className={`${styles.input} ${value ? styles.text : ''}`}
          type="number"
          max="12"
          min="1"
          maxLength={2}
          id="input-text"
          placeholder="0"
          value={value === 0 ? '' : value}
          onChange={onChange}
          name={inputName}
        />
      </div>
    </div>
  );
};

export default InputText;
