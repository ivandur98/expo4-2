import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  StyleSheet, Text, View, Linking } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Button from './Button';

const ExternalLinkBtn = (props) => {
  return <Button big rounded
            style={styles.button}
            onPress={() => {
                Linking.openURL(props.url)
                .catch(err => {
                    console.error("Failed opening page because: ", err)
                    alert('Failed to open page')
                })}}
          >Asia
            </Button>
}
const ExternalLinkBtn1 = (props) => {
  return <Button danger rounded
            style={styles.button}
            onPress={() => {
                Linking.openURL(props.url)
                .catch(err => {
                    console.error("Failed opening page because: ", err)
                    alert('Failed to open page')
                })}}
          >Africa
            </Button>
}
const ExternalLinkBtn2 = (props) => {
  return <Button big rounded
            style={styles.button}
            onPress={() => {
                Linking.openURL(props.url)
                .catch(err => {
                    console.error("Failed opening page because: ", err)
                    alert('Failed to open page')
                })}}
          >North America
            </Button>
}
const ExternalLinkBtn3 = (props) => {
  return <Button danger rounded
            style={styles.button}
            onPress={() => {
                Linking.openURL(props.url)
                .catch(err => {
                    console.error("Failed opening page because: ", err)
                    alert('Failed to open page')
                })}}
          >South America
            </Button>
}
const ExternalLinkBtn4 = (props) => {
  return <Button big rounded
            style={styles.button}
            onPress={() => {
                Linking.openURL(props.url)
                .catch(err => {
                    console.error("Failed opening page because: ", err)
                    alert('Failed to open page')
                })}}
          >Antarctica
            </Button>
}
const ExternalLinkBtn5 = (props) => {
  return <Button danger rounded
            style={styles.button}
            onPress={() => {
                Linking.openURL(props.url)
                .catch(err => {
                    console.error("Failed opening page because: ", err)
                    alert('Failed to open page')
                })}}
          >Europe
            </Button>
}
const ExternalLinkBtn6 = (props) => {
  return <Button big rounded
            style={styles.button}
            onPress={() => {
                Linking.openURL(props.url)
                .catch(err => {
                    console.error("Failed opening page because: ", err)
                    alert('Failed to open page')
                })}}
          >Australia
            </Button>
}
function HomeScreen (){
  return(
    <View style={styles.container}>
    <Text>Welcome to HW2!</Text>
    <Button title='Click Here' >
    </Button>
    <ExternalLinkBtn title="Asia"  url="https://en.wikipedia.org/wiki/Asia" style={styles.button}/>
    <ExternalLinkBtn1 title="Africa" url="https://en.wikipedia.org/wiki/Africa" />
    <ExternalLinkBtn2 title="North America" url="https://en.wikipedia.org/wiki/North_America" />
    <ExternalLinkBtn3 title="South America" url="https://en.wikipedia.org/wiki/South_America" />
    <ExternalLinkBtn4 title="Antartica" url="https://en.wikipedia.org/wiki/Antarctica" />
    <ExternalLinkBtn5 title="Europe" url="https://en.wikipedia.org/wiki/Europe" />
    <ExternalLinkBtn6 title="Australia" url="https://en.wikipedia.org/wiki/Australia_(continent)" />

  </View>
  )
}
function BrowserScreen(){
  return(
    <View style={styles.secondView}>
    <Text>Thanks for using my app!</Text>
     <StatusBar style="auto" />
   </View> 
  )
}

const Tab = createBottomTabNavigator();

export default function App(){
return(
  <NavigationContainer>
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeScreen') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'BrowserScreen') {
              iconName = focused ? 'add-circle-outline' : 'add-circle';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        >
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="BrowserScreen" component={BrowserScreen} />
    </Tab.Navigator>
  </NavigationContainer>
)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondView: {
    flex: 1,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  })

