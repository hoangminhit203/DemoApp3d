import FakeImage from '@/components/Sibar/Fakeimg';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProductDetailScreen() {
    const { id, title, seed } = useLocalSearchParams<{
        id: string;
        title: string;
        seed: string;
    }>();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => router.back()}
                >
                    <Text style={styles.backText}>← Quay lại</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <View style={styles.imageContainer}>
                    <FakeImage seed={seed || 'default'} size={200} />
                </View>

                <Text style={styles.title}>{title}</Text>

                <View style={styles.detailsContainer}>
                    <Text style={styles.sectionTitle}>Thông tin sản phẩm</Text>
                    <Text style={styles.description}>
                        Đây là mô tả chi tiết cho sản phẩm {title}.
                        Sản phẩm này có các tính năng hiện đại và phù hợp cho việc sạc xe điện.
                    </Text>

                    <View style={styles.specContainer}>
                        <Text style={styles.sectionTitle}>Thông số kỹ thuật</Text>
                        <View style={styles.specRow}>
                            <Text style={styles.specLabel}>Công suất:</Text>
                            <Text style={styles.specValue}>22kW</Text>
                        </View>
                        <View style={styles.specRow}>
                            <Text style={styles.specLabel}>Điện áp:</Text>
                            <Text style={styles.specValue}>400V</Text>
                        </View>
                        <View style={styles.specRow}>
                            <Text style={styles.specLabel}>Loại kết nối:</Text>
                            <Text style={styles.specValue}>Type 2</Text>
                        </View>
                        <View style={styles.specRow}>
                            <Text style={styles.specLabel}>Bảo hành:</Text>
                            <Text style={styles.specValue}>2 năm</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    header: {
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingHorizontal: 16,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    backButton: {
        padding: 8,
    },
    backText: {
        fontSize: 16,
        color: '#007AFF',
        fontWeight: '500',
    },
    content: {
        padding: 16,
    },
    imageContainer: {
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        marginBottom: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    detailsContainer: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    description: {
        fontSize: 16,
        color: '#666',
        lineHeight: 24,
        marginBottom: 20,
    },
    specContainer: {
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        paddingTop: 16,
    },
    specRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    specLabel: {
        fontSize: 16,
        color: '#666',
        flex: 1,
    },
    specValue: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
        flex: 1,
        textAlign: 'right',
    },
});
