import * as Crypto from "expo-crypto";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Pressable,
  PressableProps,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type DataType = {
  readonly id: string;
  title: string;
};

const createData = (title: string): DataType => ({
  id: Crypto.randomUUID(),
  title,
});

const DATA: DataType[] = [
  createData("Button"),
  createData("Image"),
  createData("ImageBackground"),
  createData("KeyboardAvoidingView"),
];

type ItemProps = { title: string } & PressableProps;

function Item({ title, ...props }: ItemProps) {
  return (
    <Pressable onPress={props.onPress} style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

export default function Home() {
  const router = useRouter();

  const handleItemOnPress = () => {
    // router.push("/core-components/button-example");
    router.push("/core-components/keyboardAvodingview-example");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item title={item.title} onPress={handleItemOnPress} />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 32,
  },
});
