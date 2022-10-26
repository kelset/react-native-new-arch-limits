/**
 * @format
 */

import React, {useState, useCallback} from 'react';

import Slider from '@react-native-community/slider';

export default function SliderComponent() {
  const [value, setValue] = useState(0);
  const onValueChange = useCallback(val => {
    setValue(val);
  }, []);

  return (
    <Slider
      style={{width: 200, height: 40}}
      minimumValue={0}
      maximumValue={1}
      minimumTrackTintColor="#FFFFFF"
      maximumTrackTintColor="#000000"
      onValueChange={onValueChange}
      value={value}
    />
  );
}
