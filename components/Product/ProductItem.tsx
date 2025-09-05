import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import ImageDisplay from "./ImageDisplay";

type ProductItemProps = {
    imageUrl?: string;
    title: string;
    brand?: string;
    price?: number;
    onPress?: () => void;
};

export default function ProductItem({ imageUrl, title, brand, price, onPress }: ProductItemProps) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <ImageDisplay imageUrl={imageUrl} size={40} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            {brand && <Text style={styles.brand}>{brand}</Text>}
            {price && <Text style={styles.price}>{price.toLocaleString('vi-VN')} VNĐ</Text>}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 12,
        marginVertical: 6,
        marginHorizontal: 12,
        borderRadius: 8,
        elevation: 2, // shadow Android
        shadowColor: "#000", // shadow iOS
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    image: {
        marginRight: 12,
    },
    title: {
        fontSize: 14,
        fontWeight: "500",
        flexShrink: 1,
        color: "#333",
    },
    brand: {
        fontSize: 12,
        color: "#666",
        marginTop: 2,
    },
    price: {
        fontSize: 12,
        fontWeight: "600",
        color: "#007AFF",
        marginTop: 2,
    },
});