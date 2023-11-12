import { View, Text, Button} from 'react-native';
import { useState, useEffect } from "react";

function MyPlanScreen({ route, navigation }) {

  const [myplan, setPlan] = useState([]);

  useEffect(() => {
    if (route.params?.plan) {
      setPlan(route.params?.plan);
    }
  }, [route.params?.plan]);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>My plan</Text>
        <Button
        title="Generate Navigation Route"
        onPress={async () => {
          navigation.navigate({
            name: 'Map',
            params: { plan: myplan },
            merge: true,
          });
        }}
      />
      </View>
    );
  }

export default MyPlanScreen;