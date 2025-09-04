import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import BackButton from "./BackButton";
import MenuButton from "./MenuButton";

type HeaderProps = {
    showMenuButton?: boolean;
    showBackButton?: boolean;
    style?: ViewStyle;
    onBackPress?: () => void;
    onMenuPress?: () => void;
};

export default function Header({
    showMenuButton = false,
    showBackButton = false,
    style,
    onBackPress,
    onMenuPress,
}: HeaderProps) {
    return (
        <View style={[styles.header, style]}>
            {showMenuButton && <MenuButton onPress={onMenuPress} />}
            {showBackButton && <BackButton onPress={onBackPress} />}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        paddingTop: 40,
        paddingHorizontal: 20,
        zIndex: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
