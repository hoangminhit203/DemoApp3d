import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import ProductList from "../components/Product/ProductList";
import SearchScreen from "../components/Sibar/SearchScreen";
import DrawerNavigator from "../components/navigation/DrawerNavigator";
import ProductDetailScreen from "../components/screens/ProductDetailScreen";

const Stack = createStackNavigator();
// Đây là để chuyển trang xài Navigation 
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name="Main" component={DrawerNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="ProductList" component={ProductList} options={{ headerShown: false }} />
                <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SearchScreen" component={SearchScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
