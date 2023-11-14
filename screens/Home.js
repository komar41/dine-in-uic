import { ImageBackground, Button, View, Image} from 'react-native';
import { useState, useEffect } from "react";

const image = {uri: 'https://i.pinimg.com/564x/d8/b3/57/d8b357996895f53612208227d0b4bceb.jpg'};

function HomeScreen({ route, navigation }) {

  const [myplan, setPlan] = useState({});
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    if (route.params?.plan) {
      setPlan(route.params?.plan);
    }
  }, [route.params?.plan]);

  useEffect(() => {
    if (route.params?.answers) {
      setAnswers(route.params?.answers);
    }
  }, [route.params?.answers]);

  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center', marginTop: 90}}>
      {/* <ImageBackground source={image} resizeMode="cover" style={{flex: 1, justifyContent: 'center',  alignItems: 'center'}}> */}
        
      <Image
        source={require('../assets/welcome.png')}
        style={{ position: 'absolute', left: 120, top: 80}}
      />
        
        <View style={{backgroundColor: '#a1d99b', borderRadius: 8, paddingVertical: 12, marginTop: 100, marginBottom: 10, width: 220}}>
          <Button
            title="Set Dietary Restrictions"
            color="white"
            onPress={() => navigation.navigate('Set Dietary Restrictions')}
          />
        </View>

        <View style={{backgroundColor: '#74c476', borderRadius: 8, paddingVertical: 12, marginBottom: 10, width: 220}}>
          <Button
            title="Set Up New Plan"
            color="white"
            onPress={() => navigation.navigate({name: 'Set Up Meal Plan', params: {answers: answers}, merge: true})}
          />
        </View>

        <View style={{backgroundColor: '#31a354', borderRadius: 8, paddingVertical: 12, marginBottom: 10, width: 220}}>
          <Button
            title="Map"
            color="white"
            onPress={() => navigation.navigate({name: 'Map', params: {plan: myplan}, merge: true})}
          />
        </View>

        <View style={{backgroundColor: '#006d2c', borderRadius: 8, paddingVertical: 12, width: 220}}>
          <Button
            title="My Plan"
            color="white"
            onPress={() => navigation.navigate({name: 'My Plan', params: {plan: myplan}, merge: true})}
          />
        </View>

      {/* </ImageBackground> */}
    </View>
    
  );
  }

  export default HomeScreen;