import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRight } from "@nandorojo/heroicons/24/solid";
import RestaurantCards from "./RestaurantCards";
import sanityClient from "@/sanity";

const FeaturedRow = ({ id, title, description }) => {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        sanityClient.fetch(
            `
                *[_type == "featured" && _id == $id] {
                    ...,
                    restaurants[]->{
                        ...,
                        dishes[]->,
                            type->{
                                name
                            }
                    },
                }[0]
            `, { id }).then((data) => {
                setRestaurants(data?.restaurants);
            })
    }, [])
    return (
        <View>
            <View className='flex-row items-center space-x-2 mx-4 mt-3 justify-between'>
                <Text className='text-xl font-bold'>{title}</Text>
                <ArrowRight color='#08CCBB' />
            </View>
            <Text className='mx-4 text-xs text-gray-400'>{description}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {restaurants?.map((rest) => (
                    <RestaurantCards
                        key={rest._id}
                        id={rest._id}
                        title={rest.name}
                        imgUrl={rest.image}
                        rating={rest.rating}
                        genre={rest.type?.name}
                        address={rest.address}
                        s_desc={rest.short_description}
                        dishes={rest.dishes}
                        long={rest.long}
                        la={rest.lat}
                    />
                    // console.log(rest.image)
                ))}
            </ScrollView>
        </View>
    );
};

export default FeaturedRow;
