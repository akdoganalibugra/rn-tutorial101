import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import React from "react";
import Item from "./Item";

const data = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Jane",
  },
  {
    id: 3,
    name: "Bob",
  },
  {
    id: 4,
    name: "Alice",
  },
];

const UsersScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UsersScreen;
