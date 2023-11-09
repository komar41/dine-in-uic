import { ImageBackground, Button, View, Image} from 'react-native';
import { useState, useEffect } from "react";

const image = {uri: 'https://i.pinimg.com/564x/d8/b3/57/d8b357996895f53612208227d0b4bceb.jpg'};

function HomeScreen({ route, navigation }) {

  const [plans, setPlans] = useState([]);

  useEffect(() => {
    if (route.params?.plan) {
      console.log(route.params?.plan);
      // Plan updated, do something with `route.params.plan`
    }
  }, [route.params?.plan]);

  // if index specified overwrite plan
  const addPlan = (plan, index = null) => {
    let auxPlans = [];
    let planIndex = 0

    for(const elem of plans){
      if(index != null && planIndex == index){
        auxPlans.push(plan);
      }else{
        auxPlans.push(elem);
      }

      planIndex += 1;
    }

    if(index == null){
      auxPlans.push(plan);
    }

    setPlans(auxPlans);
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center'}}>
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
            onPress={() => navigation.navigate('Set Up Meal Plan')}
          />
        </View>

        <View style={{backgroundColor: '#31a354', borderRadius: 8, paddingVertical: 12, marginBottom: 10, width: 220}}>
          <Button
            title="Map"
            color="white"
            onPress={() => navigation.navigate('Map')}
          />
        </View>

        <View style={{backgroundColor: '#006d2c', borderRadius: 8, paddingVertical: 12, width: 220}}>
          <Button
            title="My Plans"
            color="white"
            onPress={() => navigation.navigate('My Plans')}
          />
        </View>

      {/* </ImageBackground> */}
    </View>
    
  );
  }

  export default HomeScreen;