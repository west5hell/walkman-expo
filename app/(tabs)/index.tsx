import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Button,
  InputAccessoryView,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const inputAccessoryViewID = "uniqueID";
const initialText = "";

export default function HomeScreen() {
  const [text, setText] = useState(initialText);
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView keyboardDismissMode="interactive">
          <TextInput
            style={styles.textInput}
            inputAccessoryViewID={inputAccessoryViewID}
            onChangeText={setText}
            value={text}
            placeholder={"Please type here…"}
          />
          <Button
            onPress={() => router.navigate("/about")}
            title="Go to About"
          />
        </ScrollView>
      </SafeAreaView>
      <InputAccessoryView nativeID={inputAccessoryViewID}>
        <Button onPress={() => setText(initialText)} title="Clear text" />
      </InputAccessoryView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  textInput: {
    padding: 16,
    borderColor: "black",
    borderWidth: 1,
  },
});
