import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
    title: string;
    showDropdown?: boolean;
    actionText?: string;
    onPressAction?: () => void;
};

export default function RowTitle({ title, showDropdown, actionText, onPressAction }: Props) {
    return (
        <View style={styles.row}>
            <View style={styles.left}>
                <Text style={styles.title}>{title}</Text>
                {showDropdown ? <Ionicons name="chevron-down" size={18} color="#444" /> : null}
            </View>

            {actionText ? (
                <TouchableOpacity onPress={onPressAction}>
                    <Text style={styles.action}>{actionText}</Text>
                </TouchableOpacity>
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 12,
    },
    left: { flexDirection: "row", alignItems: "center", gap: 6 },
    title: { fontSize: 22, fontWeight: "800", color: "#2b2b2b" },
    action: { color: "#FF6A00", fontWeight: "700" },
});
