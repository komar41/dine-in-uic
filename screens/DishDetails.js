import { View, Text, StyleSheet, Image} from 'react-native';

function DishDetailsScreen({route, navigation}) {

    const { title, description, content } = route.params;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{title}</Text>
        <Image/>
        <Text>Portion: {content.portion}</Text>
        <Text>Calories: {content.calories}</Text>
        <Text style={{fontWeight: "bold"}}>Description</Text>
        <Text>{description}</Text>
        <Text style={{fontWeight: "bold"}}>Ingredients</Text>
        <Text>{content.ingredients}</Text>
        <Text style={{fontWeight: "bold"}}>Nutritional Info</Text>
        {content.nutrients.map((nutrient, index) => {
          return (
            <Text key={"dishDetails"+nutrient+index}>{nutrient.name}: {nutrient.value} {nutrient.uom}</Text>
          );
        })}
      </View>
    );
}

export default DishDetailsScreen;