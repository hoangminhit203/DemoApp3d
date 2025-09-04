import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, Image, StyleSheet, TouchableOpacity, View } from "react-native";

const logos = [
    require("../../assets/lgweber.png"),
    require("../../assets/lgwalmart.png"),
    require("../../assets/lgsamsung.png"),
    require("../../assets/lgyale.png"),
    require("../../assets/lgthecontainerstore.jpg"),
];

const { width } = Dimensions.get("window");

export default function BrandSearch() {
    const translateX = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(translateX, {
                    toValue: -width,     // chạy ngang sang trái
                    duration: 8000,      // thời gian chạy
                    useNativeDriver: true,
                }),
                Animated.timing(translateX, {
                    toValue: 0,          // reset về 0
                    duration: 0,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [translateX]);

    return (
        <View style={styles.container}>
            <Animated.View style={{ flexDirection: "row", transform: [{ translateX }] }}>
                {[...logos, ...logos].map((logo, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => {
                            console.log("Navigating to ProductList");
                            (navigation as any).navigate("ProductList");
                        }}
                        activeOpacity={0.7}
                    >
                        <Image source={logo} style={styles.logo} resizeMode="contain" />
                    </TouchableOpacity>
                ))}
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        overflow: "hidden",
    },
    logo: {
        width: 100,
        height: 80,
        marginHorizontal: 10,
        resizeMode: "contain",
    },
});
