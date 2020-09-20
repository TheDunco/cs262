import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([]);

  return (
    <TouchableWithoutFeedback>
      <View>
        <Header />
        <View>
          <AddTodo />
          <View>
            <FlatList />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
