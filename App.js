// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from "react";

import HomeScreen from './screens/Home';
import SetDietRestrictionScreen from './screens/SetDietRestriction';
import SetUpPlanScreen from './screens/SetUpPlan';
import PlanContentScreen from './screens/PlanContent';
import MyPlansScreen from './screens/MyPlans';
import DishDetailsScreen from './screens/DishDetails';

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
        <Stack.Screen name="Set Up Meal Plan" component={SetUpPlanScreen} />
        <Stack.Screen name="Plan Content" component={PlanContentScreen} />
        <Stack.Screen name="My Plans" component={MyPlansScreen} />
        <Stack.Screen name="Dish Details" component={DishDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;