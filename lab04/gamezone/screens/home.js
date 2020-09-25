import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "RTX 3080 Launch",
      rating: 1,
      body: "Absolutely no stock",
      key: "1",
    },
    {
      title: "RTX 3090 Launch",
      rating: 1,
      body: "Absolutely no stock",
      key: "2",
    },
    {
      title: "Duncan is Dunkin",
      rating: 5,
      body: "Little known fact, he owns Dunkin Donuts",
      key: "3",
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 18,
  },
});
