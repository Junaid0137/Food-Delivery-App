import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "@/sanity";
import { Minus, MinusCircle, Plus, PlusCircle } from "@nandorojo/heroicons/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsById } from "@/features/backetSlice";
const DishRow = ({ id, name, image, price, s_desc }) => {
    const [isPressed, setIsPressed] = useState();
    const dispatch = useDispatch();
    const addItemToBasket = () => {
        dispatch(addToBasket({ id, name, image, price, s_desc }))
    }
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }));
    }
    const items = useSelector((state) => selectBasketItemsById(state, id));
    return (
        <>
            <TouchableOpacity key={id} onPress={() => setIsPressed(!isPressed)}>
                <View className='bg-white mb-2 flex-row justify-between rounded-xl mx-2'>
                    <View className='mx-4 my-4 flex-1 pr-1'>
                        <Text className='text-xl font-semibold mb-2'>{name}</Text>
                        <Text className='text-xs text-ellipsis mb-2 text-gray-500'>{s_desc}</Text>
                        <Text>
                            ₹ {price}.00
                        </Text>
                        {isPressed && (
                            <View className='bg-white mt-2'>
                                <View className='flex-row items-center space-x-2'>
                                    <TouchableOpacity onPress={removeItemFromBasket}>
                                        <MinusCircle width={40} height={40} color={items.length > 0 ? "#08CCBB" : "grey"} />
                                    </TouchableOpacity>
                                    <Text>{items.length}</Text>
                                    <TouchableOpacity onPress={addItemToBasket}>
                                        <PlusCircle width={40} height={40} color='#08CCBB' />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    </View>
                    <View className='mr-4 mt-4'>
                        <Image height={70} className='rounded-lg' width={80} source={{ uri: urlFor(image).url() }} />
                    </View>
                </View>
            </TouchableOpacity>
        </>
    );
};

export default DishRow;
