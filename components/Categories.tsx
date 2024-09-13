import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import client from "@/sanity";

const Categories = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        client.fetch(
            `
            *[_type == "category"] {
                ...,
                restaurants[]->{
                    ...,
                }
            }
            `).then((data) => {
                setCategory(data);
            })
    }, [])
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
        >
            {category.map((cat) => (
                <CategoryCard imgUri={cat.image} title={cat.name} key={cat._id} />
            ))}
            {/* <CategoryCard imgUri={'https://b.zmtcdn.com/data/dish_images/6cf85d53e8d060009e3ccf1e7281808a1596811491.jpeg'} title={'test 7'} /> */}
        </ScrollView>
    );
};

export default Categories;
