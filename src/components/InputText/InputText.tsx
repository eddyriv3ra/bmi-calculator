import styles from './InputText.module.scss';

interface IInputText {
  label: string;
  value: string | number;
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputName: string;
}

const InputText = ({ label, value, setValue, inputName }: IInputText) => {
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
    <div>
      {label ? (
        <label className={styles.label} htmlFor="input-text">
          {label}
        </label>
      ) : null}
      <div className={styles.inputContainer}>
        <span className={styles.rightText}>cm</span>
        <input
          className={`${styles.input} ${value ? styles.text : ''}`}
          type="text"
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
