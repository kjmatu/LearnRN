import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {useNavigation, NavigationContainer} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Main = () => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Main</Text>
      <TouchableOpacity
        onPress={() => {
          console.log('go to sub!!!!');
          navigate('Sub');
        }}>
        <Text>go to sub!!!!</Text>
      </TouchableOpacity>
    </View>
  );
};

const Sub = () => {
  return (
    <View style={styles.container}>
      <Text>Sub</Text>
    </View>
  );
};

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{title: 'main title', headerTintColor: 'red'}}
      />
      <Stack.Screen name="Sub" component={Sub} />
    </Stack.Navigator>
  );
};

export default function () {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
