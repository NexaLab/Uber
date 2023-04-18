import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { linking } from '../../web-routes/WebRoutes';
import Home from '../Home/Home';






const Stack = createNativeStackNavigator()





export default function AppNavigator() {
    return (
        <NavigationContainer linking={linking}>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}