import { View, Text, Image } from "react-native";
import React from "react";

const HeaderLogo = () => {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    />
  );
};

export default HeaderLogo;
