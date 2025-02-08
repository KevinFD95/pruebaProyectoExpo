import { useLayoutEffect } from "react";
import { Text, StyleSheet, ScrollView, Image, Button } from "react-native";

export default function DetailsScreen({ route, navigation }) {
  const { book } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Text style={styles.headerTitle}>{book.title}</Text>,
    });
  }, [navigation, book.title]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: book.imgUrl }} style={styles.image} />
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

  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },

  headerTitle: {
    fontWeight: "bold",
    textAlign: "center",
    flexWrap: "wrap",
    maxWidth: 250,
  },
});
