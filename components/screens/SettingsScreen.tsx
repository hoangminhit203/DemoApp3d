import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../ui/Header";

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Header showMenuButton={true} />
            <View style={styles.content}>
                <Text style={styles.title}>Cài đặt</Text>
                <Text style={styles.text}>Tùy chỉnh cài đặt ứng dụng của bạn tại đây.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        marginTop: 60, // Add space for header
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#000",
    },
    text: {
        fontSize: 16,
        color: "#555",
    },
});