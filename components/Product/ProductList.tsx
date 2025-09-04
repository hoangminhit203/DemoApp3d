import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, View } from "react-native";
import ProductItem from "../Product/ProductItem";

const products = [
    {
        id: "1",
        title: "Siemens 8EM1310-5HF14-1GA2 - VersiCharge AC",
        seed: "siemens-charger-1",
    },
    {
        id: "2",
        title: "Siemens 8EM13900EG00 - VersiCharge AC Wall Mount",
        seed: "siemens-wallmount-2",
    },
    {
        id: "3",
        title: "Siemens Inhab Intelligent Habitat",
        seed: "siemens-habitat-3",
    },
    {
        id: "4",
        title: "ABB Terra AC Wallbox 22kW",
        seed: "abb-terra-4",
    },
    {
        id: "5",
        title: "Schneider Electric EVlink Pro AC",
        seed: "schneider-evlink-5",
    },
    {
        id: "6",
        title: "Delta AC Max 22kW Smart Charging Station",
        seed: "delta-acmax-6",
    },
    {
        id: "7",
        title: "KEBA KeContact P30 c-series",
        seed: "keba-kecontact-7",
    },
    {
        id: "8",
        title: "Wallbe Eco 2.0 22kW",
        seed: "wallbe-eco-8",
    },
    {
        id: "9",
        title: "Phoenix Contact AC Charging Controller",
        seed: "phoenix-controller-9",
    },
    {
        id: "10",
        title: "Mennekes AMTRON Xtra 22kW",
        seed: "mennekes-amtron-10",
    },
];

export default function ProductList() {
    const navigation = useNavigation();

    const handleProductPress = (item: typeof products[0]) => {
        (navigation as any).navigate("ProductDetail", {
            id: item.id,
            title: item.title,
            seed: item.seed
        });
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ProductItem
                        seed={item.seed}
                        title={item.title}
                        onPress={() => handleProductPress(item)}
                    />
                )}
            />
        </View>
    );
}
