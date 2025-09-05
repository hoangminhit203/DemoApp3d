import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
    title: string;
    seed: string; // dùng seed để sinh ảnh
    children?: { id: string; title: string }[];
    onPress?: () => void;
};

export default function ExpandableProductItem({ title, seed, children, onPress }: Props) {
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
                <Image
                    source={{ uri: `https://picsum.photos/seed/${seed}/60/60` }}
                    style={styles.image}
                />

                {/* Tiêu đề */}
                <Text style={styles.title}>{title}</Text>

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
    title: {
        flex: 1,
        fontSize: 16,
        fontWeight: "500",
        color: "#333",
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
