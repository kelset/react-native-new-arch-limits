/**
 * @format
 */

import React from 'react';
import {View} from 'react-native';

import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function BouncyCheckboxComponent() {
  return (
    <View style={{marginVertical: 10}}>
      <BouncyCheckbox
        size={25}
        fillColor="red"
        unfillColor="#FFFFFF"
        text="Custom Checkbox"
        iconStyle={{borderColor: 'red'}}
        innerIconStyle={{borderWidth: 2}}
        onPress={(isChecked: boolean) => {}}
      />
    </View>
  );
}
