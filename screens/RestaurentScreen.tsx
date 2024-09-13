import { View, Text, ScrollView, Image, TouchableOpacity, Button } from "react-native";
import React, { useEffect, useMemo } from "react";
import { useRoute } from "@react-navigation/native";
import { urlFor } from "@/sanity";
import { MapPin, Star } from "@nandorojo/heroicons/24/solid";
import DishRow from "@/components/DishRow";
import BasketIcon from "@/components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "@/features/restaurantSlice";

const RestaurentScreen = () => {
    const dispatch = useDispatch();

    const { params: {
        id, title, imgUrl, rating, genre, address, s_desc, dishes, long, lat
    }, } = useRoute();

    useMemo(() => {
        dispatch(setRestaurant({
            id, title, imgUrl, rating, genre, address, s_desc, dishes, long, lat
        }))
    }, [dispatch])
    return (
        <>
            <BasketIcon />
            <ScrollView>
                <View>
                    <Image className='w-full h-56' source={{ uri: urlFor(imgUrl).url() }} />
                </View>
                <View className='bg-white'>
                    <View className='mx-4 pt-4'>
                        <Text className='text-3xl font-bold mb-1'>{title}</Text>
                        <View calssName='mx-4'>
                            <View className='flex-row space-x-2 items-center'>
                                <Star height={20} width={20} opacity={0.5} color='#08CCBB' />
                                <Text className='text-xs text-gray-400'>{rating} . {genre}</Text>
                                <MapPin height={20} width={20} opacity={0.5} color='#08CCBB' />
                                <Text className='text-xs text-gray-400'>Naryby {address}</Text>
                            </View>
                        </View>
                        <Text className='text-gray-400 text-xs mt-2 mx-1 mb-2'>{s_desc}</Text>
                    </View>
                </View>
                <View className='pb-36'>
                    <Text className='text-xl font-bold mx-6 my-4'>Menu</Text>
                    {dishes.map((dish) => (
                        <DishRow
                            key={dish._id}
                            id={dish._id}
                            name={dish.name}
                            price={dish.price}
                            image={dish.image}
                            s_desc={dish.short_description}
                        />
                    ))}
                </View>
            </ScrollView>
        </>
    );
};

export default RestaurentScreen;
