import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

type BackButtonProps = {
    onPress?: () => void;
};

export default function BackButton({ onPress }: BackButtonProps) {
    const navigation = useNavigation();

    const handlePress = () => {
        if (onPress) {
            onPress();
        } else {
            navigation.goBack();
        }
    };

    return (
        <TouchableOpacity
            style={styles.backButton}
            onPress={handlePress}
        >
            <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    backButton: {
        zIndex: 10,
    },
});
