import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getAllBrands } from "../../data/products";

const brands = getAllBrands();

const brandLogos: { [key: string]: any } = {
    "Siemens": require("../../assets/lgsamsung.png"), // Tạm sử dụng Samsung logo cho demo
    "ABB": require("../../assets/lgweber.png"),
    "Schneider Electric": require("../../assets/lgwalmart.png"),
    "Delta": require("../../assets/lgyale.png"),
    "KEBA": require("../../assets/lgthecontainerstore.jpg"),
    "Wallbe": require("../../assets/lgsamsung.png"),
    "Phoenix Contact": require("../../assets/lgweber.png"),
    "Mennekes": require("../../assets/lgwalmart.png"),
    "Tesla": require("../../assets/lgyale.png"),
};

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

    const handleBrandPress = (brand: string) => {
        // Navigate với filter theo brand
        (navigation as any).navigate("SearchScreen", { brandFilter: brand });
    };

    return (
        <View style={styles.container}>
            <Animated.View style={{ flexDirection: "row", transform: [{ translateX }] }}>
                {[...brands, ...brands].map((brand, index) => (
                    <TouchableOpacity
                        key={`${brand}-${index}`}
                        onPress={() => handleBrandPress(brand)}
                        activeOpacity={0.7}
                        style={styles.brandContainer}
                    >
                        <Image
                            source={brandLogos[brand] || brandLogos["Siemens"]}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                        <Text style={styles.brandText}>{brand}</Text>
                    </TouchableOpacity>
                ))}
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        overflow: "hidden",
    },
    brandContainer: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    logo: {
        width: 60,
        height: 60,
        resizeMode: "contain",
    },
    brandText: {
        fontSize: 12,
        color: '#333',
        marginTop: 4,
        textAlign: 'center',
        fontWeight: '500',
    },
});
