import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const [showStory, setShowStory] = useState(false);
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [food, setFood] = useState('');
  const [animal, setAnimal] = useState('');
  const [joke, setJoke] = useState('');

  const story = () => {
    return `A priest, a rabbi, and a minister walk into a ${place}. They see ${name} eating a ${food}. Suddenly, a ${animal} says, "${joke}"`;
  const App = () => {
  const navigation = useNavigation();
  }    
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Once upon a time, There was a funny story. ST10476285
      </Text>
      <Image
        source={require('./assets/A_priest,_a_rabbi,_a_minister_and_a_duck_walk_into_a_bar.jpg')}
        style={{ width: 200, height: 200, marginBottom: 20 }}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
        placeholder="Enter a name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
        placeholder="Enter a place"
        value={place}
        onChangeText={(text) => setPlace(text)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
        placeholder="Enter a food"
        value={food}
        onChangeText={(text) => setFood(text)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
        placeholder="Enter an animal"
        value={animal}
        onChangeText={(text) => setAnimal(text)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
        placeholder="Enter a joke"
        value={joke}
        onChangeText={(text) => setJoke(text)}
      />
     <TouchableOpacity
      style={{ backgroundColor: '#007bff', padding: 10, borderRadius: 5 }}
      onPress={() => navigation.navigate('Story')}
    >
      <Text style={{ color: '#fff' }}>Read Story</Text>
    </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});