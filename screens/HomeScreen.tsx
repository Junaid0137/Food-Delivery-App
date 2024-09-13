import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import { AdjustmentsHorizontal, AdjustmentsVertical, ArrowDown, ChevronDoubleDown, ChevronUp } from "@nandorojo/heroicons/24/solid";
import { ChevronDown, ChevronUpDown, MagnifyingGlass, User } from "@nandorojo/heroicons/24/outline";
import Categories from "@/components/Categories";
import FeaturedRow from "@/components/FeaturedRow";
import sanityClient from "@/sanity";
const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = React.useState([]);
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTile: "Yo ho ho...!"
        })
    }, [])
    React.useEffect(() => {
        sanityClient
            .fetch(
                `
                *[_type == "featured"] {
                    ...,
                    restaurants[]->{
                        ...,
                        dishes[]->
                    }
                }`
            ).then((data) => {
                setFeaturedCategories(data);
            })
    }, [])
    return (
        <SafeAreaView className='bg-white pb-36'>
            <View className='flex-row items-center mx-4 space-x-3 pt-2'>
                <Image source={{
                    uri: 'https://links.papareact.com/wru'
                }} className='h-8 w-8 p-4 rounded-full' />
                <View className='flex-1'>
                    <Text className='font-bold text-xs text-gray-400'>Deliver Now!</Text>
                    <Text className='font-bold text-lg'>Current Location!
                        <ChevronDown width={20} height={20} color='#08CCBB' />
                    </Text>
                </View>
                <User color='#08CCBB' />
            </View>
            <View className='flex-row items-center space-x-2 pb-2 mx-4'>
                <View className='flex-row space-x-2 p-3 bg-gray-200 items-center rounded-md flex-1 mt-2'>
                    <MagnifyingGlass color='#08CCBB' />
                    <TextInput placeholder="Restaurants & more..." keyboardType="default" />
                </View>
                <AdjustmentsVertical color='#08CCBB' />
            </View>
            <ScrollView className='bg-gray-100'>
                <Categories />
                {featuredCategories.map((cats) => (
                    <FeaturedRow
                        key={cats._id}
                        id={cats._id}
                        title={cats.name}
                        description={cats.short_description}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
