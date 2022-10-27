/**
 * @format
 */

import React from 'react';

import {View} from 'react-native';

import {WebView} from 'react-native-webview';

export default function WebViewComponent() {
  return (
    <View style={{height: 300}}>
      <WebView
        source={{uri: 'https://infinite.red'}}
        style={{width: '100%', height: '100%'}}
      />
    </View>
  );
}
