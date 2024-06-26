// App.js
import React from 'react';
import { Provider as PaperProvider, DefaultTheme, DarkTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/component/HomeScreen';
import SettingsScreen from './src/component/SettingsScreen';
import StatisticsScreen from './src/component/StatisticsScreen'; // Assuming these are additional screens
import MyCardsScreen from './src/component/MyCardsScreen'; // Assuming these are additional screens


const Tab = createBottomTabNavigator();


const AppNavigator = () => {


  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home-outline';
              } else if (route.name === 'Settings') {
                iconName = 'settings-outline';
              } else if (route.name === 'Statistics') {
                iconName = 'stats-chart-outline';
              } else if (route.name === 'My Cards') {
                iconName = 'card-outline';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Statistics" component={StatisticsScreen} />
          <Tab.Screen name="My Cards" component={MyCardsScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

const App = () => (
  <ThemeProvider>
    <AppNavigator />
  </ThemeProvider>
);

export default App;
