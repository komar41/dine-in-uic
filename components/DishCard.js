import React from 'react';
import {
  Text,
  View,
  Button,
  Image
} from 'react-native';
import { images } from '../services/all_images'

function DishCard({title, image, description, content, navigation, category, addCalback = null, removeCallback = null}){

  return (
    <View>
        <Image
          source={images[content.id] != undefined ? images[content.id] : require('../assets/splash.png')}
          onError={() => setImageError(true)}
          style={{height: 100, width: 100}}
        />
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
  