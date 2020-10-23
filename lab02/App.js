/*
Created by Duncan Van Keulen and Hyechan Jun
For Lab02 Team E - Wayfinder
11 September 2020
*/

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  FlatList,
} from "react-native";

// Define the app function
const App = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [birthdays, setBirthdays] = useState([]);
  const onPress = () => {
    setCount((prevCount) => prevCount + 1);
    setBirthdays(birthdays.concat({ key: (count + 1).toString() }));
  };
  // Define a method to reset the app
  const clearPress = () => {
    Alert.alert("Killing " + name + ". They lived for " + count + " years.");
    setCount(0);
    setName("");
    setBirthdays([]);
  };

  return (
    <View style={styles.container}>
      <View>
        {/* Create the text input object */}
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          onChangeText={(val) => setName(val)}
          // Allows for the name in the input box to be cleared
          value={name}
        />

        <Text style={styles.text}>
          {name} is {count} years old.
        </Text>
      </View>

      {/* Create the buttons */}
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Birthday</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={clearPress}>
        <Text>Deathday</Text>
      </TouchableOpacity>

      {/* Create the FlatList to put out the age history list thingy */}
      <FlatList
        data={birthdays}
        renderItem={({ item }) => <Text style={styles.text}>{item.key}</Text>}
      />
    </View>
  );
};

// Define the styles used in the application
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: "black",
  },
  text: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
  },
  button: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginTop: 10,
    width: "95%",
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: "#FFF",
    color: "#FFF",
    padding: 8,
    marginTop: "20%",
    marginBottom: "10%",
    width: "75%",
    alignSelf: "center",
  },
});

export default App;
