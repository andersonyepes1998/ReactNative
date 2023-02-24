import { Text, View } from 'react-native';
import {styles} from './assets/styles/myStyles';


export default function App() {
  return (
    <View style={[styles.container, {borderRadius: 10}]}>
      <Text style={styles.texto}>Hola mundo!!!</Text>
    </View>
  );
}


