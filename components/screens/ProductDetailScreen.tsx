import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Product, productsData } from '../../data/products';
import FakeImage from '../Product/Fakeimg';
import Header from '../ui/Header';

export default function ProductDetailScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { id, title, seed } = route.params as { id: string; title: string; seed: string };
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        // Tìm sản phẩm theo ID
        const foundProduct = productsData.find(p => p.id === id);
        setProduct(foundProduct || null);
    }, [id]);

    if (!product) {
        return (
            <ScrollView style={styles.container}>
                <Header showBackButton={true} />
                <View style={styles.content}>
                    <Text style={styles.title}>Không tìm thấy sản phẩm</Text>
                </View>
            </ScrollView>
        );
    }

    // Format giá tiền VNĐ
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    };

    return (
        <ScrollView style={styles.container}>
            <Header showBackButton={true} />

            <View style={styles.content}>
                <View style={styles.imageContainer}>
                    <FakeImage seed={product.seed || 'default'} size={200} />
                </View>

                <Text style={styles.title}>{product.title}</Text>

                <View style={styles.priceContainer}>
                    <Text style={styles.price}>{formatPrice(product.price)}</Text>
                    <Text style={styles.brand}>Thương hiệu: {product.brand}</Text>
                </View>

                <View style={styles.detailsContainer}>
                    <Text style={styles.sectionTitle}>Mô tả sản phẩm</Text>
                    <Text style={styles.description}>
                        {product.description}
                    </Text>

                    <View style={styles.specContainer}>
                        <Text style={styles.sectionTitle}>Thông số kỹ thuật</Text>
                        <View style={styles.specRow}>
                            <Text style={styles.specLabel}>Danh mục:</Text>
                            <Text style={styles.specValue}>{product.category}</Text>
                        </View>
                        {product.power && (
                            <View style={styles.specRow}>
                                <Text style={styles.specLabel}>Công suất:</Text>
                                <Text style={styles.specValue}>{product.power}</Text>
                            </View>
                        )}
                        <View style={styles.specRow}>
                            <Text style={styles.specLabel}>Thương hiệu:</Text>
                            <Text style={styles.specValue}>{product.brand}</Text>
                        </View>
                        <View style={styles.specRow}>
                            <Text style={styles.specLabel}>Mã sản phẩm:</Text>
                            <Text style={styles.specValue}>{product.id}</Text>
                        </View>
                    </View>

                    {product.features && product.features.length > 0 && (
                        <View style={styles.featuresContainer}>
                            <Text style={styles.sectionTitle}>Tính năng nổi bật</Text>
                            {product.features.map((feature, index) => (
                                <View key={index} style={styles.featureRow}>
                                    <Text style={styles.featureBullet}>•</Text>
                                    <Text style={styles.featureText}>{feature}</Text>
                                </View>
                            ))}
                        </View>
                    )}

                    {product.children && product.children.length > 0 && (
                        <View style={styles.accessoriesContainer}>
                            <Text style={styles.sectionTitle}>Phụ kiện đi kèm</Text>
                            {product.children.map((child) => (
                                <View key={child.id} style={styles.accessoryRow}>
                                    <Text style={styles.accessoryTitle}>{child.title}</Text>
                                    <Text style={styles.accessoryPrice}>
                                        {formatPrice(child.price || 0)}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    )}
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
        color: '#0000',
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
    priceContainer: {
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
    price: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FF6600',
        marginBottom: 8,
    },
    brand: {
        fontSize: 16,
        color: '#666',
        fontWeight: '500',
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
    featuresContainer: {
        marginTop: 16,
    },
    featureRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 6,
    },
    featureBullet: {
        fontSize: 16,
        color: '#FF6600',
        marginRight: 8,
        marginTop: 2,
    },
    featureText: {
        fontSize: 15,
        color: '#555',
        flex: 1,
        lineHeight: 20,
    },
    accessoriesContainer: {
        marginTop: 16,
    },
    accessoryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    accessoryTitle: {
        fontSize: 14,
        color: '#555',
        flex: 1,
        marginRight: 10,
    },
    accessoryPrice: {
        fontSize: 14,
        color: '#FF6600',
        fontWeight: '600',
    },
});
