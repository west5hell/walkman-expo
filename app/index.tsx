import { Link, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

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

      <Pressable
        onPress={() => {
          router.push({ pathname: "/second", params: { name: "Mary" } });
        }}
      >
        <Text style={styles.button}>Greet Mary on /second</Text>
      </Pressable>

      <Link href={"/third"} push asChild>
        <Text style={styles.button}>Push to /third</Text>
      </Link>

      <Pressable
        onPress={() => {
          router.push({ pathname: "/proverbs/[id]", params: { id: "1" } });
        }}
      >
        <Text style={styles.text}>Push to /proverbs/1</Text>
      </Pressable>

      <Link href={"/products/shoes/1234"} push asChild>
        <Text style={styles.button}>Push to /products/shoes/1234</Text>
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
