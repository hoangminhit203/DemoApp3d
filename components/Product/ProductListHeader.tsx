
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
type Props = {
    title: string;
    resultCount: number;
};
export default function ProductListHeader({ title, resultCount }: Props) {
    // props: mình định nghĩa kiểu dữ liệu cho component header gồm 
    // title: string, resultCount: number
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            {/* Nút Back */}
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="#F54927" />
            </TouchableOpacity>

            {/* Tiêu đề Brand */}
            <Text style={styles.title}>{title}</Text>

            {/* Nút Search */}
            <TouchableOpacity onPress={() => console.log("Search clicked!")}>
                <Ionicons name="search" size={24} color="#333" />
            </TouchableOpacity>
        </View>
    )

}
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        marginTop: 40, // Thêm khoảng cách phía trên để tránh bị che bởi thanh trạng thái
        zIndex: 1, // Đảm bảo header hiển thị đúng vị trí
    },
    backButton: {
        padding: 4,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        color: "#000",
    },
});
