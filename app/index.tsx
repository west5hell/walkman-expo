import { Link, Stack } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Home() {
  //   const navigation = useNavigation();

  //   useEffect(() => {
  //     navigation.setOptions({ headerShown: false });
  //   }, [navigation]);

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "My home",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitle: () => <LogoTitle />,
        }}
      />
      <Text>I'm in a Stack!</Text>
      <Link href={{ pathname: "/details", params: { name: "Bacon" } }}>
        Go to Details
      </Link>
    </View>
  );
}

function LogoTitle() {
  return (
    <Image
      style={styles.image}
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
});
