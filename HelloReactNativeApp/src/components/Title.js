import { StyleSheet, Text, View } from "react-native";
import PropsTypes from "prop-types";

const Title = ({ isVisible, text, color, numberOfLines }) => {
  return (
    <View>
      {isVisible && (
        <Text style={[styles.title, { color: color }]}>{text}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
});

Title.PropsTypes = {
  color: PropsTypes.string,
  numberOfLines: PropsTypes.number,
  text: PropsTypes.string.isRequired,
  isVisible: PropsTypes.bool,
};

Title.defaultProps = {
  text: "Hello World",
  color: "black",
  isVisible: true,
  numberOfLines: 1,
};

export default Title;
