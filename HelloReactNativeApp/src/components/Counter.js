import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setCount(count + amount);
  };

  useEffect(() => {
    console.log("useEffect");
  }, []);

  useEffect(() => {
    console.log("useEffect count");
  }, [count]);

  useEffect(() => {
    console.log("useEffect count & amount");
  }, [count, amount]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Button title="Increase" onPress={increase} />
      <Text style={styles.text}>Amount: {amount}</Text>
      <Button title="1" onPress={() => setAmount(1)} />
      <Button title="5" onPress={() => setAmount(5)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});

export default Counter;
