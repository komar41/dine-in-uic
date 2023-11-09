import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

function DishCard({title, image, description, content, navigation, addCalback = null, removeCallback = null}){

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
                  items: content
              })
            }}
        />
        <Button 
          title="Add to plan"
          onPress={() => {
            addCalback(title)
          }}
        />
        <Button 
          title="Remove from plan"
          onPress={() => {
            removeCallback(title)
          }}
        />
    </View>
  );
}

export default DishCard;
  