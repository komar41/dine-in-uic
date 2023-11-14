// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from "react";

import HomeScreen from './screens/Home';
import SetDietRestrictionScreen from './screens/SetDietRestriction';
import SetUpPlanScreen from './screens/SetUpPlan';
import PlanContentScreen from './screens/PlanContent';
import MyPlanScreen from './screens/MyPlan';
import DishDetailsScreen from './screens/DishDetails';
import NavigateMapScreen from './screens/Map'

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={{ title: 'Overview' }}
        />
        <Stack.Screen name="Set Dietary Restrictions" component={SetDietRestrictionScreen} />
        <Stack.Screen 
          name="Set Up Meal Plan" 
          component={SetUpPlanScreen} 
          options={{
            title: 'Set Up Meal Plan',
            headerStyle: {
              backgroundColor: '#32B768'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: "22px"
            },
          }}
        />
        <Stack.Screen name="Plan Content" component={PlanContentScreen} />
        <Stack.Screen name="My Plan" component={MyPlanScreen} />
        <Stack.Screen name="Dish Details" component={DishDetailsScreen} />
        <Stack.Screen name="Map" component={NavigateMapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;