import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>My App</Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Welcome to My App!</Text>
          <Text style={styles.subtitle}>This is a modern React Native template.</Text>
        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    height: 64,
    backgroundColor: '#4286f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbarTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default App;
