import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>your app!</Text>
      <View style={[styles.box, styles.box1]}>
        <Text style={[styles.text, styles.text3]}>Box</Text>
      </View>

      <View style={[styles.box, styles.box2]}>
        <Text style={[styles.text, styles.text1]}>React</Text>
      </View>

      <View style={styles.box}>
        <Text style={[styles.text, styles.text2]}>Native</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: "gray",
    marginBottom: 10,
  },
  box1: {
    backgroundColor: "dodgerblue",
  },
  box2: {
    backgroundColor: "bisque",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    backgroundColor: "brown",
    textAlign: "center",
  },
  text1: {
    backgroundColor: "black",
  },
  text2: {
    backgroundColor: "aquamarine",
    color: "black",
  },
  text3: {
    backgroundColor: "yellow",
    color: "#000",
  },
});
