import React from 'react';
import {
  Text,
  View,
  Button,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { images } from '../services/all_images'
import { useState, useEffect } from "react";

function DishCard({title, image, description, content, navigation, category, addCalback = null, removeCallback = null}){

  const [added, setAdded] = useState(false);

  let labels = {
    "Vegan": require("../assets/icon_vegan.png"),
    "Vegetarian": require("../assets/icon_vegetarian.png"),
    "Gluten-Free": require("../assets/gluten-free.jpg"),
    "Diary-Free": require("../assets/dairy-free.png"),
    "Nut-Free": require("../assets/nut_free.jpg")
  }

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

  const generateLabels = () => {

    let labels = [];

    if(checkFilters(content.filters, "Vegan")){
      labels.push("Vegan");
    }
    
    if(checkFilters(content.filters, "Vegetarian")){
      labels.push("Vegetarian");
    }
    
    if(checkFilters(content.filters, "Gluten-Free")){
      labels.push("Gluten-Free");
    }
    
    if(checkFilters(content.filters, "Diary-Free")){
      labels.push("Diary-Free");
    }
    
    if(checkFilters(content.filters, "Nut-Free")){
      labels.push("Nut-Free");
    }

    return labels;
  }

  return (

    <View style={{backgroundColor: '#fafafa', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 10, marginBottom: 10, flexDirection: "row"}}>
        <View style={{flexDirection: "column"}}>
          <Image
            source={images[content.id] != undefined ? images[content.id] : require('../assets/splash.png')}
            style={{height: 100, width: 100}}
          />
          <ScrollView style={{maxWidth: 90}} horizontal={true}>
            {generateLabels().map((label, index) => (
              <Image 
                key={"label"+index}
                source={labels[label]}
                style={{height: 30, width: 30, marginRight: 5}}
              />
            ))}
          </ScrollView>
        </View>
        <View style={{flexDirection: "column", width: 180, marginTop: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>{title}</Text>
          {description != "" && description != undefined ? <Text style= {{fontSize: 17, opacity: 0.5, marginBottom: 10}}>{description}</Text> : null}
          <TouchableOpacity onPress={() => {
                navigation.navigate("Dish Details", {
                    title: title,
                    description: description,
                    content: content
                })
              }}>
            <Text style={{textAlign:'left', color:'#31b767', fontSize: 16}}>Details</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'left'}}>

          {
            addCalback != undefined && removeCallback != undefined ? 
              !added ? <Button 
                title="+"
                color='#31b767'
                onPress={() => {
                  setAdded(true);
                  addCalback(content, category);
                }} /> : <Button 
                title="-"
                color='#31b767'
                onPress={() => {
                  setAdded(false);
                  removeCallback(content, category)
                }} />
            : null
          }
        </View>
    </View>
  );
}

export default DishCard;
  