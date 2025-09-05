import React, { useState } from "react";
import type { ImageStyle, StyleProp } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";

interface ImageDisplayProps {
    imageUrl?: string;
    size?: number;
    style?: StyleProp<ImageStyle>;
    fallbackText?: string;
}

export default function ImageDisplay({
    imageUrl,
    size = 56,
    style,
    fallbackText = "IMG"
}: ImageDisplayProps) {
    const [error, setError] = useState(false);

    if (!imageUrl || error) {
        return (
            <View style={[styles.fallback, { width: size, height: size }, style]}>
                <Text style={styles.fallbackText}>{fallbackText}</Text>
            </View>
        );
    }

    return (
        <Image
            source={{ uri: imageUrl }}
            style={[{ width: size, height: size }, style]}
            onError={() => setError(true)}
            resizeMode="cover"
        />
    );
}

const styles = StyleSheet.create({
    fallback: {
        backgroundColor: "#f0f0f0",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ddd",
    },
    fallbackText: {
        fontWeight: "700",
        color: "#666",
        fontSize: 12,
    },
});
