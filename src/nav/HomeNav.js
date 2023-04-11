import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const HomeStack = createNativeStackNavigator();

export default function HomeNav() {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Profile" component={Profile} />
    </HomeStack.Navigator>
  );
}
