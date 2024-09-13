import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MapPin, Star } from "@nandorojo/heroicons/24/solid";
import { urlFor } from "@/sanity";
import { useNavigation } from "expo-router";

const RestaurantCards = ({ id, title, imgUrl, rating, genre, address, s_desc, dishes, long, lat }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity key={id}
            onPress={() => {
                navigation.navigate('Restaurent', {
                    id, title, imgUrl, rating, genre, address, s_desc, dishes, long, lat
                })
            }}
            className='mx-4 mt-2 bg-white rounded-md shadow-xl mr-2 p-2'
        >
            <Image className='w-74 h-36 rounded-md' source={{ uri: urlFor(imgUrl).url() }} />
            <View className='mx-4 space-y-2'>
                <Text className='font-bold text-lg pt-2'>{title}</Text>
                <View className='flex-row space-x-2 items-center'>
                    <Star height={20} width={20} color='#08CCBB' />
                    <Text className='text-xs text-gray-400'>{rating} . {genre}</Text>
                </View>
                <View className='flex-row space-x-2 items-center'>
                    <MapPin height={20} width={20} color='#08CCBB' />
                    <Text className='text-xs text-gray-400'>Nearby {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default RestaurantCards;
