import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const UsersScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>UsersScreen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
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

export default UsersScreen;
