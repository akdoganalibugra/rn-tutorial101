import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Hello React Native</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "lightblue",
    padding: 15,
  },
  text: {
    fontSize: 40,
    textAlign: "center",
  },
});

export default Header;
