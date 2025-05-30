import { MeshGradientView } from "expo-mesh-gradient";

export default function About() {
  //   return <Text>I'm about.</Text>;
  return (
    <MeshGradientView
      style={{ flex: 1 }}
      columns={3}
      rows={3}
      colors={[
        "red",
        "purple",
        "indigo",
        "orange",
        "white",
        "blue",
        "yellow",
        "green",
        "cyan",
      ]}
      points={[
        [0.0, 0.0],
        [0.5, 0.0],
        [1.0, 0.0],
        [0.0, 0.5],
        [0.5, 0.5],
        [1.0, 0.5],
        [0.0, 1.0],
        [0.5, 1.0],
        [1.0, 1.0],
      ]}
    />
  );
}
