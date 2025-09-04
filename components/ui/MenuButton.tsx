import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

type MenuButtonProps = {
    onPress?: () => void;
};

export default function MenuButton({ onPress }: MenuButtonProps) {
    const navigation = useNavigation();

    const handlePress = () => {
        if (onPress) {
            onPress();
        } else {
            navigation.dispatch(DrawerActions.openDrawer());
        }
    };

    return (
        <TouchableOpacity
            style={styles.menuButton}
            onPress={handlePress}
        >
            <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    menuButton: {
        zIndex: 10,
    },
});
