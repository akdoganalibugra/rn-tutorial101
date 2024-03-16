import React, { useState } from "react";

import { StyleSheet, Text, SafeAreaView, Button } from "react-native";

const App = () => {
  const [name, setName] = useState("Ahmet");
  const [age, setAge] = useState(25);
  const [isVisible, setIsVisible] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title={isVisible ? "Gizle" : "Göster"}
        onPress={() => setIsVisible(!isVisible)}
      />
      {isVisible && (
        <>
          <Text>İsim: {name}</Text>
          <Text>Yaş: {age}</Text>
          <Button title="İsmi Değiştir" onPress={() => setName("Ali")} />
          <Button title="Yaşı Değiştir" onPress={() => setAge("23")} />
        </>
      )}
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
