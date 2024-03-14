import { StyleSheet, Text, View } from "react-native";

const Title = () => {
  return (
    <View>
      <Text style={styles.title}>Hello React Native</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
});

export default Title;
