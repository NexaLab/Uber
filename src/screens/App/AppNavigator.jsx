import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { linking } from '../../web-routes/WebRoutes';
import SignUp from '../SignUp/SignUp';
import SignUpDetails from '../SignUp/SignUpDetails';
import Login from "../Login/Login"





const Stack = createNativeStackNavigator()





export default function AppNavigator() {
    return (
        <NavigationContainer linking={linking}>
            <Stack.Navigator initialRouteName='SignUp'>
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name="SignUpDetails" component={SignUpDetails} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}