import {
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import data from "../data/books.json";
import DetailsScreen from "./details";

const Stack = createStackNavigator();

export default function HomeStackNavigator() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={HomeView} />
      <Stack.Screen name="Detalles" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function HomeView({ navigation }) {
  const bookDetails = (book) => {
    navigation.navigate("Detalles", { book });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titleStyle}>Novedades</Text>
      <FlatList
        contentContainerStyle={styles.list}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={() => bookDetails(item)}>
            <Image style={styles.books} source={{ uri: item.imgUrl }} />
          </Pressable>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.titleStyle}>Recomendados para ti</Text>
      <FlatList
        contentContainerStyle={styles.list}
        data={data}
        renderItem={({ item }) => (
          <Pressable onPress={() => bookDetails(item)}>
            <Image style={styles.books} source={{ uri: item.imgUrl }} />
          </Pressable>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.titleStyle}>Sección 1</Text>
      <FlatList
        contentContainerStyle={styles.list}
        data={data}
        renderItem={({ item }) => (
          <Pressable onPress={() => bookDetails(item)}>
            <Image style={styles.books} source={{ uri: item.imgUrl }} />
          </Pressable>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.titleStyle}>Sección 2</Text>
      <FlatList
        contentContainerStyle={styles.list}
        data={data}
        renderItem={({ item }) => (
          <Pressable onPress={() => bookDetails(item)}>
            <Image style={styles.books} source={{ uri: item.imgUrl }} />
          </Pressable>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.titleStyle}>Sección 3</Text>
      <FlatList
        contentContainerStyle={styles.list}
        data={data}
        renderItem={({ item }) => (
          <Pressable onPress={() => bookDetails(item)}>
            <Image style={styles.books} source={{ uri: item.imgUrl }} />
          </Pressable>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingRight: 30,
    paddingBottom: 15,
    paddingLeft: 30,
  },

  titleStyle: {
    marginBottom: 15,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Helvetica",
  },

  list: {
    marginBottom: 30,
    gap: 20,
  },

  books: {
    flex: 1,
    width: 100,
    height: 150,
    resizeMode: "contain",
  },
});
