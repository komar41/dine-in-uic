import {View, Text, Button, ScrollView} from 'react-native';
import fetchMenu from '../services/web-scraper';

import DishCard from '../components/DishCard';
import { useState, useEffect } from "react";

function SetUpPlanScreen({ route, navigation }){

  const [plan, setPlan] = useState({});
  const [menu, setMenu] = useState({});
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    if (route.params?.answers) {
      setAnswers(route.params?.answers);
    }
  }, [route.params?.answers]);

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

    // return true if it is safe
    const checkFilters = (filters, restriction) => {

      if(filters == undefined){
        return false;
      }

      for(const filter of filters){
        if(restriction == "Vegan" && filter.name == "Vegan"){
          return true;
        }else if(restriction == "Vegetarian" && filter.name == "Vegetarian"){
          return true;
        }else if(restriction == "Gluten-Free" && filter.name == "Gluten"){
          return false;
        }else if(restriction == "Diary-Free" && filter.name == "Milk"){
          return false;
        }else if(restriction == "Nut-Free" && filter.name == "Tree Nuts"){
          return false;
        }
      }

      if(restriction == "Vegan"){  // it does not have the Vegan label
        return false;
      }else if(restriction == "Vegetarian"){ // it does not have the Vegetarian label
        return false;
      }else if(restriction == "Gluten-Free"){ // it does not contain Glutten allergen
        return true;
      }else if(restriction == "Diary-Free"){
        return true;
      }else if(restriction == "Nut-Free"){
        return true;
      }

      return true;

    }


    let allDishes = {}; // dict organized by category

    for(let i = 0; i < menu.length; i++){
      if(menu[i].name != undefined && allDishes[menu[i].name] == undefined){
        allDishes[menu[i].name] = [];
      }

      for(let j = 0; j < menu[i].items.length; j++){
        if(menu[i].name != undefined && checkFilters(menu[i].items[j].filters, answers[0])){
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
  