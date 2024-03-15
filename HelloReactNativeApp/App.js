import { Image, StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={{
          width: "100%",
          height: 180,
          borderWidth: 2,
          borderColor: "black",
        }}
        source={{
          uri: "https://static.independent.co.uk/2022/11/23/11/newFile-4.jpg",
        }}
      />
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
