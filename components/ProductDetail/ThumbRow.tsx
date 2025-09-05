import React from "react";
import { StyleSheet, View } from "react-native";
import FakeImage from "../Product/Fakeimg";

export type ThumbItem = { id: string; seed: string };

type Props = { items: ThumbItem[]; size?: number };

export default function ThumbRow({ items, size = 66 }: Props) {
    return (
        <View style={styles.row}>
            {items.map((it) => (
                <View key={it.id} style={styles.item}>
                    <FakeImage seed={it.seed} size={size} />
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    row: { flexDirection: "row", alignItems: "center", gap: 18 },
    item: { borderRadius: 12, overflow: "hidden" },
});
