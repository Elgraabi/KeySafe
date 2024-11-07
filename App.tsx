import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Welcome from './src/screens/welcome/welcome';
import Login from './src/screens/login/login';
import RecoverPassword from './src/screens/recoverPassword';

export default function App() {
  return (
      <RecoverPassword/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
