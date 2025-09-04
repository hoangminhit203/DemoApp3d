import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import SearchBar from "../Sibar/SearchBar";

export default function Logo() {
    // Component for the app logo and search bar
    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/images/react-logo.png")}
                style={styles.logo}
                resizeMode="contain"
            />
            {/* Thanh search component */}
            <SearchBar />

            <Text style={styles.text}>Logo Component</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    text: {
        color: 'white',
        fontSize: 16,
        marginBottom: 30,
    }
});
