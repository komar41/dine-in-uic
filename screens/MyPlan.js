import { View, Text, Button, ScrollView} from 'react-native';
import { useState, useEffect } from "react";
import DishCard from '../components/DishCard';

function MyPlanScreen({ route, navigation }) {

  const [myplan, setPlan] = useState({});

  useEffect(() => {
    if (route.params?.plan) {
      console.log(route.params?.plan["Grill"][0].filters);
      setPlan(route.params?.plan);
    }
  }, [route.params?.plan]);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>My plan</Text>
        <Button
          title="Check Navigation Route"
          onPress={async () => {
            navigation.navigate({
              name: 'Map',
              params: { plan: myplan },
              merge: true,
            });
          }}
        />
        <ScrollView>
          {Object.keys(myplan).map((categoryKey, index) => {
            return (
              <View key={"viewSetUpPlan"+index}>
                <Text key={"textSetUpPlan"+index}>{categoryKey}</Text>
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