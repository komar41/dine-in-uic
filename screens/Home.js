import { ImageBackground, Button, View} from 'react-native';

const image = {uri: 'https://i.pinimg.com/564x/d8/b3/57/d8b357996895f53612208227d0b4bceb.jpg'};

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1}}>
        <ImageBackground source={image} resizeMode="cover" style={{flex: 1, justifyContent: 'center',  alignItems: 'center'}}>
          <View style={{backgroundColor: '#1b9e77', borderRadius: 8, paddingVertical: 12, marginBottom: 10, width: 220}}>
            <Button
              title="Set Dietary Restrictions"
              color="white"
              onPress={() => navigation.navigate('Set Dietary Restrictions')}
            />
          </View>
  
          <View style={{backgroundColor: '#7570b3', borderRadius: 8, paddingVertical: 12, width: 220}}>
            <Button
              title="Discover Meal Plans"
              color="white"
              onPress={() => navigation.navigate('Recommended Meal Plan')}
            />
          </View>
        </ImageBackground>
      </View>
      
    );
  }

  export default HomeScreen;