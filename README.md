# UIC Dine-In: Navigate Large Food Halls with Ease

## Initial Setup
1. On your terminal run the following commands:
   - `git clone https://github.com/komar41/uic-dining-hall-navigation.git`
   - `cd uic-dining-hall-navigation`
     
2. Install **Node.js** from [https://nodejs.org/en/download](https://nodejs.org/en/download).
<!-- - npm install -g expo-cli -->
<!-- - npm install @react-navigation/native
- npx expo install react-native-screens react-native-safe-area-context
- npm install @react-navigation/native-stack -->

3. On your terminal, run the following commands:
   - `npm install`
   - `npm start`

4. Download the **Expo Go** app on your phone to test the app on the development server.

5. Scan the QR code on your phone to test the app.

### Home screen
- The app launches with the **Home** screen of the application. The user can navigate to all the other screens from here. 
- The first step would be to navigate to **Set Dietary Restrictions** screen.
  
<img src="assets/1_home.png" alt="home screen" style="display: block; margin-left: auto; margin-right: auto; width: 40%;"/>

### Set Dietary Restriction Screen
- On this screen, users define their dietary preferences and restrictions.
- Once dietary preferences are set, the app seamlessly redirects users back to the **Home** screen.
- From there, users proceed to the next step by navigating to the **Set Up New Plan** screen.
<img src="assets/2_set_diet.png" alt="map screen" style="display: block; margin-left: auto; margin-right: auto; width: 40%;"/>

### Set Up New Plan Screen
- Here, the user will be recommended a list of food items based on their dietary preferences they set up in the previous screen.
- The user can then set up their meal plan for that day and save it.
- The user can also check dish details by clicking on any food item. It will take them to the **Dish Details** screen.
- After saving their plan, the user then will be taken to the **Home** screen again.
- From **Home**, the user can then check their plan using **My Plan** screen or navigate to the **Map** screen.
<img src="assets/3_create_plan.png" alt="map screen" style="display: block; margin-left: auto; margin-right: auto; width: 40%;"/>

### My Plan Screen
- Here, the user will be able to re-verify the meal plan they set for the day.
- The user can also check dish details from this screen by clicking on a food item. It will take them to the **Dish details** screen.
- Also, the user can directly navigate to the **Map** screen from here by clicking on **Check Navigation Route**.
<img src="assets/4_my_plan.png" alt="map screen" style="display: block; margin-left: auto; margin-right: auto; width: 40%;"/>

### Dish Details Screen
- Here, the user will be able to see the dish description, ingredient list and nutrition info for a chosen food item.
<img src="assets/5_dish_details.png" alt="map screen" style="display: block; margin-left: auto; margin-right: auto; width: 40%;"/>

### Map Screen
- The map screen will show the user the best route to get food for their choosen meal plan for that day.
- The map replicates the UIC dining hall, featuring numbered tooltips that guide users to the respective counters based on the most efficient route.
- Clicking on tooltips reveals the food items to collect from each counter.
<img src="assets/6_map.png" alt="map screen" style="display: block; margin-left: auto; margin-right: auto; width: 40%;"/>
