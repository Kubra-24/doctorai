import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'; 
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ChatScreen({ navigation }) {  
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim() === '') return;
    setMessages([...messages, { id: Date.now().toString(), text: inputText }]);
    setInputText('');
  };

  return (
    <View style={styles.container}>
      
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#4b4b4b" />
      </TouchableOpacity>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.message}>{item.text}</Text>}
      />

      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={setInputText}
        placeholder="Mesaj yaz..."
        placeholderTextColor="#bbb"
      />

      <View style={styles.buttonWrapper}>
        <Button
          title="Gönder"
          onPress={sendMessage}
          color="#fff"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#000', 
  },
  input: {
    borderWidth: 1,
    borderColor: '#555', 
    backgroundColor: '#333', 
    padding: 8,
    marginVertical: 10,
    color: '#fff', 
    borderRadius: 8,
  },
  message: {
    padding: 5,
    backgroundColor: '#eee',
    marginVertical: 2,
    borderRadius: 4,
  },
  backButton: {
    backgroundColor: '#1a1a1a',
    padding: 8,
    borderRadius: 8,
    position: 'absolute',
    top: 28,
    left: 5,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    backgroundColor: '#555',
    borderRadius: 8,
    overflow: 'hidden',
  },
});
