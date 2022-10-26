/* eslint-disable dot-notation */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useCallback} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

import {version as coreVersion} from 'react-native/Libraries/Core/ReactNativeVersion';

import SliderComponent from './SliderComponent';
import WebViewComponent from './WebViewComponent';

function getReactNativeVersion() {
  const version = `${coreVersion.major}.${coreVersion.minor}.${coreVersion.patch}`;
  return coreVersion.prerelease
    ? version + `-${coreVersion.prerelease}`
    : version;
}

function isTMActive() {
  return global.__turboModuleProxy != null;
}

const App: () => Node = ({concurrentRoot}) => {
  const [isFabric, setFabric] = useState(false);
  const onLayout = useCallback(
    ev => {
      setFabric(
        Boolean(
          ev.currentTarget['_internalInstanceHandle']?.stateNode?.canonical,
        ),
      );
    },
    [setFabric],
  );

  const [isTM] = useState(isTMActive());

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar />
      <ScrollView
        onLayout={onLayout}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.mainContainer}>
        <Text style={styles.textStatus}>
          version: {getReactNativeVersion()}
          {'\n'} {isTM ? 'TM ON' : 'TM OFF'} -{' '}
          {isFabric ? 'Fabric ON' : 'Fabric OFF'} -{' '}
          {isFabric && concurrentRoot ? 'Concurrent ON' : 'Concurrent OFF'}
        </Text>

        <Text style={styles.textTitle}>Slider component</Text>
        <Text style={styles.textDescription}>
          a visual lib with "official support" for new arch
        </Text>
        <SliderComponent />
        <Text style={styles.textTitle}>WebView component</Text>
        <Text style={styles.textDescription}>
          a visual lib without "official support" for new arch
        </Text>
        <WebViewComponent />
        <Text style={styles.textTitle}>Hello world</Text>
        <Text style={styles.textDescription}>Just doing some tests</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#EEE',
    paddingHorizontal: 5,
  },
  textTitle: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: '600',
  },
  textDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  textStatus: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default App;
