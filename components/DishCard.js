import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

function DishCard({title, image, description, content, navigation, category, addCalback = null, removeCallback = null}){

  return (
    <View>
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
  