import { useLayoutEffect } from "react";
import { Text, StyleSheet, ScrollView, Image, View } from "react-native";

export default function DetailsView({ route, navigation }) {
  const { book } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Text style={styles.headerTitle}>{book.title}</Text>,
    });
  }, [navigation, book.title]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: book.imgUrl }} style={styles.image} />
      <View style={styles.description}>
        <Text>
          {book.id}. {book.title}
        </Text>
        <Text>Categoría: {book.category}</Text>
      </View>
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
    gap: 20,
  },

  headerTitle: {
    fontWeight: "bold",
    textAlign: "center",
    flexWrap: "wrap",
    maxWidth: 250,
  },

  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
  },

  description: {
    gap: 10,
  },
});
