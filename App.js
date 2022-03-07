import { useFonts } from 'expo-font';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {

  let [fontsLoaded] = useFonts({
    'Consola-Bold': require('./assets/fonts/Consola-Bold.ttf'),
    'Consola-Regular': require('./assets/fonts/Consola-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  };

  return (
    <HomeScreen />
  );
}

