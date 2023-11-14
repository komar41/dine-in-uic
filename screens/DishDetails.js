import { View, Text, StyleSheet, Image} from 'react-native';

function DishDetailsScreen({route, navigation}) {

    const { title, description, content } = route.params;

    return (
      <View style={{ backgroundColor: '#31b767', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{backgroundColor: "#fafafa", borderRadius: 8, paddingVertical: 20, paddingHorizontal: 20, width: 350, alignItems: 'center'}}>
        <Text style= {{fontSize: 25, color: '#31b767', fontWeight: 'bold', marginBottom: 15}}>{title}</Text>
        <Image/>
        <Text style={{color: '#31b767', fontSize: 17}}>Portion: {content.portion}</Text>
        <Text style={{color: '#31b767', fontSize: 17, marginBottom: 15}}>Calories: {content.calories}</Text>
        <Text style={{color: '#31b767', fontSize: 17, marginBottom: 5, fontWeight: "bold"}}>Description</Text>
        <Text style={{color: '#31b767', fontSize: 17, marginBottom: 15}}>{description}</Text>
        <Text style={{color: '#31b767', fontSize: 17, marginBottom: 5, fontWeight: "bold"}}>Ingredients</Text>
        <Text style={{color: '#31b767', fontSize: 17, marginBottom: 15}}>{content.ingredients}</Text>
        <Text style={{color: '#31b767', fontSize: 17, marginBottom: 5, fontWeight: "bold"}}>Nutritional Info</Text>
        {content.nutrients.map((nutrient, index) => {
          return (
            <Text key={"dishDetails"+nutrient+index} style={{color: '#31b767', fontSize: 17}}>{nutrient.name}: {nutrient.value} {nutrient.uom}</Text>
          );
        })}
        </View>
      </View>
    );
}

export default DishDetailsScreen;