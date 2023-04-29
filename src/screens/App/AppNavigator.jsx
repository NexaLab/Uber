import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { linking } from '../../web-routes/WebRoutes';
import Home from '../Home/Home';
import Login from '../Login/Login';

const Stack = createNativeStackNavigator()

export default function AppNavigator() {
    return (
        <NavigationContainer linking={linking}>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}