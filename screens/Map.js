import { View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from "react";

const CustomButton = ({
  buttonText,
  menuItems,
  top,
  left,
  backgroundColor,
  category
}) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  return (
    <React.Fragment>
      <TouchableOpacity
        style={{
          position: 'absolute',
          left: left,
          top: top,
          backgroundColor: backgroundColor,
          borderRadius: 10,
          padding: 8,
          borderColor: 'gray',
          borderWidth: 1,
          width: 40,
          height: 40,
          alignItems: 'center', 
          justifyContent: 'center',
          display: isTextVisible ? 'none' : 'flex',
        }}
        onPress={() => {
          setIsTextVisible(!isTextVisible);
        }}
      >
        <Text style={{ textAlign: 'center', color: 'black', fontSize: 20 }}>
          {buttonText}
        </Text>
      </TouchableOpacity>

      {isTextVisible && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            left: left,
            top: top,
            backgroundColor: backgroundColor, // You can customize this or use a prop
            borderRadius: 10,
            padding: 8,
            borderColor: 'gray',
            borderWidth: 1,
            width: 150, // Adjust the width as needed
          }}
          onPress={() => {
            setIsTextVisible(!isTextVisible);
          }}
        >
          <Text style={{ color: 'white' }}>
            {menuItems[category] != undefined ? menuItems[category].map((item, index) => (
              <Text key={index}>
                {`• ${item.name}${index !== menuItems.length - 1 ? '\n' : ''}`}
              </Text>
            )) : null}
          </Text>
        </TouchableOpacity>
      )}
    </React.Fragment>
  );
};

function NavigateMapScreen({ route, navigation }) {
  const categories = ["Asian Kitchen", "Grill", "Global Tour", "Sandwich", "Latin Kitchen", "Fresh Market", "Mezze", "Nook"];
  // Bakery-Dessert
  const colors = ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"]
  const positions = [
    {top: 235, left: 80},
    {top: 135, left: 80},
    {top: 65, left: 130},
    {top: 65, left: 220},
    {top: 200, left: 260},
    {top: 280, left: 175},
    {top: 370, left: 95},
    {top: 370, left: 255}
  ]

  const { width, height } = Dimensions.get('window');

  const [myplan, setPlan] = useState({});
  const [sequence, setSequence] = useState(["1","2","3","4","5","6","7","8"]);

  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    if (route.params?.plan) {

      let stationsToVisit = Object.keys(route.params?.plan);

      let lastVisited = stationsToVisit[0];
      let lastVisitedIndex = 0;

      stationsToVisit.splice(0, 1); // remove first item

      let newSequence = [null, null, null, null, null, null, null, null]

      for(let i = 0; i < categories.length; i++){
        if(categories[i] == lastVisited){
          newSequence[i] = "1";
          lastVisitedIndex = i;
        }
      }      

      let currentNumberSequence = 2;

      while(stationsToVisit.length > 0){

        let minDistance = -1;
        let minDistanceIndex = -1;
        let minDistanceToVisitIndex = -1;
        let minDistanceName = "";

        for(let i = 0; i < categories.length; i++){
          for(let j = 0; j < stationsToVisit.length; j++){
            if(categories[i] == stationsToVisit[j]){
              let euclideanDistance = Math.sqrt(Math.pow((positions[i].top - positions[lastVisitedIndex].top), 2) + Math.pow((positions[i].left - positions[lastVisitedIndex].left), 2))
              if(minDistance == -1 || euclideanDistance < minDistance){
                minDistance = euclideanDistance;
                minDistanceIndex = i;
                minDistanceToVisitIndex = j;
                minDistanceName = categories[i];
              }
            }
          } 
        }
        
        stationsToVisit.splice(minDistanceToVisitIndex, 1);
        lastVisited = minDistanceName;
        lastVisitedIndex = minDistanceIndex;
        newSequence[minDistanceIndex] = currentNumberSequence+"";

        currentNumberSequence += 1;
      }
      
      setSequence(newSequence);
      setPlan(route.params?.plan);
    }
  }, [route.params?.plan]);

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('../assets/global.png')}
        style={{ position: 'absolute', left: 60, top: 0 }}
      />
      <Image
        source={require('../assets/sandwich.png')}
        style={{ position: 'absolute', right: 60, top: 0 }}
      />
      <Image
        source={require('../assets/grill.png')}
        style={{ position: 'absolute', left: 0, top: 100 }}
      />
      <Image
        source={require('../assets/asian.png')}
        style={{ position: 'absolute', left: 0, top: 215 }}
      />
      <Image
        source={require('../assets/latin.png')}
        style={{ position: 'absolute', right: 0, top: 100 }}
      />
      <Image
        source={require('../assets/salad.png')}
        style={{ position: 'absolute', left: 140, top: 130}}
      />
      <Image
        source={require('../assets/breakfast.png')}
        style={{ position: 'absolute', right: 0, top: 350 }}
      />
      <Image
        source={require('../assets/mezze.png')}
        style={{ position: 'absolute', left: 0, top: 350 }}
      />
      <Image
        source={require('../assets/entrance.png')}
        style={{ position: 'absolute', left: 155, top: 350 }}
      />

      {sequence.map((item, index) => {
        if(item != null){
          return (
            <CustomButton
            key={index+"customButton"}
            buttonText={sequence[index]}
            menuItems={myplan}
            category={categories[index]}
            top={positions[index].top}
            left={positions[index].left}
            backgroundColor={colors[index]}
          />
          )
        }else{
          return null;
        }
      })}

      <Text style={{fontWeight: "bold", fontSize: 33, marginTop: 440, marginLeft: 20, color: "#00483C"}}>Your favorites</Text>


    {/* <Image
      source={require('../assets/favorites_text.png')}
      style={{ position: 'absolute', left: 10, top: 480 }}
    />

<Image
      source={require('../assets/favorites.png')}
      style={{ position: 'absolute', left: 10, top: 510 }}
    /> */}

    </View>



    
  );
}

export default NavigateMapScreen;