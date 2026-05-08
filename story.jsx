import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { Link } from 'expo.js';

export default function App() {
  const [showStory, setShowStory] = useState(false);
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [food, setFood] = useState('');
  const [animal, setAnimal] = useState('');
  const [joke, setJoke] = useState('');

  const getStory = () => {
    return `ST10476285 A priest, a rabbi, and a minister walk into a ${place}. They see ${name} eating a ${food}. Suddenly, a ${animal} says, "${joke}"`;
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Once upon a time, There was a funny story. ST10476285
      </Text>
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
        onPress={() => setShowStory(!showStory)}
      >
        <Text style={{ color: '#fff' }}>{showStory ? 'Hide Story' : 'Read Story'}</Text>
      </TouchableOpacity>
      {showStory && (
        <Text style={{ marginTop: 20, fontSize: 16 }}>{getStory()}</Text>
      )}
      <Link href="/story">
        <Text>Go to Story Page</Text>
      </Link>
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