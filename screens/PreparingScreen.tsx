import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "expo-router";
const PreparingScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery')
        }, 4000)
    })
    return (
        <View className='bg-[#FFFFFF] flex-1 items-center justify-center'>
            <Animatable.Text
                animation='slideInUp'
                iterationCount={1}
            >
                Preparing...</Animatable.Text>
            <Animatable.Image source={{
                uri: 'https://cdn.dribbble.com/users/4180373/screenshots/15651642/media/fb9109698b283836c0cd1d1dcd8ee554.gif'
            }} className='h-80 w-80 p-4 rounded-full'
                animation='slideInUp'
                iterationCount={1}
            />
        </View>
    );
};

export default PreparingScreen;
