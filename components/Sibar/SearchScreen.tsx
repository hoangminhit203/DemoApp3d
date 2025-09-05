import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Product, filterProductsByBrand, searchProducts } from "../../data/products";
import ExpandableProductItem from "../Product/ExpandableProductItem";

export default function SearchScreen() {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Product[]>([]);
    const [isSearched, setIsSearched] = useState(false);
    const navigation = useNavigation();
    const route = useRoute();

    // Check if we have a brand filter from navigation params
    useEffect(() => {
        const params = route.params as { brandFilter?: string } | undefined;
        if (params?.brandFilter) {
            const brandProducts = filterProductsByBrand(params.brandFilter);
            setSearchResults(brandProducts);
            setIsSearched(true);
            setQuery(`Thương hiệu: ${params.brandFilter}`);
        }
    }, [route.params]);

    const handleSearch = () => {
        const results = searchProducts(query);
        setSearchResults(results);
        setIsSearched(true);

        if (results.length === 0 && query.trim()) {
            Alert.alert("Không tìm thấy", "Không có sản phẩm nào phù hợp với từ khóa tìm kiếm.");
        }
    };

    const handleProductPress = (item: Product) => {
        (navigation as any).navigate("ProductDetail", {
            id: item.id,
            title: item.title,
            seed: item.seed,
        });
    };

    const showAllProducts = () => {
        const allProducts = searchProducts('');
        setSearchResults(allProducts);
        setIsSearched(true);
        setQuery('');
    };

    return (
        <View style={styles.container}>
            {/* Ô nhập tìm kiếm */}
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Tìm kiếm sản phẩm (VD: Siemens, EV Charger, 22kW...)"
                    value={query}
                    onChangeText={setQuery}
                    autoFocus
                    onSubmitEditing={handleSearch}
                />
                <TouchableOpacity
                    style={styles.searchButton}
                    onPress={handleSearch}
                >
                    <Text style={styles.searchButtonText}>Tìm kiếm</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.showAllButton}
                onPress={showAllProducts}
            >
                <Text style={styles.buttonText}>Hiển thị tất cả sản phẩm</Text>
            </TouchableOpacity>

            {/* Kết quả tìm kiếm */}
            {isSearched && (
                <View style={styles.resultsContainer}>
                    <Text style={styles.resultsText}>
                        {searchResults.length} kết quả tìm kiếm
                        {query.trim() && ` cho "${query}"`}
                    </Text>

                    <FlatList
                        data={searchResults}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <ExpandableProductItem
                                title={item.title}
                                seed={item.seed}
                                children={item.children}
                                onPress={() => handleProductPress(item)}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            )}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f8f8f8",
    },
    searchContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        gap: 10,
    },
    input: {
        flex: 1,
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: "#fff",
        fontSize: 16,
    },
    searchButton: {
        backgroundColor: "#007AFF",
        paddingHorizontal: 20,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    showAllButton: {
        backgroundColor: "#FF6600",
        paddingVertical: 14,
        borderRadius: 25,
        alignItems: "center",
        marginBottom: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    resultsContainer: {
        flex: 1,
    },
    resultsText: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
        color: '#333',
    },
});