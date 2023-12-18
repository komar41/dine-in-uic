# Dine-In UIC: Navigate Large Food Halls with Ease

<div style="text-align: justify">
This project was originated from an identified issue faced by university students with dietary restrictions, particularly those frequenting UIC's United Table in Student Center East. Through a series of six interviews emphasizing the "what, how, and why," we sought to understand the challenges these students encounter while searching for safe food options.

The subsequent phases involved the development of low-fidelity prototypes, guided by the identified user needs, and the translation of these prototypes into a finalized mobile application during the delivery phase. The technical architecture of our application relies on React Native with Expo CLI, React Components, and local JSON data for dynamic menu retrieval, employing a generative AI tool for dish images, all while avoiding a separate database by locally storing persistent data.

The app evaluation involves a comparative study between our developed mobile application and an existing solution, "Dine on Campus," to address user needs gathered from interviews. Participants, exposed to both apps, performed tasks within the dining hall—identifying foods meeting their dietary restrictions and locating these items within the space.
</div>

### Application Setup
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

### Application Overview
<ins>**Home Screen:**</ins>
- The app launches with the **Home** screen of the application. The user can navigate to all the other screens from here. 
- The first step would be to navigate to **Set Dietary Restrictions** screen.
  
<img src="assets/1_home.png" alt="home screen" style="display: block; margin-left: auto; margin-right: auto; width: 40%;"/>

<ins>**Set Dietary Restriction Screen:**</ins>
- On this screen, users define their dietary preferences and restrictions.
- Once dietary preferences are set, the app seamlessly redirects users back to the **Home** screen.
- From there, users proceed to the next step by navigating to the **Set Up New Plan** screen.
<img src="assets/2_set_diet.png" alt="map screen" style="display: block; margin-left: auto; margin-right: auto; width: 40%;"/>

<ins>**Set Up New Plan Screen:**</ins>
- Here, the user will be recommended a list of food items based on their dietary preferences they set up in the previous screen.
- The user can then set up their meal plan for that day and save it.
- The user can also check dish details by clicking on any food item. It will take them to the **Dish Details** screen.
- After saving their plan, the user then will be taken to the **Home** screen again.
- From **Home**, the user can then check their plan using **My Plan** screen or navigate to the **Map** screen.
<img src="assets/3_create_plan.png" alt="map screen" style="display: block; margin-left: auto; margin-right: auto; width: 40%;"/>

<ins>**My Plan Screen:**</ins>
- Here, the user will be able to re-verify the meal plan they set for the day.
- The user can also check dish details from this screen by clicking on a food item. It will take them to the **Dish details** screen.
- Also, the user can directly navigate to the **Map** screen from here by clicking on **Check Navigation Route**.
<img src="assets/4_my_plan.png" alt="map screen" style="display: block; margin-left: auto; margin-right: auto; width: 40%;"/>

<ins>**Dish Details Screen:**
- Here, the user will be able to see the dish description, ingredient list and nutrition info for a chosen food item.
<img src="assets/5_dish_details.png" alt="map screen" style="display: block; margin-left: auto; margin-right: auto; width: 40%;"/>

<ins>**Map Screen:**</ins>
- The map screen will show the user the best route to get food for their choosen meal plan for that day.
- The map replicates the UIC dining hall, featuring numbered tooltips that guide users to the respective counters based on the most efficient route.
- Clicking on tooltips reveals the food items to collect from each counter.
<img src="assets/6_map.png" alt="map screen" style="display: block; margin-left: auto; margin-right: auto; width: 40%;"/>