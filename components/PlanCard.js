import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

function PlanCard({title, image, description, content, navigation}){

  return (
    <View>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Button
        title="Details"
        onPress={() => {
          navigation.navigate("Plan Content", {
            title: title,
            description: description,
            items: content
          })
        }}
      />
    </View>
  );
}

export default PlanCard;
  