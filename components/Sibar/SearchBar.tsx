import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function SearchBar() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.8}
            onPress={() => (navigation as any).navigate("SearchScreen")}
        >
            <Ionicons name="search" size={20} color="#666" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Search for a product"
                editable={false} // không cho nhập ở Home
                pointerEvents="none"
            />
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 25,
        paddingHorizontal: 12,
        marginVertical: 10,
        marginHorizontal: 20,
        height: 48,
        borderWidth: 1,
        borderColor: "#ddd",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: "#333",
    },
});