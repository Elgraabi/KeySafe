import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/login";
import RecoverPasswordScreen from "../screens/recoverPassword";
import RegisterUserScreen from "../screens/registerUser";
import WelcomeScreen from "../screens/welcome";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            
            <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
                
                <Stack.Screen name="Login" component={LoginScreen} />
                
                <Stack.Screen name="RecoverPassword" component={RecoverPasswordScreen} />

                <Stack.Screen name="RegisterUser" component={RegisterUserScreen} />

                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}
