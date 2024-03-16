import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  FlatList,
  View,
} from "react-native";

const App = () => {
  const [users, setUsers] = useState([
    {
      name: "John",
      id: 25,
    },
    {
      name: "Jane",
      id: 24,
    },
  ]);

  const handlePress = () => {
    setUsers((prev) => [
      ...prev,
      {
        name: Math.floor(Math.random() * 1000),
        id: Math.floor(Math.random() * 1000),
      },
    ]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      />

      <Button title="Add User" onPress={handlePress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "lightblue",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 20,
  },
});

export default App;
