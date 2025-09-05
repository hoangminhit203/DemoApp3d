import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Product, productsData } from "../../data/products";
import ExpandableProductItem from "../Product/ExpandableProductItem";
import ProductListHeader from "./ProductListHeader";

export default function ProductList() {
    const navigation = useNavigation();
    const [products, setProducts] = useState<Product[]>(productsData);

    const handleProductPress = (item: Product) => {
        (navigation as any).navigate("ProductDetail", {
            id: item.id,
            title: item.title,
            seed: item.seed,
        });
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
            {/* Header */}
            <ProductListHeader title="All Products" resultCount={products.length} />

            {/* Result text */}
            <Text style={{ padding: 12, fontSize: 14, color: "#666" }}>
                {products.length} Search Results
            </Text>

            {/* List */}
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ExpandableProductItem
                        title={item.title}
                        seed={item.seed}
                        children={item.children}
                        onPress={() => handleProductPress(item)}
                    />
                )}
            />
        </View>
    );
}