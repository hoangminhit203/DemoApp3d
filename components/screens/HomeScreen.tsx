import React from "react";
import { StyleSheet, View } from "react-native";
import BrandSearch from "../ui/BrandSearch";
import Header from "../ui/Header";
import Logo from "../ui/LogoHome";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Header showMenuButton={true} />
            <Logo />
            <BrandSearch />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // chiếm toàn màn hình
        backgroundColor: "#000", // nền đen
        justifyContent: "center", // canh giữa theo chiều dọc
        alignItems: "center", // canh giữa theo chiều ngang
    },
});
