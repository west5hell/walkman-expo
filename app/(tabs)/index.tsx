import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ height: 100, flexDirection: "row" }}>
        <View style={{ backgroundColor: "blue", flex: 0.2 }} />
        <View style={{ backgroundColor: "red", flex: 0.4 }} />
        <Text style={{ color: "pink" }}>Hello World!</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
