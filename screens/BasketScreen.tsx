import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "@/features/restaurantSlice";
import { removeFromBasket, selectBasketItems, selectBasketTotal } from "@/features/backetSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { urlFor } from "@/sanity";
import { CurrencyBangladeshi } from "@nandorojo/heroicons/24/solid";
import { useNavigation } from "expo-router";

const BasketScreen = () => {
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const [groupItemsInBasket, setGroupedItemsInBasket] = useState([]);
    const total = useSelector(selectBasketTotal);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    useEffect(() => {
        const groupItem = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {})
        setGroupedItemsInBasket(groupItem);
    }, [items])
    return (
        <View className='bg-white flex-1'>
            <View className='flex-1 bg-gray-100'>
                <View className='p-5 bg-white border-b shadow-sm border-[#00CCBB]'>
                    <View>
                        <Text className='text-center text-lg font-bold'>Basket</Text>
                        <Text className='text-gray-400 text-center' >{restaurant.title}</Text>
                    </View>
                </View>
                <View className='flex flex-row items-center px-4 py-5 space-x-4 bg-white my-4'>
                    <Image source={{
                        uri: 'https://links.papareact.com/wru'
                    }} className='h-8 w-8 p-4 rounded-full' />
                    <Text className='flex-1' >Delivery in 50-60 min</Text>
                    <TouchableOpacity>
                        <Text className='text-[#00CCBB]' >Change</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView className='divide-y divide-gray-200' >
                    {Object.entries(groupItemsInBasket).map(([key, item]) => (
                        <TouchableOpacity key={key} className='flex-row items-center space-x-3 py-2 px-5 bg-white' >
                            <Text className='text-[#00CCBB]' >{item.length} x </Text>
                            <Image source={{
                                uri: urlFor(item[0]?.image).url()
                            }} className='h-12 w-12 rounded-full' />
                            <Text className='flex-1 font-semibold' >{item[0]?.name}</Text>
                            <Text className='text-gray-600'>
                                ₹ {item[0]?.price}
                            </Text>
                            <TouchableOpacity>
                                <Text className='text-[#00CCBB] text-xs' onPress={() => dispatch(removeFromBasket({ id: key }))} >Remove</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <View className='p-5 bg-white space-y-4 mt-4'>
                    <View className='flex flex-row justify-between'>
                        <Text className='text-gray-400'>Subtotal</Text>
                        <Text className='text-gray-400'>₹ {total}</Text>
                    </View>
                    <View className='flex flex-row justify-between'>
                        <Text className='text-gray-400'>Delivery fee</Text>
                        <Text className='text-gray-400'>₹ {99}</Text>
                    </View>
                    <View className='flex flex-row justify-between'>
                        <Text className='text-black font-bold'>Order total</Text>
                        <Text className='text-black font-extrabold'>{total + 99}</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Preparing')} className='bg-[#00CCBB] p-4 rounded-lg'>
                        <Text className='text-white font-extrabold mx-auto'>Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default BasketScreen;
