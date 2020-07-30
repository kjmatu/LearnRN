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

export default function () {
  return (
    <NavigationContainer onStateChange={(newState) => console.log(newState)}>
      <StackNavigator />
    </NavigationContainer>
  );
}
