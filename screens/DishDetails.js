import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { images } from '../services/all_images';

function DishDetailsScreen({route, navigation}) {

    const { title, description, content, labelImages } = route.params;

    console.log(content.name);

    let labels = {
      "Vegan": require("../assets/icon_vegan.png"),
      "Vegetarian": require("../assets/icon_vegetarian.png"),
      "Gluten-Free": require("../assets/gluten-free.jpg"),
      "Diary-Free": require("../assets/dairy-free.png"),
      "Nut-Free": require("../assets/nut_free.jpg")
    }

    return (
      <View style={{ backgroundColor: '#31b767', height: "100%"}}>
        <ScrollView style={{backgroundColor: "#fafafa", borderRadius: 8, paddingVertical: 20, paddingHorizontal: 20, width: 350, flex: 1, marginLeft: "auto", marginRight: "auto"}}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style= {{fontSize: 25, color: '#00483C', fontWeight: 'bold', marginBottom: 15, marginTop: 10}}>{title}</Text>
            <Image
              source={images[content.name] != undefined ? images[content.name] : require('../assets/splash.png')}
              style={{height: 100, width: 100}}
            />
            <ScrollView horizontal={true}>
              {labelImages.map((label, index) => (
                <Image 
                  key={"label"+index}
                  source={labels[label]}
                  style={{height: 30, width: 30, marginRight: 5}}
                />
              ))}
            </ScrollView>
            <Text style={{color: 'black', fontSize: 17}}><Text style={{fontWeight: "bold", color: '#00483C'}}>Portion:</Text> {content.portion}</Text>
            <Text style={{color: 'black', fontSize: 17, marginBottom: 15}}><Text style={{fontWeight: "bold", color: '#00483C'}}>Calories:</Text> {content.calories}</Text>
          </View>
          <Text style={{color: 'black', fontSize: 17, opacity: 0.5, marginBottom: 15}}>{content.id}</Text>
          <Text style={{color: '#00483C', fontSize: 20, marginBottom: 20, fontWeight: "bold"}}>Description</Text>
          <Text style={{color: 'black', opacity: 0.5, fontSize: 17, marginBottom: 15}}>{description}</Text>
          <Text style={{color: '#00483C', fontSize: 20, marginBottom: 20, fontWeight: "bold"}}>Ingredients</Text>
          <Text style={{color: 'black', fontSize: 17, opacity: 0.5, marginBottom: 15}}>{content.ingredients}</Text>
          <Text style={{color: '#00483C', fontSize: 20, marginBottom: 20, fontWeight: "bold"}}>Nutritional Info</Text>
          {content.nutrients.map((nutrient, index) => {
            return (
              <Text key={"dishDetails"+nutrient+index} style={{color: 'black', opacity: 0.5, fontSize: 17}}>{nutrient.name}: {nutrient.value} {nutrient.uom}</Text>
            );
          })}
        </ScrollView>
      </View>
    );
}

export default DishDetailsScreen;