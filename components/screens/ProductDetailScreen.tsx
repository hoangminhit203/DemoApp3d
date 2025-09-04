import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FakeImage from '../Product/Fakeimg';
import Header from '../ui/Header';

export default function ProductDetailScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { id, title, seed } = route.params as { id: string; title: string; seed: string };

    return (
        <ScrollView style={styles.container}>
            <Header showBackButton={true} />

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
    content: {
        padding: 16,
        marginTop: 60, // Add space for header
    },
    backText: {
        fontSize: 16,
        color: '#007AFF',
        fontWeight: '500',
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
        marginBottom: 16,
        color: '#333',
    },
    detailsContainer: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
    },
    description: {
        fontSize: 15,
        lineHeight: 22,
        color: '#555',
        marginBottom: 16,
    },
    specContainer: {
        marginTop: 16,
    },
    specRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    specLabel: {
        fontSize: 15,
        color: '#555',
        fontWeight: '500',
    },
    specValue: {
        fontSize: 15,
        color: '#333',
    },
});
