// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/Home';
import SetDietRestrictionScreen from './screens/SetDietRestriction';
import RecommendedPlanScreen from './screens/RecommendedPlan';
import PlanContentScreen from './screens/PlanContent';
import MyPlansScreen from './screens/MyPlans';

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
        <Stack.Screen name="Recommended Meal Plan" component={RecommendedPlanScreen} />
        <Stack.Screen name="Plan Content" component={PlanContentScreen} />
        <Stack.Screen name="My Plans" component={MyPlansScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;