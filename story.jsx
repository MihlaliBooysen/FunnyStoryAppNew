import {styleSheet, text, View, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import { Link } from 'expo-router';


export default function App() {
  const [showStory, setShowStory] = useState(false);
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [food, setFood] = useState('');
  const [animal, setAnimal] = useState('');
  const [joke, setJoke] = useState('');
}

const story =() => {
    return (
        <view style={styles.container}>
            <text style={styles.title}>story</text>

            <Link href="/story"> story page </Link>
        </view>
    )
}
       return  `A priest, a rabbi, and a minister walk into a ${place}. They see ${name} eating a ${food}. Suddenly, a ${animal} says, "${joke}"`;
       

export default story 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
