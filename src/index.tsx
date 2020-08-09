import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs/';
import {useNavigation, NavigationContainer} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const StackMain = () => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <Text>StackMain</Text>
      <TouchableOpacity
        onPress={() => {
          console.log('go to Stacksub!!!!');
          navigate('StackSub');
        }}>
        <Text>go to sub!!!!</Text>
      </TouchableOpacity>
    </View>
  );
};

const StackSub = () => {
  return (
    <View style={styles.container}>
      <Text>StackSub</Text>
    </View>
  );
};

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StackMain"
        component={StackMain}
        options={{title: 'stack main title', headerTintColor: 'red'}}
      />
      <Stack.Screen name="StackSub" component={StackSub} />
    </Stack.Navigator>
  );
};

const TabMain = () => {
  return (
    <View style={styles.container}>
      <Text>TabMain</Text>
    </View>
  );
};

const TabSub = () => {
  return (
    <View style={styles.container}>
      <Text>TabSub</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TabMain" component={TabMain} />
      <Tab.Screen name="TabSub" component={TabSub} />
    </Tab.Navigator>
  );
};

export default function () {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
