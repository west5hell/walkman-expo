import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function SecondScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Second Screen</Text>
      <Link href={"/third"} push asChild>
        <Text style={styles.button}>Push to /third</Text>
      </Link>
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
