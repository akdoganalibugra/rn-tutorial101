import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text>React Native</Text>
      </View>
      <View style={styles.box2}>
        <View style={[styles.child, styles.child1]}></View>
        <View style={[styles.child, styles.child2]}></View>
        <View style={[styles.child, styles.child3]}></View>
        <View style={[styles.child, styles.child4]}></View>
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  // child4: {
  //   flex: 1,
  //   backgroundColor: "lightcoral",
  // },
  // child5: {
  //   flex: 1,
  //   backgroundColor: "lightseagreen",
  // },
  box2: {
    flex: 1,
    backgroundColor: "bisque",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  child: {
    width: 50,
    height: 50,
  },
  child1: {
    backgroundColor: "coral",
  },
  child2: {
    backgroundColor: "lightgreen",
  },
  child3: {
    backgroundColor: "lightblue",
  },
  child4: {
    backgroundColor: "lightcoral",
  },
});
