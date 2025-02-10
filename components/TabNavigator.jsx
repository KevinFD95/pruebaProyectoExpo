import { Platform } from "react-native";

// Navegador
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

// Pantallas
import HomeScreen from "../views/home.jsx";
import SettingsScreen from "../views/settings.jsx";
import SearchScreen from "../views/search.jsx";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <NavigationContainer>
      {Platform.OS !== "web" ? (
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "gray",
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="home" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="search" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="settings" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <HomeScreen />
      )}
    </NavigationContainer>
  );
}
