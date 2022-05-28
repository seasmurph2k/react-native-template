import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
  ScrollView,
  StatusBar,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import {Surface} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AppContainer() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.grow}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.grow}>
        <Surface style={styles.grow}>
          <View>
            <MaterialCommunityIcons name="home" size={100} color="red" />
            <Text>Hello World</Text>
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
