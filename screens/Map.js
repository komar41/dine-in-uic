import { View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from "react";

const CustomButton = ({
  buttonText,
  menuItems,
  top,
  left,
  backgroundColor,
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
            {menuItems.map((item, index) => (
              <Text key={index}>
                {`• ${item}${index !== menuItems.length - 1 ? '\n' : ''}`}
              </Text>
            ))}
          </Text>
        </TouchableOpacity>
      )}
    </React.Fragment>
  );
};


function NavigateMapScreen({ route, navigation }) {
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8];
  const { width, height } = Dimensions.get('window');

  const [myplan, setPlan] = useState([]);

  const [isTextVisible, setIsTextVisible] = useState(false);
  const menuItems = ['Chicken Katsu', 'Hard Fried Eggs', 'Chicken Katsu', 'Hard Fried Eggs', 'Chicken Katsu', 'Hard Fried Eggs'];

  useEffect(() => {
    if (route.params?.plan) {
      setPlan(route.params?.plan);
      // generate best route
    }
  }, [route.params?.plan]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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

    <CustomButton
        buttonText="1"
        menuItems={menuItems}
        top={235}
        left={80}
        backgroundColor="#66c2a5"
    />

    <CustomButton
        buttonText="2"
        menuItems={menuItems}
        top={135}
        left={80}
        backgroundColor="#fc8d62"
    />

    <CustomButton
        buttonText="3"
        menuItems={menuItems}
        top={65}
        left={130}
        backgroundColor="#8da0cb"
    />

    <CustomButton
        buttonText="4"
        menuItems={menuItems}
        top={65}
        left={220}
        backgroundColor="#e78ac3"
    />

    <CustomButton
        buttonText="5"
        menuItems={menuItems}
        top={200}
        left={260}
        backgroundColor="#a6d854"
    />

    <CustomButton
        buttonText="6"
        menuItems={menuItems}
        top={280}
        left={175}
        backgroundColor="#ffd92f"
    />

    <CustomButton
        buttonText="7"
        menuItems={menuItems}
        top={370}
        left={95}
        backgroundColor="#e5c494"
    />

    <CustomButton
        buttonText="8"
        menuItems={menuItems}
        top={370}
        left={255}
        backgroundColor="#b3b3b3"
    />

    <Image
      source={require('../assets/favorites_text.png')}
      style={{ position: 'absolute', left: 10, top: 480 }}
    />

<Image
      source={require('../assets/favorites.png')}
      style={{ position: 'absolute', left: 10, top: 510 }}
    />

    </View>

    
  );
}

export default NavigateMapScreen;