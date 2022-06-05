import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Button, Surface} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Provider as PaperProvider} from 'react-native-paper';
import {lTheme, dTheme} from './Utills/Theme';
import {toggleTheme} from './Reducers/AppReducer';
export default function AppContainer() {
  const theme = useSelector(state => state.app.theme);
  const isDarkMode = theme === 'dark';
  const dispatch = useDispatch();
  return (
    <PaperProvider theme={theme === 'dark' ? dTheme : lTheme}>
      <SafeAreaView style={styles.grow}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
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
            </View>
          </Surface>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  grow: {
    flexGrow: 1,
  },
});
