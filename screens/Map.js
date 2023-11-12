import { View, Text, Image, Dimensions} from 'react-native';
import { useState, useEffect } from "react";

function NavigateMapScreen({ route, navigation }) {

  const { width, height } = Dimensions.get('window');

  const [myplan, setPlan] = useState([]);

  useEffect(() => {
    if (route.params?.plan) {
      setPlan(route.params?.plan);
      // generate best route
    }
  }, [route.params?.plan]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Image
      source={require('../assets/global.png')}
      style={{ position: 'absolute', left: 60, top: 0 }}
    />
    <Image
      source={require('../assets/sandwich.png')}
      style={{ position: 'absolute', right: 60, top: 0 }}
    />
    <Image
      source={require('../assets/grill.png')}
      style={{ position: 'absolute', left: 0, top: 100 }}
    />
    <Image
      source={require('../assets/asian.png')}
      style={{ position: 'absolute', left: 0, top: 215 }}
    />
    <Image
      source={require('../assets/latin.png')}
      style={{ position: 'absolute', right: 0, top: 100 }}
    />
    <Image
      source={require('../assets/salad.png')}
      style={{ position: 'absolute', left: 140, top: 130}}
    />
    <Image
      source={require('../assets/breakfast.png')}
      style={{ position: 'absolute', right: 0, top: 350 }}
    />
    <Image
      source={require('../assets/mezze.png')}
      style={{ position: 'absolute', left: 0, top: 350 }}
    />
    <Image
      source={require('../assets/entrance.png')}
      style={{ position: 'absolute', left: 155, top: 350 }}
    />
    </View>
  );
}

export default NavigateMapScreen;