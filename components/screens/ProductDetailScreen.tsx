import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import React, { useEffect, useMemo, useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Product, productsData } from "../../data/products";
import FakeImage from "../Product/Fakeimg";
import MetricCircle from "../ProductDetail/MetricCircle";
import RowTitle from "../ProductDetail/RowTitle";
import ThumbRow, { ThumbItem } from "../ProductDetail/ThumbRow";
import Header from "../ui/Header";
import LayeredCard from "../ui/LayeredCard";

export default function ProductDetailScreen() {
    const route = useRoute();
    const { id } = route.params as { id: string };

    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const found = productsData.find((p) => p.id === id) || null;
        setProduct(found);
    }, [id]);

    // fallback data
    const ui = useMemo(() => {
        const tools: ThumbItem[] = [
            { id: "t1", seed: "tool-flat" },
            { id: "t2", seed: "tool-phillips" },
            { id: "t3", seed: "tool-stripper" },
            { id: "t4", seed: "tool-meter" },
        ];
        const parts: ThumbItem[] = [
            { id: "p1", seed: "part-1" },
            { id: "p2", seed: "part-2" },
            { id: "p3", seed: "part-3" },
        ];
        return {
            people: 1,
            avgTimeMin: undefined,
            steps: product?.children?.length ? product.children.length + 10 : 13,
            tools,
            parts,
        };
    }, [product]);

    if (!product) {
        return (
            <SafeAreaView style={styles.container}>
                <Header showBackButton />
                <View style={{ padding: 16, marginTop: 60 }}>
                    <Text style={styles.title}>Product not found</Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* Thanh tiêu đề tái dùng */}
            <Header showBackButton />

            <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* Top product info */}
                <View style={styles.top}>
                    <View style={styles.leading}>
                        <FakeImage seed={product.seed} size={80} />
                        <Text style={styles.productTitle} numberOfLines={2}>
                            {product.title}
                        </Text>
                    </View>

                    <Text style={styles.brand}>{product.brand}</Text>

                    <TouchableOpacity style={styles.shareBtn} onPress={() => { }}>
                        <Ionicons name="share-outline" size={20} color="#111" />
                    </TouchableOpacity>
                </View>

                {/* Thẻ Layered */}
                <LayeredCard>
                    <RowTitle title="Installation" showDropdown />

                    <View style={styles.metricsRow}>
                        <MetricCircle icon="person-outline" value={ui.people} label="PERSON" />
                        <MetricCircle icon="time-outline" value={ui.avgTimeMin ? `${ui.avgTimeMin}m` : "N/A"} label="AVG TIME" />
                        <MetricCircle icon="list-outline" value={ui.steps} label="STEPS" />
                    </View>

                    <View style={styles.divider} />

                    <RowTitle title="TOOLS" actionText="View Info" onPressAction={() => { }} />
                    <ThumbRow items={ui.tools} />

                    <View style={[styles.divider, { marginTop: 18 }]} />

                    <RowTitle title="PARTS LIST" actionText="View Info" onPressAction={() => { }} />
                    <ThumbRow items={ui.parts} />

                    <TouchableOpacity style={styles.startBtn} onPress={() => { }}>
                        <Text style={styles.startText}>Start</Text>
                    </TouchableOpacity>
                </LayeredCard>
            </ScrollView>

            {/* Bottom tab */}
            <View style={styles.bottomTabs}>
                <View style={styles.tabItem}>
                    <Ionicons name="cube-outline" size={20} color="#FF6A00" />
                    <Text style={[styles.tabLabel, styles.tabActive]}>3D Instructions</Text>
                </View>
                <View style={styles.tabItem}>
                    <Ionicons name="document-text-outline" size={20} color="#999" />
                    <Text style={styles.tabLabel}>Receipts & more</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#F4F5F6" },
    scrollContent: { flex: 1, paddingBottom: 20 },

    top: {
        paddingHorizontal: 16,
        marginTop: 16,
        marginBottom: 16,
    },
    leading: { flexDirection: "row", alignItems: "center", gap: 12 },
    productTitle: { flex: 1, fontSize: 22, fontWeight: "800", color: "#1d1d1d" },
    brand: { position: "absolute", right: 16, top: 0, color: "#19A5A6", fontWeight: "900", letterSpacing: 1 },
    shareBtn: {
        position: "absolute",
        right: 16,
        top: 5,
        width: 38,
        height: 38,
        borderRadius: 19,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        elevation: 2,
    },

    metricsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8,
        marginBottom: 8,
    },
    divider: { height: 1, backgroundColor: "#eee", marginVertical: 16 },
    startBtn: {
        marginTop: 22,
        backgroundColor: "#FF6A00",
        paddingVertical: 16,
        borderRadius: 28,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.12,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 6 },
        elevation: 3,
    },
    startText: { color: "#fff", fontWeight: "800", fontSize: 18, letterSpacing: 0.4 },

    bottomTabs: {
        height: 64,
        borderTopWidth: 3,
        borderTopColor: "#19A5A6",
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    tabItem: { alignItems: "center" },
    tabLabel: { marginTop: 4, fontSize: 12, color: "#999", fontWeight: "700" },
    tabActive: { color: "#19A5A6" },
    title: { fontSize: 24, fontWeight: "bold", color: "#333" },
});
