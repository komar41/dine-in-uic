import {View, Text, Button} from 'react-native';
import fetchMenu from '../services/web-scraper';
import { useState, useEffect } from "react";
import PlanCard from '../components/PlanCard';

function RecommendedPlanScreen({ navigation }){

  const [menu, setMenu] = useState([]); 
  const [plans, setPlans] = useState([]);

  const getCurrentDate = () => {

    const date_obj = new Date();

    var date = date_obj.getDate();
    var month = date_obj.getMonth() + 1;
    var year = date_obj.getFullYear();

    return month + '-' + date + '-' + year; //format: d-m-y;
  }

  const createMockPlans = (menu) => {
    // randomly creating five plans with five random meals each
    let plans = [];

    for(let i = 0; i < 5; i++){

      let plan = {};

      plan.title = "Plan "+i;
      plan.image = "placeholder";
      plan.description = "This is the description of plan "+i;
      plan.content = [];

      for(let j = 0; j < 5; j++){

        let random_category = Math.floor(Math.random() * menu.length);

        let random_item = Math.floor(Math.random() * menu[random_category].items.length);

        plan.content.push(menu[random_category].items[random_item]);        
      }

      plans.push(plan);
    }

    setPlans(plans);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Recommended Meal Plans</Text>
      <Text>These are recommended plans for today based on your dietary preferences</Text>
      <Text>{getCurrentDate()}</Text>
      <Button
        title="Fetch menu"
        onPress={async () => {
          let local_menu = await fetchMenu("2023-11-1", "b");
          setMenu(local_menu);
          createMockPlans(local_menu);
        }}
      />
      {plans.map((plan, index) => {
        return (
          <PlanCard 
            key={"planCard"+index}
            title={plan.title}
            image={plan.image} 
            description={plan.description}
            content={plan.content}      
            navigation={navigation}    
          />
        );
      })}

    </View>
  );
}

export default RecommendedPlanScreen;
  