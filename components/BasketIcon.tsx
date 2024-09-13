import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "@/features/backetSlice";
import { useNavigation } from "@react-navigation/native";

const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const total = useSelector(selectBasketTotal);
    const navigation = useNavigation();
    if (items.length === 0) return null;
    return (
        <View className='absolute bottom-5 z-50 w-full'>
            <TouchableOpacity onPress={() => navigation.navigate('Basket')} className='bg-[#08CCBB] p-4 mx-4 flex-row  items-center rounded-lg space-x-1 shadow-lg'>
                <Text className=' text-white bg-[#01A296]  px-2 font-bold rounded-sm text-lg'>{items.length}</Text>
                <Text className='text-lg  text-white flex-1 text-center font-bold'>View Basket</Text>
                <Text className='text-lg text-white font-bold'>₹ {total}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BasketIcon;
