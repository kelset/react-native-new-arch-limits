/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.mainContainer}>
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
});

export default App;
