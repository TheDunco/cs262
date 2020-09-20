import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
  [text, setText] = useState('');

  return (
    <View>
      <TextInput 
        placeholder='new todo...'
        value={text}
      />
      <Button title='add todo' />
    </View>
  );
}
