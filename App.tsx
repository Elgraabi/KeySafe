import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Welcome from './src/screens/welcome/welcome';
import Login from './src/screens/login/login';
import RecoverPassword from './src/screens/recoverPassword';
import RegisterUser from './src/screens/registerUser';

export default function App() {
  return (
      <Welcome/>
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
