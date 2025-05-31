import { Stack } from "expo-router";
import { useState } from "react";
import { Button, Image, StyleSheet, Text } from "react-native";

export default function Home() {
  //   const navigation = useNavigation();

  //   useEffect(() => {
  //     navigation.setOptions({ headerShown: false });
  //   }, [navigation]);
  const [count, setCount] = useState(0);

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: () => <LogoTitle />,
          headerRight: () => (
            <Button
              onPress={() => setCount((c) => c + 1)}
              title="Update count"
            />
          ),
        }}
      />
      <Text>Count: {count}</Text>
    </>
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
