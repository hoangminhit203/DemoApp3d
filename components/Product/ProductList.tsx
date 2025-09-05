import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Product3D, products3D } from "../../data/proucts3D";
import ExpandableProductItem from "../Product/ExpandableProductItem";
import ProductListHeader from "./ProductListHeader";

export default function ProductList() {

    const navigation = useNavigation();
    const [products, setProducts] = useState<Product3D[]>(products3D);
    const handleProductPress = (item: Product3D) => {
        (navigation as any).navigate("ProductDetail", {
            id: item.id,
            title: item.title,
            name: item.name,
        });
    };


    useEffect(() => {
        console.log("Products loaded on mount:", products);
    }, []);

    // log khi products thay đổi
    useEffect(() => {
        console.log("Products updated:", products);
    }, [products]);


    return (
        <View style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
            {/* Header */}
            <ProductListHeader title="All Products" resultCount={products.length} />

            {/* Result text */}
            {/* <Text style={{ padding: 12, fontSize: 14, color: "#666" }}>
                {products.length} Search Results    qưewqe  q
            </Text> */}

            {/* List */}
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ExpandableProductItem
                        title={item.title}
                        imageUrl={item.image}
                        brand={item.brand}
                        category={item.category}
                        price={item.price}
                        onPress={() => handleProductPress(item)}
                    />
                )}

            />
        </View>
    );
}