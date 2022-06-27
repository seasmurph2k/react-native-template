import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Appbar, useTheme} from 'react-native-paper';
// import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'; // import {useSelector} from 'react-redux';
import {getHeaderTitle} from '@react-navigation/elements';
import Home from '../Screens/Home';
import Second from '../Screens/Second';

const Main = createNativeStackNavigator();

const MainStack = () => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    titleStyle: {fontSize: 18, fontWeight: 'bold', color: theme.colors.primary},
  });
  return (
    <Main.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        header: ({navigation, route, options, back}) => {
          // console.log('scene is', scene);
          console.log('options are: ', options);
          console.log('route is ', route);
          console.log('back is ', back);
          const title = getHeaderTitle(options, route.name);

          return (
            <Appbar.Header theme={{colors: {primary: theme.colors.surface}}}>
              {back ? (
                <Appbar.BackAction
                  onPress={navigation.goBack}
                  color={theme.colors.primary}
                />
              ) : (
                <Appbar.Action
                  icon="menu"
                  onPress={() => {
                    navigation.toggleDrawer();
                  }}
                />
              )}
              <Appbar.Content
                title={title}
                style={styles.titleStyle}></Appbar.Content>
            </Appbar.Header>
          );
        },
        animationEnabled: false,
      }}>
      <Main.Screen name="Home" component={Home}></Main.Screen>
      <Main.Screen name="Second" component={Second}></Main.Screen>
    </Main.Navigator>
  );
};

export default MainStack;
