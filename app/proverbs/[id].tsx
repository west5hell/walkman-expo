import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const proverbs = [
  {
    id: "1",
    proverb: "A journey of a thousand miles begins with a single step",
    source: "Chinese Proverb - Lao Tzu",
  },
  {
    id: "2",
    proverb: "Fall seven times, stand up eight",
    source: "Japanese Proverb",
  },
  {
    id: "3",
    proverb:
      "The best time to plant a tree was 20 years ago. The second best time is now",
    source: "Chinese Proverb",
  },
  {
    id: "4",
    proverb: "When the going gets tough, the tough get going",
    source: "American Proverb",
  },
  {
    id: "5",
    proverb: "Where there is a will, there is a way",
    source: "English Proverb",
  },
  {
    id: "6",
    proverb: "After darkness comes the dawn",
    source: "Latin Proverb",
  },
  {
    id: "7",
    proverb: "The obstacle is the path",
    source: "Zen Proverb",
  },
  {
    id: "8",
    proverb: "Every cloud has a silver lining",
    source: "English Proverb",
  },
  {
    id: "9",
    proverb:
      "A diamond is a piece of coal that handled stress exceptionally well",
    source: "Unknown",
  },
  {
    id: "10",
    proverb: "The harder you work, the luckier you get",
    source: "South African Proverb",
  },
];

export default function ProverbScreen() {
  const params = useLocalSearchParams<{ id: string }>();

  const proverb = proverbs.find((p) => p.id === params.id);

  if (!proverb) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Not found</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>"{proverb.proverb}"</Text>
      <Text>{proverb.source}</Text>
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
