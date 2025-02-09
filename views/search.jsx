import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import books from "../data/books.json";
import { createStackNavigator } from "@react-navigation/stack";
import DetailsScreen from "./details";

const Stack = createStackNavigator();

export default function SearchStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Buscar" component={SearchScreen} />
      <Stack.Screen name="Detalles" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function SearchScreen({ navigation }) {
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = (text) => {
    setSearchText(text);

    if (text === "") {
      setFilteredBooks(books);
    } else {
      const lowerText = text.toLowerCase();
      const filtered = books.filter(
        (book) =>
          book.title.toLowerCase().includes(lowerText) ||
          book.category.toLowerCase().includes(lowerText)
      );
      setFilteredBooks(filtered);
    }
  };

  const bookDetails = (book) => {
    navigation.navigate("Detalles", { book });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar"
        value={searchText}
        onChangeText={handleSearch}
      />

      {filteredBooks.map((item) => (
        <Pressable
          key={item.id ? item.id : item.title}
          style={styles.bookContainer}
          onPress={() => bookDetails(item)}
        >
          <Image style={styles.bookImg} source={{ uri: item.imgUrl }} />
          <View style={styles.bookDescription}>
            <Text style={styles.bookTitle}>Título: {item.title}</Text>
            <Text style={styles.bookCategory}>Categoría: {item.category}</Text>
          </View>
        </Pressable>
      ))}
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
    gap: 20,
  },

  searchBar: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },

  bookContainer: {
    width: "100%",
    height: 100,
    gap: 10,
    flexDirection: "row",
  },

  bookImg: {
    width: "20%",
    height: 100,
    resizeMode: "contain",
  },

  bookDescription: {
    width: "80%",
    paddingVertical: 10,
    flexShrink: 1,
    flexWrap: "wrap",
    gap: 10,
  },

  bookTitle: {
    width: "100%",
  },

  bookCategory: {},
});
