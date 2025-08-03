import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8",
    title: "Fourth Item",
  },
  {
    id: "o9p8q7r6-s5t4-u3v2-w1x0-y1z2a3b4c5d6",
    title: "Fifth Item",
  },
  {
    id: "e7f8g9h0-i1j2-k3l4-m5n6-o7p8q9r0s1t2",
    title: "Sixth Item",
  },
  {
    id: "u3v4w5x6-y7z8-a9b0-c1d2-e3f4g5h6i7j8",
    title: "Seventh Item",
  },
  {
    id: "k9l0m1n2-o3p4-q5r6-s7t8-u9v0w1x2y3z4",
    title: "Eighth Item",
  },
  {
    id: "a5b6c7d8-e9f0-g1h2-i3j4-k5l6m7n8o9p0",
    title: "Ninth Item",
  },
  {
    id: "q1w2e3r4-t5y6-u7i8-o9p0-a1s2d3f4g5h6",
    title: "Tenth Item",
  },
];

type ItemProps = { title: string };

function Item({ title }: ItemProps) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function App() {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [timesPressed, setTimesPressed] = useState(0);

  useEffect(() => {
    navigation.setOptions({ headerTitle: "Home" });
  }, [navigation]);

  let textLog = "";
  if (timesPressed > 1) {
    textLog = timesPressed + "x onPress";
  } else if (timesPressed > 0) {
    textLog = "onPress";
  }

  const handleRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1_000);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Pressable
            onPress={() => {
              setTimesPressed((current) => current + 1);
            }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
              },
              styles.wrapperCustom,
            ]}
          >
            {({ pressed }) => <Text>{pressed ? "Pressed!" : "Press Me"}</Text>}
          </Pressable>
          <View style={styles.logBox}>
            <Text testID="pressable_press_console">{textLog}</Text>
          </View>
        </View>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#f0f0f0",
    backgroundColor: "#f9f9f9",
  },
});
