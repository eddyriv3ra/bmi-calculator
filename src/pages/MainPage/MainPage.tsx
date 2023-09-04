import React from 'react';
import Image from 'next/image';
import {
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  Typography,
} from '@mui/material';
import InputText from '@/components/InputText/InputText';
import ResultDisplay from '@/components/ResultDisplay/ResultDisplay';
import useCalculateBMI from '@/hooks/useCalculateBMI';
import styles from './MainPage.module.scss';
import { useEffect } from 'react';

const defaultValues = {
  metric: {
    cm: 0,
    kg: 0,
  },
  imperial: {
    ft: 0,
    inc: 0,
    st: 0,
    lbs: 0,
  },
};

const MainPage = () => {
  const [selectedValue, setSelectedValue] = React.useState<
    'metric' | 'imperial'
  >('metric');
  const [values, setValues] = React.useState(defaultValues);
  const bmi = useCalculateBMI({ ...values, unitSystem: selectedValue });

  useEffect(() => {
    setValues(defaultValues);
  }, [selectedValue]);

  const handleValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [selectedValue]: {
        ...values[selectedValue],
        [e.target.name]: Number(e.target.value),
      },
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const bmiUnitSystem = event.target.value as 'metric' | 'imperial';
    setSelectedValue(bmiUnitSystem);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (
    <div>
      <div className={styles.bodyMass}>
        <div className={styles.gameIcon}>
          <Image
            src="/images/game-icons.svg"
            alt="game-icon"
            width={64}
            height={64}
          />
        </div>
        <div className={styles.boxText}>
          <p className={styles.mainText}>Body Mass Index Calculator</p>
          <p className={styles.mainDesc}>
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
        <div className={styles.centerContainer}>
          <div className={styles.calculatorContainer}>
            <p className={styles.calcTitle}>Enter your details below</p>
            <FormControl className={styles.formControl}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="metric"
                name="radio-buttons-group"
                onChange={handleChange}
                row
                className={styles.radioGroup}
              >
                <FormControlLabel
                  value="metric"
                  control={
                    <Radio
                      {...controlProps('metric')}
                      sx={{
                        padding: 0,
                      }}
                      icon={
                        <Image
                          src="/images/radio-button-selected.svg"
                          alt="radio-button-selected"
                          width={25}
                          height={25}
                        />
                      }
                      checkedIcon={
                        <Image
                          src="/images/radio-button.svg"
                          alt="radio-button"
                          width={25}
                          height={25}
                        />
                      }
                      className={styles.radio}
                    />
                  }
                  style={{ width: 238, margin: 0, gap: 18 }}
                  label={
                    <Typography
                      style={{
                        fontWeight: '600',
                        lineHeight: '150%',
                        color: '#253347',
                      }}
                    >
                      Metric
                    </Typography>
                  }
                />
                <FormControlLabel
                  value="imperial"
                  control={
                    <Radio
                      {...controlProps('imperial')}
                      sx={{
                        padding: 0,
                      }}
                      icon={
                        <Image
                          src="/images/radio-button-selected.svg"
                          alt="radio-button-selected"
                          width={25}
                          height={25}
                        />
                      }
                      checkedIcon={
                        <Image
                          src="/images/radio-button.svg"
                          alt="radio-button"
                          width={25}
                          height={25}
                        />
                      }
                      className={styles.radio}
                    />
                  }
                  style={{ width: 238, margin: 0, gap: 18 }}
                  label={
                    <Typography
                      style={{
                        fontWeight: '600',
                        lineHeight: '150%',
                        color: '#253347',
                      }}
                    >
                      Imperial
                    </Typography>
                  }
                />
              </RadioGroup>
            </FormControl>
            {selectedValue === 'metric' ? (
              <div
                className={`${styles.inputContainer} ${styles.animationMetric}`}
              >
                <InputText
                  label="Height"
                  setValue={handleValues}
                  value={values.metric.cm}
                  inputName="cm"
                  unit="cm"
                />
                <InputText
                  label="Weight"
                  setValue={handleValues}
                  value={values.metric.kg}
                  inputName="kg"
                  unit="kg"
                />
              </div>
            ) : (
              <div
                className={`${styles.inputContainer} ${styles.animationImperial}`}
              >
                <InputText
                  label="Height"
                  setValue={handleValues}
                  value={values.imperial.ft}
                  inputName="ft"
                  unit="ft"
                />
                <InputText
                  setValue={handleValues}
                  value={values.imperial.inc}
                  inputName="inc"
                  unit="in"
                  className={styles.customInputStyle}
                />
                <InputText
                  label="Weight"
                  setValue={handleValues}
                  value={values.imperial.st}
                  inputName="st"
                  unit="st"
                />
                <InputText
                  setValue={handleValues}
                  value={values.imperial.lbs}
                  inputName="lbs"
                  unit="lbs"
                  className={styles.customInputStyle}
                />
              </div>
            )}
            <ResultDisplay bmi={bmi} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
