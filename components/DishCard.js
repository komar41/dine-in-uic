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

    <View style={{backgroundColor: '#fafafa', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 10, width: 400, marginBottom: 10}}>
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
        <Text style={{color: '#31b767', fontWeight: 'bold', fontSize: 20}}>{title}</Text>
        <Text style= {{color: '#31b767', fontSize: 17}}>{description}</Text>
        <View style={{alignItems: 'left'}}>
          <Button
              title="Details"
              color='#31b767'
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
              color='#31b767'
              onPress={() => {
                addCalback(content, category)
              }}
            /> : null
          }

        {
          removeCallback != undefined ? <Button 
            title="Remove from plan"
            color='#31b767'
            onPress={() => {
              removeCallback(content, category)
            }}
          /> : null
        }
        </View>
    </View>
  );
}

export default DishCard;
  