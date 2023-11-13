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
        <Button 
          title="Add to plan"
          onPress={() => {
            addCalback(content, category)
          }}
        />
        <Button 
          title="Remove from plan"
          onPress={() => {
            removeCallback(content)
          }}
        />
    </View>
  );
}

export default DishCard;
  