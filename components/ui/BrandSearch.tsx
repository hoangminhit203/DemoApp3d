import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import {
    Animated,
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { getBrands3D } from "../../data/products3D";

const brands = getBrands3D();

const brandLogos: { [key: string]: any } = {
    Siemens2: require("../../assets/brands/lgsamsung.png"),
    Siemens: require("../../assets/brands/lgsamsung.png"),
    ABB: require("../../assets/brands/lgsamsung.png"),
    "Schneider Electric": require("../../assets/brands/lgsamsung.png"),
    Delta: require("../../assets/brands/lgsamsung.png"),
    KEBA: require("../../assets/brands/lgsamsung.png"),
    Wallbe: require("../../assets/brands/lgsamsung.png"),
    "Phoenix Contact": require("../../assets/brands/lgsamsung.png"),
    Mennekes: require("../../assets/brands/lgsamsung.png"),
    Tesla: require("../../assets/brands/lgsamsung.png"),
};

const { width } = Dimensions.get("window");

export default function BrandSearch() {
    const translateX = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(translateX, {
                    toValue: -width, // chạy ngang sang trái
                    duration: 8000,
                    useNativeDriver: true,
                }),
                Animated.timing(translateX, {
                    toValue: 0, // reset về 0
                    duration: 0,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [translateX]);

    const handleBrandPress = (brand: string) => {
        (navigation as any).navigate("SearchScreen", { brandFilter: brand });
    };

    return (
        <View style={styles.container}>
            <Animated.View
                style={{ flexDirection: "row", transform: [{ translateX }] }}
            >
                {[...brands, ...brands].map((brand, index) => (
                    <TouchableOpacity
                        key={`${brand}-${index}`}
                        onPress={() => handleBrandPress(brand)}
                        activeOpacity={0.7}
                        style={styles.brandContainer}
                    >
                        <Image
                            source={brandLogos[brand] || require("../../assets/brands/lgsamsung.png")}
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
        alignItems: "center",
        marginHorizontal: 10,
    },
    logo: {
        width: 60,
        height: 60,
        resizeMode: "contain",
    },
    brandText: {
        fontSize: 12,
        color: "#333",
        marginTop: 4,
        textAlign: "center",
        fontWeight: "500",
    },
});
