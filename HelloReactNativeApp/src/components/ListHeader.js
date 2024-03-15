import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ListHeader = () => {
  return (
    <View style={styles.header}>
      <Text>Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    fontSize: 32,
    alignItems: "center",
  },
});

export default ListHeader;
