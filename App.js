import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation/Navigation';

export default function App() {

  let [fontsLoaded] = useFonts({
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  };

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

