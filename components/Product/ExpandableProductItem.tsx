import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ImageDisplay from "./ImageDisplay";

type Props = {
    title: string;
    imageUrl?: string;
    brand?: string;
    category?: string;
    price?: number;
    children?: { id: string; title: string }[];
    onPress?: () => void;
};

export default function ExpandableProductItem({
    title,
    imageUrl,
    brand,
    category,
    price,
    children,
    onPress
}: Props) {
    const [expanded, setExpanded] = useState(false);

    const handlePress = () => {
        if (children && children.length > 0) {
            setExpanded(!expanded);
        } else if (onPress) {
            onPress();
        }
    };

    return (
        <View style={styles.container}>
            {/* Item chính */}
            <TouchableOpacity style={styles.item} onPress={handlePress}>
                {/* Ảnh sản phẩm */}
                <ImageDisplay
                    imageUrl={imageUrl}
                    size={60}
                    style={styles.image}
                />

                {/* Thông tin sản phẩm */}
                <View style={styles.productInfo}>
                    <Text style={styles.title}>{title}</Text>
                    {brand && <Text style={styles.brand}>{brand}</Text>}
                    {category && <Text style={styles.category}>{category}</Text>}
                    {price && <Text style={styles.price}>{price.toLocaleString('vi-VN')} VNĐ</Text>}
                </View>

                {/* Icon expand/collapse */}
                {children && (
                    <Ionicons
                        name={expanded ? "chevron-up" : "chevron-down"}
                        size={20}
                        color="#333"
                    />
                )}
            </TouchableOpacity>

            {/* Children (expand) */}
            {expanded && children && (
                <View style={styles.childrenContainer}>
                    {children.map((child) => (
                        <TouchableOpacity
                            key={child.id}
                            style={styles.childItem}
                            onPress={onPress}
                        >
                            <Text style={styles.childText}>{child.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 12,
        marginVertical: 6,
        backgroundColor: "#fff",
        borderRadius: 12,
        elevation: 2,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 8,
        marginRight: 12,
    },
    productInfo: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
        color: "#333",
        marginBottom: 2,
    },
    brand: {
        fontSize: 12,
        color: "#666",
        marginBottom: 1,
    },
    category: {
        fontSize: 12,
        color: "#888",
        marginBottom: 2,
    },
    price: {
        fontSize: 14,
        fontWeight: "600",
        color: "#007AFF",
    },
    childrenContainer: {
        paddingLeft: 70, // lệch so với ảnh
        paddingBottom: 8,
    },
    childItem: {
        paddingVertical: 6,
    },
    childText: {
        fontSize: 14,
        color: "#666",
    },
});
