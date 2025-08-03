import * as Crypto from "expo-crypto";
import React from "react";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
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

type ItemProps = { title: string };

function Item({ title }: ItemProps) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function Home() {
  const handle = () => {
    const id = crypto.randomUUID();
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
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
