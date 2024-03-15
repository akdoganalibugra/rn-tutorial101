import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ListFooter = () => {
  return (
    <View style={styles.footer}>
      <Text>Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    fontSize: 32,
    alignItems: "center",
  },
});

export default ListFooter;
