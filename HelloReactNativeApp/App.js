import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";

const App = () => {
  const handleClick = () => {
    alert("Hi");
  };

  return (
    <View style={styles.container}>
      <Button title="Click Me!" onPress={handleClick} />
      <TouchableOpacity onPress={handleClick}>
        <Text>Click TouchableOpacity!</Text>
      </TouchableOpacity>

      <TouchableHighlight
        onPress={() => alert("Pressed!")}
        activeOpacity={1}
        underlayColor={"#DDDDDD"}
      >
        <Text>Click TouchableHighlight!</Text>
      </TouchableHighlight>

      <TouchableWithoutFeedback onPress={handleClick}>
        <Text>Click TouchableWithoutFeedback!</Text>
      </TouchableWithoutFeedback>
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

export default App;
