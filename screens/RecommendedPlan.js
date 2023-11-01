import {View, Text, Button} from 'react-native';
import fetchMenu from '../services/web-scraper';
import { useState, useEffect } from "react";

function RecommendedPlanScreen(){

  const [menu, setMenu] = useState([]); 

  useEffect(() => {
    console.log("this are the categories", menu);
  });

  const getCurrentDate = () => {

    const date_obj = new Date();

    var date = date_obj.getDate();
    var month = date_obj.getMonth() + 1;
    var year = date_obj.getFullYear();

    return month + '-' + date + '-' + year; //format: d-m-y;
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Recommended Meal Plans</Text>
      <Text>These are recommended plans for today based on your dietary preferences</Text>
      <Text>{getCurrentDate()}</Text>
      <Button
        title="Fetch menu"
        onPress={async () => setMenu(await fetchMenu("2023-11-1", "b"))}
      />

    </View>
  );
}

export default RecommendedPlanScreen;
  