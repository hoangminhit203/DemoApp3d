import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
type Props = {
    icon: keyof typeof Ionicons.glyphMap;
    value: string | number;
    label: string;

}
export default function MetricCircle({ icon, value, label }: Props) {
    return (
        <View style={styles.wrap}>
            <View style={styles.circle}>
                <Ionicons name={icon} size={20} color="#777" />
                <Text style={styles.value}>{value}</Text>
            </View>
            <Text style={styles.label}>{label}</Text>
        </View>
    );
}








const SIZE = 90;

const styles = StyleSheet.create({
    wrap: { alignItems: "center", width: SIZE },
    circle: {
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE / 2,
        borderWidth: 2,
        borderColor: "#E0E0E0",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        backgroundColor: "#fff",
    },
    value: { fontSize: 18, fontWeight: "700", color: "#333" },
    label: { marginTop: 8, fontSize: 12, color: "#777", fontWeight: "600" },
});