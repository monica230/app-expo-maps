import { SafeAreaView, StyleSheet, StatusBar, Text } from 'react-native';
import MapView from 'react-native-maps'
import * as Location from 'expo-location'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#f3c715' />
      <MapView style={styles.map} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  map: {
    width: '100%',
    height: '100%'
  }
});