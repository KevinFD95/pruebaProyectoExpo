import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Auth
import { AuthProvider } from "../auth/AuthContext.jsx";

// Navegador
import LoginScreen from "../views/login.jsx";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {

  return (
    <AuthProvider>
      <SafeAreaProvider style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <LoginScreen />
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
