import { StatusBar } from "expo-status-bar";
import { useMemo, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Platform,
  Keyboard,
} from "react-native";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const imc = useMemo(() => {
    const pesoNum = parseFloat(peso.replace(",", "."));
    const alturaNum = parseFloat(altura.replace(",", "."));

    if (pesoNum > 0 && alturaNum > 0) {
      const imcValue = pesoNum / (alturaNum * alturaNum);
      return imcValue.toFixed(2);
    }

    return null;
  }, [peso, altura]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar style="dark" />

        <Text style={styles.title}>Calculadora de IMC</Text>
        <Text style={styles.subtitle}>Insira seus dados abaixo</Text>

        <TextInput
          style={styles.input}
          value={peso}
          onChangeText={setPeso}
          placeholder="Peso (ex: 75.5)"
          placeholderTextColor="#999"
          keyboardType="numeric"
          returnKeyType="done"
          onSubmitEditing={Keyboard.dismiss}
        />

        <TextInput
          style={styles.input}
          value={altura}
          onChangeText={setAltura}
          placeholder="Altura (ex: 1.80)"
          placeholderTextColor="#999"
          keyboardType="numeric"
          returnKeyType="done"
          onSubmitEditing={Keyboard.dismiss}
        />
        
        {imc && (
          <View style={styles.resultCard}>
            <Text style={styles.resultLabel}>Seu IMC é:</Text>
            <Text style={styles.resultValue}>{imc}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f4f7f8",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 30,
  },
  input: {
    width: "90%",
    height: 55,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 12,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 16,
    color: "#333",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,

    elevation: 3,
  },
  resultCard: {
    marginTop: 30,
    width: "90%",
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  resultLabel: {
    fontSize: 18,
    color: "#666",
  },
  resultValue: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#007AFF",
    marginTop: 5,
  },
});
