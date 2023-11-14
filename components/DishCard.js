import React from 'react';
import {
  Text,
  View,
  Button,
  Image
} from 'react-native';
import { images } from '../services/all_images'

function DishCard({title, image, description, content, navigation, category, addCalback = null, removeCallback = null}){

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
    }else if(checkFilters(content.filters, "Vegetarian")){
      labels.push("Vegetarian");
    }else if(checkFilters(content.filters, "Gluten-Free")){
      labels.push("Gluten-Free");
    }else if(checkFilters(content.filters, "Diary-Free")){
      labels.push("Diary-Free");
    }else if(checkFilters(content.filters, "Nut-Free")){
      labels.push("Nut-Free");
    }

    return labels;
  }

  return (
    <View>
        <Image
          source={images[content.id] != undefined ? images[content.id] : require('../assets/splash.png')}
          onError={() => setImageError(true)}
          style={{height: 100, width: 100}}
        />
        <View style={{flexDirection: 'row'}}>
          {generateLabels().map((label, index) => (
            <Image 
              key={"label"+index}
              source={labels[label]}
              style={{height: 30, width: 30}}
            />
          ))}
        </View>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Button
            title="Details"
            onPress={() => {
              navigation.navigate("Dish Details", {
                  title: title,
                  description: description,
                  content: content
              })
            }}
        />
        {
          addCalback != undefined ? <Button 
            title="Add to plan"
            onPress={() => {
              addCalback(content, category)
            }}
          /> : null
        }

        {
          removeCallback != undefined ? <Button 
            title="Remove from plan"
            onPress={() => {
              removeCallback(content, category)
            }}
          /> : null
        }


    </View>
  );
}

export default DishCard;
  