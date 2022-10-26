/**
 * @format
 */

import React from 'react';

import {Text} from 'react-native';

import 'react-native-get-random-values';

import {v4 as uuid} from 'uuid';

export default function CryptoNumberComponent() {
  const value = uuid();
  return <Text style={{textAlign: 'center', marginVertical: 10}}>{value}</Text>;
}
