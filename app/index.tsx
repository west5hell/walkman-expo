import { Link, useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function IndexScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Index Screen</Text>
      <Link href={"/second"} push asChild>
        <Text style={styles.button}>Push to /second</Text>
      </Link>

      <Link
        href={{ pathname: "/second", params: { name: "Kadi" } }}
        push
        asChild
      >
        <Text style={styles.button}>Greet Kadi on /second</Text>
      </Link>
      <Button
        title="Greet Mary on /second"
        onPress={() => {
          router.push({ pathname: "/second", params: { name: "Mary" } });
        }}
      />

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
