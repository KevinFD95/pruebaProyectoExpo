import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function SettingsView() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Settings</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingRight: 30,
    paddingBottom: 15,
    paddingLeft: 30,
    alignItems: "center",
  },
});
