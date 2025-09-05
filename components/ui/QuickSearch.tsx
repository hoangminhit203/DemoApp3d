import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface QuickSearchProps {
    onSearch: (term: string) => void;
}

const popularSearchTerms = [
    '22kW',
    'Siemens',
    'ABB',
    'Tesla',
    'EV Charger',
    'AC Charger',
    'Wallbox',
    'Smart Charging',
    'Type 2',
    'WiFi',
];

export default function QuickSearch({ onSearch }: QuickSearchProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tìm kiếm phổ biến:</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.scrollView}
            >
                {popularSearchTerms.map((term, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.chip}
                        onPress={() => onSearch(term)}
                    >
                        <Text style={styles.chipText}>{term}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    scrollView: {
        flexDirection: 'row',
    },
    chip: {
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        marginRight: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    chipText: {
        fontSize: 14,
        color: '#555',
        fontWeight: '500',
    },
});
