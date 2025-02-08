import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../views/home.jsx";
import DetailScreen from "../views/details.jsx";

const Stack = createStackNavigator();

export default function BookDetailsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inicio"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Detalles"
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
}
