import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';


function SetDietRestrictionScreen() {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
  });

  const handleCheckboxToggle = (checkboxName) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={checkboxes.checkbox1} color={checkboxes.checkbox1 ? '#006d2c' : undefined} onValueChange={()=>handleCheckboxToggle('checkbox1')} />
        <Text style={styles.paragraph}>Vegan</Text>
      </View>

      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={checkboxes.checkbox2} color={checkboxes.checkbox2 ? '#006d2c' : undefined} onValueChange={()=>handleCheckboxToggle('checkbox2')} />
        <Text style={styles.paragraph}>Vegetarian</Text>
      </View>

      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={checkboxes.checkbox3} color={checkboxes.checkbox3 ? '#006d2c' : undefined} onValueChange={()=>handleCheckboxToggle('checkbox3')} />
        <Text style={styles.paragraph}>Climate friendly</Text>
      </View>

      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={checkboxes.checkbox4} color={checkboxes.checkbox4 ? '#006d2c' : undefined} onValueChange={()=>handleCheckboxToggle('checkbox4')} />
        <Text style={styles.paragraph}>Balanced nutrients</Text>
      </View>

      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={checkboxes.checkbox5} color={checkboxes.checkbox5 ? '#006d2c' : undefined} onValueChange={()=>handleCheckboxToggle('checkbox5')} />
        <Text style={styles.paragraph}>Halal</Text>
      </View>

      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={checkboxes.checkbox6} color={checkboxes.checkbox6 ? '#006d2c' : undefined} onValueChange={()=>handleCheckboxToggle('checkbox6')} />
        <Text style={styles.paragraph}>Kosher</Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity
            style={{
              borderColor: 'white',
              borderWidth: 1,
              width: 200,
              height: 80,
              top: 20,
              left: 80,
              alignItems: 'center', 
              justifyContent: 'center',
              backgroundColor: '#006d2c',
              borderRadius: 10,
            }}
            // onPress={() => {
              
            // }}
          >
            <Text style={{ textAlign: 'center', color: 'black', fontSize: 25, color: 'white'}}>
              Save Profile
            </Text>
        </TouchableOpacity>
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 20,
  },
  checkbox: {
    width: 40,
    height: 40,
    margin: 20,
  },
});

export default SetDietRestrictionScreen;