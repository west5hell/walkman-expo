import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  const [titleText, setTitleText] = useState("Bird's Nest");
  const bodyText = "This is not really a bird nest.";

  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.baseText}>
          <Text style={styles.titleText} onPress={onPressTitle}>
            {titleText}
            {"\n"}
            {"\n"}
          </Text>
          <Text numberOfLines={5}>
            {bodyText}{" "}
            <Text style={styles.innerText}>I am the inner Text.</Text>
          </Text>
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontFamily: "Cochin",
    color: "red",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  innerText: {
    color: "cyan",
    fontWeight: "condensedBold",
  },
});
