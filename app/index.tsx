import ProductList from '@/components/Sibar/ProductList';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <ProductList />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },

});
