import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import BrandSearch from "../components/ui/BrandSearch";
import Logo from "../components/ui/LogoHome";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.menuButton} onPress={() => console.log("Menu clicked!")}>
                <Ionicons name="menu" size={28} color="#fff" />
            </TouchableOpacity>

            <Logo />
            <BrandSearch />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
        justifyContent: "center",
        alignItems: "center",
    },
    menuButton: {
        position: "absolute",
        top: 40,   // cách trên
        left: 20,  // cách trái
        zIndex: 10,
    },
});
