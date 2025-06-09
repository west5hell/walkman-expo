import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ProductScreen() {
  const params = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{JSON.stringify(params, null, " ")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "700",
  },
  button: {
    fontWeight: "600",
    fontSize: 18,
    letterSpacing: 0.05 * 18,
    textAlign: "center",
    backgroundColor: "blue",
    color: "white",
    padding: 20,
    marginBottom: 20,
  },
});
