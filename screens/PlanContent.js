import { View, Text, StyleSheet} from 'react-native';

function PlanContentScreen({route, navigation}) {

    const { title, description, items } = route.params;

    console.log("items", items);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{title}</Text>
        <Text>{description}</Text>
        {items.map((item, index) => {
            if(item == undefined){
                return null
            }

            return (
                <View key={"itemInPlanContent"+index} style={styles.container}>
                    <Text>{item.name}</Text>
                    <Text>Description: {item.desc}</Text>
                    <Text>Ingredients: {item.ingredients}</Text>
                    <Text>Portion: {item.portion}</Text>
                    <Text>Calories: {item.calories}</Text>
                </View>
            );
        })}
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', // Center the Text horizontally in the container
        justifyContent: 'center', // Center the Text vertically in the container
        textAlign: 'left', // Align the text to the left
      }
});

export default PlanContentScreen;