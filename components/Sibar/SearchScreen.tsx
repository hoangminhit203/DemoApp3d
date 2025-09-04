import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SearchScreen() {
    const [query, setQuery] = useState('');
    return (
        <View style={styles.container}>
            {/* O nhap tim kiem */}
            <TextInput
                style={styles.input}
                placeholder="Search for a product"
                value={query}
                onChangeText={setQuery}
                autoFocus // tu mo ban phim
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => console.log("Search for:", query)}
            >
                <Text style={styles.buttonText}>Show all available products</Text>
            </TouchableOpacity>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f8f8f8",
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 20,
        backgroundColor: "#fff",
        fontSize: 16,
    },
    button: {
        backgroundColor: "#FF6600",
        paddingVertical: 14,
        borderRadius: 25,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});