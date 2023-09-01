import React from 'react';
import Image from 'next/image';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import styles from './MainPage.module.scss';
import InputText from '@/components/InputText/InputText';

const MainPage = () => {
  const [selectedValue, setSelectedValue] = React.useState('a');
  const [values, setValues] = React.useState({
    height: 0,
    weight: 0,
  });

  const handleValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
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
        <div className={styles.centerContainer}>
          <div className={styles.boxText}>
            <p className={styles.mainText}>Body Mass Index Calculator</p>
            <p className={styles.mainDesc}>
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </p>
          </div>
          <div className={styles.calculatorContainer}>
            <p className={styles.calcTitle}>Enter your details below</p>
            <FormControl
              style={{
                display: 'flex',
                width: '100%',
              }}
            >
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="metric"
                name="radio-buttons-group"
                onChange={handleChange}
                row
                style={{ width: '100%', gap: 24 }}
              >
                <FormControlLabel
                  value="metric"
                  control={
                    <Radio
                      {...controlProps('a')}
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
                      {...controlProps('b')}
                      sx={{
                        padding: 0,
                        transition: 'all 2s',
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
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <InputText
                label="Height"
                setValue={handleValues}
                value={values.height}
                inputName="height"
              />
              <InputText
                label="Weight"
                setValue={handleValues}
                value={values.weight}
                inputName="weight"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
