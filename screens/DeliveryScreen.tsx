import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Bars3BottomRight, XCircle } from "@nandorojo/heroicons/24/solid";
import { useNavigation } from "expo-router";
import { useSelector } from "react-redux";
import { selectRestaurant } from "@/features/restaurantSlice";
import MapView, { Marker } from 'react-native-maps';
const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    return (
        <View className='flex-1 bg-[#00CCBB]'>
            <SafeAreaView className='z-50'>
                <View className='p-5 flex flex-row justify-between items-center'>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <XCircle color='white' />
                    </TouchableOpacity>
                    <Text className='font-light text-white text-xs' >Cancle Order</Text>
                </View>
                <View className='bg-white p-6 mx-5 my-2 rounded-lg shadow-lg'>
                    <View className='flex flex-row justify-between'>
                        <View>
                            <Text className='text-lg text-gray-400' >Estimated Time</Text>
                            <Text className='text-3xl font-bold' >50-60 Min</Text>
                        </View>
                        <Image
                            source={{
                                uri: 'https://cdn.dribbble.com/users/3232028/screenshots/17250321/media/642c6f61b195e721ee4582d5b574e220.gif'
                            }}
                            className='h-20 w-20'
                        />
                    </View>
                    <Text className='text-gray-500 text-[10px]'>{`Your order at ${restaurant.title} is beging prepared...`}</Text>
                </View>
            </SafeAreaView>
            <MapView
                initialRegion={{
                    latitude: 17.394970,
                    longitude: 78.422800,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}
                className='flex-1 -mt-10 z-0'
                mapType="mutedStandard"
            >
                <Marker
                    coordinate={{
                        latitude: 17.394970,
                        longitude: 78.422800
                    }}
                    title={restaurant.title}
                    description={restaurant.s_desc}
                    identifier="origin"
                    pinColor="#FD0000"
                />
            </MapView>
            <SafeAreaView className='bg-white flex flex-row items-center space-x-5 h-28'>
                <Image source={{
                    uri: 'https://links.papareact.com/wru'
                }} className='h-12 w-12 p-4 rounded-full ml-5 bg-gray-100' />
                <View className='flex-1'>
                    <Text className='text-lg font-bold' >Syed Junaid</Text>
                    <Text className='text-gray-400 text-xs' >Your Ride</Text>
                </View>
                <Text className='text-lg mr-5 font-bold text-[#00CCBB]' >Call</Text>
            </SafeAreaView>
        </View>
    );
};

export default DeliveryScreen;
