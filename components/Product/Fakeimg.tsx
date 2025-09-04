import React, { useMemo, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";


import type { ImageStyle, StyleProp } from "react-native";


interface FakeImageProps {
    seed?: string;
    size?: number;
    style?: StyleProp<ImageStyle>;
}


export default function FakeImage({ seed = "default", size = 56, style }: FakeImageProps) {
    const [error, setError] = useState(false);
    const uri = useMemo(
        () => `https://picsum.photos/seed/${encodeURIComponent(seed)}/${size}/${size}`,
        [seed, size]
    );


    if (error) {
        return (
            <View style={[styles.fallback, { width: size, height: size }, style]}>
                <Text style={{ fontWeight: "700" }}>IMG</Text>
            </View>
        );
    }


    return (
        <Image
            source={{ uri }}
            onError={() => setError(true)}
            style={[{ width: size, height: size, borderRadius: 8 }, style]}
        />
    );
}


const styles = StyleSheet.create({
    fallback: {
        borderRadius: 8,
        backgroundColor: "#E5E7EB",
        alignItems: "center",
        justifyContent: "center",
    },
});


