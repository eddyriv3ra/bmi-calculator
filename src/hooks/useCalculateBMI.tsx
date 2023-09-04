import { useState, useEffect } from 'react';

type Props = {
  metric: {
    cm: number;
    kg: number;
  };
  imperial: {
    ft: number;
    inc: number;
    st: number;
    lbs: number;
  };
  unitSystem: 'metric' | 'imperial';
};

const useCalculateBMI = ({ metric, imperial, unitSystem }: Props) => {
  const [bmi, setBMI] = useState<number>(0);

  useEffect(() => {
    setBMI(0); // resets bmi back to zero when unitSystem is changed
    const calculateBMI = () => {
      let bmiValue = null;
      if (unitSystem === 'metric') {
        const { cm, kg } = metric;
        bmiValue = (kg / cm / cm) * 10000;
        !isNaN(bmiValue) && setBMI(Number(bmiValue.toFixed(1)));
      } else {
        const { ft, lbs, st, inc } = imperial;
        const inches = ft * 12 + inc;
        const pounds = st * 14 + lbs;
        bmiValue = (pounds / Math.pow(inches, 2)) * 703;
        bmiValue !== Infinity &&
          !isNaN(bmiValue) &&
          setBMI(Number(bmiValue.toFixed(1)));
      }
    };
    calculateBMI();
  }, [metric, unitSystem, imperial]);

  return bmi;
};

export default useCalculateBMI;
