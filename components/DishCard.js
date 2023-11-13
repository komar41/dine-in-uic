import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

function DishCard({title, image, description, content, navigation, addCalback = null, removeCallback = null}){

  return (
    <View style={{backgroundColor: '#fafafa', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 10, width: 400, marginBottom: 10}}>
        <Text style={{color: '#74c476', fontWeight: 'bold', fontSize: 18}}>{title}</Text>
        <Text style= {{color: '#74c476', fontSize: 15}}>{description}</Text>
        <Button
            title="Details"
            color="#74c476"
            onPress={() => {
              navigation.navigate("Dish Details", {
                  title: title,
                  description: description,
                  content: content
              })
            }}
        />
        <Button 
          title="Add to Plan"
          color="#74c476"
          onPress={() => {
            addCalback(title)
          }}
        />
        <Button 
          title="Remove from Plan"
          color="#74c476"
          onPress={() => {
            removeCallback(title)
          }}
        />
    </View>
  );
}

export default DishCard;
  