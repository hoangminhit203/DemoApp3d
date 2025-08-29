import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFound() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Page Not Found</Text>
            <Text style={styles.message}>This page could not be found.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        color: '#666',
    },
});