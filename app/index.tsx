import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/screens/HomeScreen";
import RestaurentScreen from "@/screens/RestaurentScreen";
import { Provider } from 'react-redux';
import { store } from "@/store";
import BasketScreen from "@/screens/BasketScreen";
import PreparingScreen from "@/screens/PreparingScreen";
import DeliveryScreen from "@/screens/DeliveryScreen";

const Stack = createNativeStackNavigator();
const index = () => {
    return (
        <Provider store={store}>
            <NavigationContainer independent={true}>
                <Stack.Navigator>
                    <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='Restaurent' component={RestaurentScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='Basket' component={BasketScreen} options={{ presentation: 'modal', headerShown: false }} />
                    <Stack.Screen name='Preparing' component={PreparingScreen} options={{ presentation: 'fullScreenModal', headerShown: false }} />
                    <Stack.Screen name='Delivery' component={DeliveryScreen} options={{ presentation: 'fullScreenModal', headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default index;
