import React from 'react';
import {SafeAreaView, ScrollView, Text, View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Button, Surface} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {toggleTheme} from '../Reducers/AppReducer';

//navigation

export default function Home({navigation}) {
  const theme = useSelector(state => state.app.theme);
  const isDarkMode = theme === 'dark';
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.grow}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.grow}>
        <Surface style={styles.grow}>
          <View>
            <MaterialCommunityIcons name="home" size={100} color="red" />
            <Text>Hello World</Text>
            <Button
              mode="contained"
              onPress={() => {
                dispatch(toggleTheme());
              }}>
              toggle theme/dark mode
            </Button>
            <Button
              mode="contained"
              onPress={() => navigation.navigate('Second')}>
              navigate to second
            </Button>
          </View>
        </Surface>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  grow: {
    flexGrow: 1,
  },
});
