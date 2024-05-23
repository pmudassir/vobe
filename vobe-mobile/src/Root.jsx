import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './features/HomeScreen/screens/Home';
import Description from './features/BarDescription/screens/Description';
import BookingConfirmation from './features/BookingConfirmation/screens/BookingConfirmation';
import Login from './features/Login/screens/Login';
import OnBoarding from './features/OnBoarding/screens/OnBoarding';
import Otp from './features/Login/screens/Otp';

const Root = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Description" component={Description} />
      <Stack.Screen name="BookingConfirmation" component={BookingConfirmation} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
    </Stack.Navigator>
  )
}

export default Root