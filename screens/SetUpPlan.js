import {View, Text, Button, ScrollView} from 'react-native';
import fetchMenu from '../services/web-scraper';
import fetchImagesForMenu from '../services/image-generator';

import DishCard from '../components/DishCard';
import { useState, useEffect } from "react";

function SetUpPlanScreen({ route, navigation }){

  const [plan, setPlan] = useState({});
  const [menu, setMenu] = useState({});

  const getCurrentDate = () => {

    const date_obj = new Date();

    var date = date_obj.getDate();
    var month = date_obj.getMonth() + 1;
    var year = date_obj.getFullYear();

    return month + '-' + date + '-' + year; //format: d-m-y;
  }

  const addDishToPlan = (dish, category) => {

    let copyPlan = {};
    let added = false;

    for(const key of Object.keys(plan)){
      copyPlan[key] = [...plan[key]];
      if(key == category){
        copyPlan[key].push(dish);
        added = true;
      }
    }

    if(!added){
      copyPlan[category] = [dish];
    }

    setPlan(copyPlan);
  }

  const removeDishFromPlan = (dishObj, category) => {

    let copyPlan = {};

    for(const key of Object.keys(plan)){
      for(const dish of plan[key]){
        if(key != category || dishObj.name != dish.name){
          if(copyPlan[key] == undefined){
            copyPlan[key] = [dish];
          }else{
            copyPlan[key].push(dish);
          }
        }
      }
    }

    setPlan(copyPlan);
  }

  const formatMenu = (menu) => {

    let allDishes = {}; // dict organized by category

    for(let i = 0; i < menu.length; i++){
      if(menu[i].name != undefined && allDishes[menu[i].name] == undefined){
        allDishes[menu[i].name] = [];
      }

      for(let j = 0; j < menu[i].items.length; j++){
        if(menu[i].name != undefined){
          allDishes[menu[i].name].push(menu[i].items[j]);   
        }
      }
    }

    return allDishes;
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', overflowY: "auto" }}>
      <Text>Set up Plan</Text>
      <Text>These are the dishes available for today based on your dietary preferences</Text>
      <Text>{getCurrentDate()}</Text>
      <Button
        title="Fetch menu"
        onPress={async () => {
          let local_menu = await fetchMenu("2023-11-8", "b");
          let formated_menu = formatMenu(local_menu);
          setMenu(formated_menu);
          fetchImagesForMenu(formated_menu);
        }}
      />
      <ScrollView>
        {Object.keys(menu).map((categoryKey, index) => {
          return (
            <View key={"viewSetUpPlan"+index}>
              <Text key={"textSetUpPlan"+index}>{categoryKey}</Text>
              {menu[categoryKey].map((dish, indexDish) => {
                return(
                  <DishCard
                    key={"dishCard"+index+indexDish}
                    title={dish.name}
                    image={null} 
                    description={dish.desc}
                    content={dish}      
                    navigation={navigation}
                    category={categoryKey}
                    addCalback={addDishToPlan}
                    removeCallback={removeDishFromPlan}
                  />
                )
              })}
            </View>
          );
        })}
      </ScrollView>
      <Button
        title="Save"
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
  );
}

export default SetUpPlanScreen;
  