import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hello word</Text>
      <Button title="Clique aqui"
      onPress={() => alert('Botão clicado!')}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 45,
    color: 'red',
  }
});
