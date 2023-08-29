import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { icons } from '@/app/constants';
import SubjectsScreen from '@/app/SubjectsScreen';
import MyCourses from '@/app/MyCourses';
import Search from '@/app/Search';
import Profile from '@/app/Profile';

const Tab = createBottomTabNavigator();

function Bar() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: '#7e7e7e',
                tabBarLabelPosition: 'below-icon',
                tabBarStyle: {
                    paddingHorizontal: 10,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                },
                tabBarLabelStyle: {
                    fontSize: 8,
                    fontWeight: 'bold',
                    color: 'black'
                },
                tabBarItemStyle: {
                    paddingVertical: 5

                }
            }}
        >
            <Tab.Screen
                name="SubjectsScreen"
                component={SubjectsScreen}
                options={{
                    tabBarLabel: 'Subjects',
                    tabBarIcon: () => (
                        <Image source={icons.book} resizeMode='contain' />
                    ),
                }}
            />
            <Tab.Screen
                name="MyCourses"
                component={MyCourses}
                options={{
                    tabBarLabel: 'Courses',
                    tabBarIcon: () => (
                        <Image source={icons.cap} resizeMode='contain' />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: () => (
                        <Image source={icons.user} resizeMode='contain' />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: () => (
                        <Image source={icons.search} resizeMode='contain' />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default Bar;
