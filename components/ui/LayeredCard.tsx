import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

export default function LayeredCard({ children }: PropsWithChildren) {
    return (
        <View style={styles.wrap}>
            {/* Hai 'la' phía sau để tạo cảm giác xếp lớp */}
            <View pointerEvents="none" style={[styles.shadowCard, styles.card2]}></View>
            <View pointerEvents="none" style={[styles.shadowCard, styles.card3]}></View>
            {/* thẻ chính */}
            <View style={styles.mainCard}>{children}</View>
        </View>
    )
}

const RADIUS = 14;
const styles = StyleSheet.create({
    wrap: {
        marginHorizontal: 16,
        marginTop: 8,
        marginBottom: 24,
    },
    mainCard: {
        backgroundColor: "#fff",
        borderRadius: RADIUS,
        padding: 16,
        // shadow iOS
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        // elevation Android
        elevation: 3,
    },
    shadowCard: {
        position: "absolute",
        left: 8,
        right: 8,
        height: "100%",
        borderRadius: RADIUS,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 2,
    },
    card2: { top: 10 },
    card3: { top: 20 },
});