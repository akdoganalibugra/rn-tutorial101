import { StyleSheet, Text, View } from "react-native";
import Title from "./src/components/Title";
import Header from "./src/components/Header";

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Title />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
