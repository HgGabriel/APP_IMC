import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState(1.98);
  const [imc, setImc] = useState(0);

  const calculoIMc = (peso, altura) => {
    setImc(peso / (altura * altura))
  }

  useEffect(() => {
    calculoIMc(peso, altura)
  }, [])
  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={setPeso}
        keyboardType='numeric'
      />
      <TextInput style={styles.input} />
      <Text>daniel lindo {imc.toFixed(2)}</Text>
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
  input: {
    color:'black',
    margin: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "gray",
    width: 150,
    height: 20,
  }
});
