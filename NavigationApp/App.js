// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "./src/screens/Home";
import UsersScreen from "./src/screens/Users";
import UserDetail from "./src/screens/UserDetail";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Users">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Overview",
          }}
        />
        <Stack.Screen
          name="Users"
          component={UsersScreen}
          options={{
            title: "Users",
          }}
        />
        <Stack.Screen
          name="UserDetail"
          component={UserDetail}
          options={{
            title: "User Detail",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
