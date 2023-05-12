import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/Home/index';

export default function App() {
  return (
    <>
     <Home />
      <StatusBar style="light" />
    </>
  );
}

