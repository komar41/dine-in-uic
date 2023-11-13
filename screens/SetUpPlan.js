import {View, Text, Button, ScrollView} from 'react-native';
import fetchMenu from '../services/web-scraper';
import DishCard from '../components/DishCard';
import { useState, useEffect } from "react";

function SetUpPlanScreen({ route, navigation }){

  const [plan, setPlan] = useState([]);
  const [menu, setMenu] = useState([]);

  const getCurrentDate = () => {

    const date_obj = new Date();

    var date = date_obj.getDate();
    var month = date_obj.getMonth() + 1;
    var year = date_obj.getFullYear();

    return month + '-' + date + '-' + year; //format: d-m-y;
  }

  const addDishToPlan = (dishTitle) => {
    let copyPlan = [...plan];
    copyPlan.push(dishTitle);
    setPlan(copyPlan);
  }

  const formatMenu = (menu) => {

    let allDishes = [];

    for(let i = 0; i < menu.length; i++){
      for(let j = 0; j < menu[i].items.length; j++){
        allDishes.push(menu[i].items[j]);   
      }
    }

    return allDishes;
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', overflowY: "auto" }}>
      <View style={{alignItems: 'center', backgroundColor: '#74c476', paddingVertical: 10, marginBottom: 10, width: 450}}>
        <Text style={{color: "white", fontSize: 20, marginBottom: 10, fontWeight: "bold"}}>Set Up New Plan</Text>
        <Text style={{color: "white", marginBottom: 10}}>These are the dishes available for today based on your dietary preferences</Text>
        <Text style={{color: "white"}}>{getCurrentDate()}</Text>
      </View>
      <View style= {{backgroundColor: '#74c476', borderRadius: 8, paddingVertical: 10, marginBottom: 10, width: 150}}>
        <Button
          title="Fetch Menu"
          color="white"
          onPress={async () => {
            let local_menu = await fetchMenu("2023-11-8", "b");
            setMenu(formatMenu(local_menu));
          }}
        />
      </View>
      <ScrollView>
        {menu.map((dish, index) => {
          return (
            <DishCard
              key={"dishCard"+index}
              title={dish.name}
              image={null} 
              description={dish.desc}
              content={dish}      
              navigation={navigation}
              addCalback={addDishToPlan}
            />
          );
        })}
      </ScrollView>
      <View style= {{backgroundColor: '#74c476', borderRadius: 8, paddingVertical: 10, marginBottom: 10, width: 150}}>
        <Button
          title="Save"
          color="white"
          onPress={() => {
            // Pass and merge params back to home screen
            navigation.navigate({
              name: 'Home',
              params: { plan: plan },
              merge: true,
            });
          }}
        />
      </View>
    </View>
  );
}

export default SetUpPlanScreen;
  