import React, { useContext } from "react";
import { StyleSheet, ScrollView, Pressable, Text } from "react-native";
import { AuthContext } from "../auth/AuthContext";

// Navegación
import { createStackNavigator } from "@react-navigation/stack";

export default function SettingsStackNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Configuracion" component={SettingsView} />
    </Stack.Navigator>
  );
}

function SettingsView({ navigation }) {
  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable style={styles.logout} onPress={handleLogout}>
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingRight: 30,
    paddingBottom: 15,
    paddingLeft: 30,
    alignItems: "center",
  },

  logout: {
    backgroundColor: "#6200EE",
    paddingTop: 10,
    paddingRight: 30,
    paddingBottom: 10,
    paddingLeft: 30,
    borderRadius: 10,
  },

  logoutText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
