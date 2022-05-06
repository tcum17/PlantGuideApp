/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState, Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import PLANTS from './components/consts/plants';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import COLORS from './components/consts/colors';
import Home from './view/screens/Home';
import Catalogue from './view/screens/Catalogue';
import PlantDetail from './view/screens/PlantDetail';
import Garden from './view/screens/Garden';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const CatalogueStack = createStackNavigator();
const GardenStack = createStackNavigator();

const HomeStackScreen = ({garden}) => {
  return (
    <HomeStack.Navigator screenOptions={{header: () => null}}>
      <HomeStack.Screen name="Home" children={() => <Home garden={garden} />} />
    </HomeStack.Navigator>
  );
};

const CatalogueStackScreen = ({garden, addToGarden}) => {
  return (
    <CatalogueStack.Navigator screenOptions={{header: () => null}}>
      <CatalogueStack.Screen
        name="Catalogue"
        children={() => <Catalogue garden={garden} addToGarden={addToGarden} />}
      />
      <CatalogueStack.Screen
        name="Details"
        children={() => (
          <PlantDetail garden={garden} addToGarden={addToGarden} />
        )}
      />
    </CatalogueStack.Navigator>
  );
};

const GardenStackScreen = ({garden, deletePlant, addToGarden}) => {
  return (
    <GardenStack.Navigator screenOptions={{header: () => null}}>
      <GardenStack.Screen
        name="Garden"
        children={() => <Garden garden={garden} deletePlant={deletePlant} />}
      />
      <GardenStack.Screen
        name="Details"
        children={() => (
          <PlantDetail garden={garden} addToGarden={addToGarden} />
        )}
      />
    </GardenStack.Navigator>
  );
};

const App = () => {
  const [garden, setGarden] = useState([]);

  useEffect(() => {
    AsyncStorage.setItem('garden', JSON.stringify(garden));
    console.log(garden);
  }, [garden]);

  const addToGarden = plant => {
    console.log('Success adding plant to garden');
    alert('Added ' + plant.name + 'to garden');
    setGarden([...garden, {...plant}]);
  };

  const deletePlant = plantToRemove => {
    console.log('Success deleting plant');
    alert('Removed ' + plantToRemove.name + 'from garden');
    setGarden(garden.filter(plant => plant !== plantToRemove));
  };

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <Tabs.Navigator
        screenOptions={{header: () => null}}
        labeled={false}
        tabBarOptions={{showLabel: false, activeTintColor: COLORS.green}}>
        <Tabs.Screen
          name="Home1"
          children={() => <HomeStackScreen garden={garden} />}
          options={{
            tabBarIcon: tabInfo => {
              return (
                <MIcons
                  name="home"
                  size={28}
                  color={tabInfo.focused ? COLORS.green : 'grey'}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="Catalogue1"
          children={() => (
            <CatalogueStackScreen garden={garden} addToGarden={addToGarden} />
          )}
          options={{
            tabBarIcon: tabInfo => {
              return (
                <MCIcons
                  name="format-list-bulleted"
                  size={28}
                  color={tabInfo.focused ? COLORS.green : 'grey'}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="Garden1"
          children={() => (
            <GardenStackScreen
              garden={garden}
              deletePlant={deletePlant}
              addToGarden={addToGarden}
            />
          )}
          options={{
            tabBarIcon: tabInfo => {
              return (
                <MCIcons
                  name="sprout"
                  size={28}
                  color={tabInfo.focused ? COLORS.green : 'grey'}
                />
              );
            },
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
