import { View, Text, Button, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useState, useEffect } from "react";
import DishCard from '../components/DishCard';

function MyPlanScreen({ route, navigation }) {

  const [myplan, setPlan] = useState({});

  useEffect(() => {
    if (route.params?.plan) {
      setPlan(route.params?.plan);
    }
  }, [route.params?.plan]);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={{flexDirection: "row", alignItems: 'center', marginTop: 20, marginBottom: 20}} onPress={async () => {
            navigation.navigate({
              name: 'Map',
              params: { plan: myplan },
              merge: true,
            });
          }}>
          <Image 
            source={require('../assets/footprint.png')}
            style={{height: 30, width: 30, marginRight: 10}}
          />
          <Text style={{textAlign:'left', color:'#00483C', fontSize: 16, }}>Check Navigation Route</Text>
        </TouchableOpacity>
        <ScrollView>
          {Object.keys(myplan).map((categoryKey, index) => {
            return (
              <View key={"viewSetUpPlan"+index}>
                <Text key={"textSetUpPlan"+index} style={{fontSize: 25, color: '#00483C', fontWeight: 'bold', marginBottom: 15}}>{categoryKey}</Text>
                {myplan[categoryKey].map((dish, indexDish) => {
                  return(
                    <DishCard
                      key={"dishCard"+index+indexDish}
                      title={dish.name}
                      image={null} 
                      description={dish.desc}
                      content={dish}      
                      navigation={navigation}
                      category={categoryKey}
                    />
                  )
                })}
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }

export default MyPlanScreen;