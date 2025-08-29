import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import FakeImage from "./Fakeimg";

type ProductItemProps = {
    seed: string;
    title: string;
    onPress?: () => void;
};

export default function ProductItem({ seed, title, onPress }: ProductItemProps) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <FakeImage seed={seed} size={40} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
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
    },
});