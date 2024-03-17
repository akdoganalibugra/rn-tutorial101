import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  FlatList,
  View,
} from "react-native";
import Counter from "./src/components/Counter";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Counter />
    </SafeAreaView>
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
