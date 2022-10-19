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

function getReactNativeVersion() {
  const version = `${coreVersion.major}.${coreVersion.minor}.${coreVersion.patch}`;
  return coreVersion.prerelease
    ? version + `-${coreVersion.prerelease}`
    : version;
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

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar />
      <ScrollView
        onLayout={onLayout}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.mainContainer}>
        <Text style={styles.textStatus}>
          status: {getReactNativeVersion()} -{' '}
          {isFabric ? 'Fabric' : 'No Fabric'} -{' '}
          {isFabric && concurrentRoot ? 'Concurrent' : 'No Concurrent'}
        </Text>

        <Text style={styles.textTitle}>Hello world</Text>
        <Text style={styles.textDescription}>Just doing some tests</Text>
        <Text style={styles.textTitle}>Hello world</Text>
        <Text style={styles.textDescription}>Just doing some tests</Text>
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
