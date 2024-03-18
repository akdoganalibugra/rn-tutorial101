import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update" />
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Text>{count}</Text>
      <Button
        title="Go to Users"
        onPress={() => navigation.navigate("Users")}
      />
    </View>
  );
};

export default HomeScreen;
