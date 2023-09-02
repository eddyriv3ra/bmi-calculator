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
  const [bmi, setBMI] = useState<string | null>(null);
  useEffect(() => {
    const calculateBMI = () => {
      let bmiValue = null;
      if (unitSystem === 'metric') {
        const { cm, kg } = metric;
        bmiValue = (kg / cm / cm) * 10000;
        !isNaN(bmiValue) && setBMI(bmiValue.toFixed(2));
      } else {
        const { ft, lbs, st, inc } = imperial;
        bmiValue = ((ft * 12 + inc) * 703) / Math.pow(st * 14 + lbs, 2);
        setBMI(bmiValue.toFixed(2));
      }
    };
    calculateBMI();
  }, [metric, unitSystem, imperial]);

  return bmi;
};

export default useCalculateBMI;
