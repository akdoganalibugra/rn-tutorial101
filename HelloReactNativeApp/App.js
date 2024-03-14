import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.child4}></View>
        <View style={styles.child5}></View>
      </View>
      <View style={styles.box2}>
        <View style={styles.child1}></View>
        <View style={styles.child2}></View>
        <View style={styles.child3}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    flexDirection: "column",
  },
  box1: {
    flex: 1,
    backgroundColor: "gray",
    flexDirection: "row",
  },
  child4: {
    flex: 1,
    backgroundColor: "lightcoral",
  },
  child5: {
    flex: 1,
    backgroundColor: "lightseagreen",
  },
  box2: {
    flex: 1,
    backgroundColor: "bisque",
    flexDirection: "row",
  },
  child1: {
    flex: 1,
    backgroundColor: "coral",
  },
  child2: {
    flex: 1,
    backgroundColor: "lightgreen",
  },
  child3: {
    flex: 1,
    backgroundColor: "lightblue",
  },
});
