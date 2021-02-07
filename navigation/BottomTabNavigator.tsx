import { Ionicons ,Entypo,MaterialIcons,FontAwesome5,EvilIcons} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {View} from 'react-native'

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import AlbumScreen from '../screens/AlbumScreen';
import HomeScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList,TabThreeParamList,TabFourParamList } from '../types';
import { AntDesign } from '@expo/vector-icons';
import SearchScreen from '../screens/SearchScreen';
import LibraryScreen from '../screens/LibraryScreen';
import PodcastScreen from '../screens/PodcastScreen';
import PlaylistsScreen from '../screens/PlaylistsScreen';
import ArtistsScreen from '../screens/ArtistsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import PremiumScreen from '../screens/PremiumScreen';


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Entypo name={'home'} size={30} color={color}/>,
          
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <EvilIcons name={'search'} size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Library"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name={'library-music'} size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Premimum"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name={'spotify'} size={30} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={HomeScreen}
        options={{ headerTitle: '',
        headerStyle:{
          backgroundColor:"transparent"
        },
      headerShown:false }}
      />

<TabOneStack.Screen
        name="AlbumScreen"
        component={AlbumScreen}
        options={{ headerTitle: '' ,
        headerRight:()=>(
          <View style={{flexDirection:"row"}}>
          <AntDesign name="hearto" size={24} color="white" style={{padding:10}} />
          <Entypo name="dots-three-vertical" size={24} color="white" style={{padding:10}} />
          </View>
        ),
        headerStyle:{
          backgroundColor:"#3f6b6b",
          elevation:0,
          shadowOpacity:0
        }
}}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="SearchSceen"
        component={SearchScreen}
        options={{ headerTitle: 'SearchScreen' ,headerShown:false}}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="LibraryScreen"
        component={LibraryScreen}
        options={{ headerTitle: 'LibraryScreen' ,headerShown:false,animationEnabled:false}}
      />
      <TabThreeStack.Screen
        name="PodcastScreen"
        component={PodcastScreen}
        options={{ headerTitle: 'PodcastScreen' ,headerShown:false,animationEnabled:false}}
      />
      <TabThreeStack.Screen
        name="PlaylistsScreen"
        component={PlaylistsScreen}
        options={{ headerTitle: 'PlaylistsScreen' ,headerShown:false,animationEnabled:false}}
      />
      <TabThreeStack.Screen
        name="ArtistsScreen"
        component={ArtistsScreen}
        options={{ headerTitle: 'ArtistsScreen' ,headerShown:false,animationEnabled:false}}
      />
      <TabThreeStack.Screen
        name="AlbumsScreen"
        component={AlbumsScreen}
        options={{ headerTitle: 'AlbumsScreen' ,headerShown:false,animationEnabled:false}}
      />
    </TabThreeStack.Navigator>
  );
}


const TabFourStack = createStackNavigator<TabFourParamList>();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="PremiumScreen"
        component={PremiumScreen}
        options={{ headerTitle: 'PremiumScreen' ,headerShown:false,animationEnabled:false}}
      />
     
    </TabFourStack.Navigator>
  );
}
