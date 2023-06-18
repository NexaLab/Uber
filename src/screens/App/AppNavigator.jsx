import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { linking } from '../../web-routes/WebRoutes';
import SignUp from '../SignUp/SignUp';
import SignUpDetails from '../SignUp/SignUpDetails';
import Dashboard from '../Dashboard/Dashboard';
import Map from '../../components/Map/Map';
import BookARide from '../BookARide/BookARide';




const Stack = createNativeStackNavigator()





export default function AppNavigator() {
    return (
        <NavigationContainer linking={linking}>
            <Stack.Navigator initialRouteName='BookARide'>
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name="SignUpDetails" component={SignUpDetails} options={{ headerShown: false }} />
                <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
                <Stack.Screen name="Map" component={Map} options={{ headerShown: false }} />
                <Stack.Screen name="BookARide" component={BookARide} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}