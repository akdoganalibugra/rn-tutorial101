import { StyleSheet, Text, View } from "react-native";
import PropsTypes from "prop-types";

const Title = ({ isVisible, text, color, numberOfLines }) => {
  return (
    <View>
      {isVisible && (
        <Text style={[styles.title, { color: color }]}>
          {numberOfLines} - {text}
        </Text>
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
  text: PropsTypes.string,
  isVisible: PropsTypes.bool,
};

export default Title;
