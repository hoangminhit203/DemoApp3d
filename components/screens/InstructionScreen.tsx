import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ThreeScene from "../threeScene/ThreeScene"; // đường dẫn tới file bạn viết ThreeScene
import BackButton from "../ui/BackButton";
type InstructionScreenProps = {
    route: {
        params: {
            productId: string;
        };
    };
};

export default function InstructionScreen({ route }: InstructionScreenProps) {
    const { productId } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            {/* Header với back button và text cùng hàng */}
            <View style={styles.headerContainer}>
                <BackButton />
                <Text style={styles.header}>3D Instructions for {productId}</Text>
                <View style={styles.spacer} />
            </View>
            <View style={styles.canvasWrapper}>
                <ThreeScene />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    header: {
        flex: 1,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    spacer: {
        width: 28, // Cùng kích thước với icon back để cân bằng
    },
    canvasWrapper: {
        flex: 1,
        backgroundColor: "#111", // nền tối cho 3D
    },
});
