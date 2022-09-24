/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icons from 'react-native-vector-icons/MaterialIcons';

function FeedScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen!</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications Screen!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile Screen!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      tabBarPosition="top"
      initialRouteName="Feed"
      screenOptions={{
        tabBarLabelStyle: {fontSize: 14, fontWeight: '400', marginLeft: 0},
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarActiveTintColor: '#FF2970',
        tabBarStyle: {backgroundColor: '#2E3F7F'},
        tabBarIndicatorStyle: {backgroundColor: '#FF2970'},
        tabBarShowIcon: true,
        tabBarShowLabel: true,
        tabBarItemStyle: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color}) => (
            <Icons
              name="home"
              size={20}
              style={{color: focused ? color : '#FFFFFF'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({focused, color}) => (
            <Icons
              name="notifications"
              size={20}
              style={{color: focused ? color : '#FFFFFF'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color}) => (
            <Icons
              name="person"
              size={20}
              style={{color: focused ? color : '#FFFFFF'}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
