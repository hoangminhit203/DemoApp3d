import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import MyStuffScreen from "../../components/screens/MyStyffScreen";
import NotificationsScreen from "../../components/screens/NotificationsScreen";
import HomeScreen from "../screens/HomeScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false, // ẩn cái header mặc định
                drawerType: "front", // kiểu drawer (slide từ trái qua)
                drawerStyle: {
                    backgroundColor: "#fff", // màu nền
                    width: 250, // độ rộng
                },
            }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="My Stuff" component={MyStuffScreen} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator>
    );
}
