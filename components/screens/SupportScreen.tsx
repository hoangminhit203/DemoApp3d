import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../ui/Header";

export default function SupportScreen() {
    return (
        <View style={styles.container}>
            <Header showMenuButton={true} />
            <View style={styles.content}>
                <Text style={styles.title}>Hỗ trợ</Text>
                <Text style={styles.text}>Liên hệ với chúng tôi nếu bạn cần hỗ trợ.</Text>
                <Text style={styles.contactInfo}>Email: support@demo.com</Text>
                <Text style={styles.contactInfo}>Điện thoại: 1900 1234</Text>
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
        marginBottom: 20,
        textAlign: "center",
    },
    contactInfo: {
        fontSize: 16,
        color: "#007AFF",
        marginBottom: 10,
    },
});