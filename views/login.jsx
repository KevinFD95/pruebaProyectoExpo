import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";
import { ActivityIndicator } from "react-native";

// Navegación
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { TabNavigator } from "../components/TabNavigator.jsx";

// Auth
import users from "../data/users.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

const checkUserInStorage = async () => {
  const storedUser = await AsyncStorage.getItem("loggedInUser");
  return storedUser ? JSON.parse(storedUser) : null;
};

export default function LoginStackNavigator() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      storedUser = await checkUserInStorage();
      if (storedUser) {
        setUser(storedUser);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#6200EE" />
      </View>
    );
  } else {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="HomeView" component={TabNavigator} />
      </Stack.Navigator>
    );
  }
}

function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    async function checkLogin() {
      storedUser = await checkUserInStorage();
      if (storedUser) {
        navigation.replace("HomeView");
      }
    }
    checkLogin();
  }, [navigation]);

  const handleLogin = async () => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      await AsyncStorage.setItem("loggedInUser", JSON.stringify(user));
      Alert.alert("Éxito", "Has iniciado sesión correctamente");
      navigation.replace("HomeView");
    } else {
      Alert.alert("Error", "El correo y la contraseña no coinciden");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Registro")}>
        <Text style={styles.registerText}>
          ¿No tienes cuenta? Regístrate aquí
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  input: {
    width: "100%",
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },

  button: {
    backgroundColor: "#6200EE",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  registerText: {
    marginTop: 15,
    color: "#6200EE",
  },
});
