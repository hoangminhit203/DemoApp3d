export interface Product {
    id: string;
    title: string;
    seed: string;
    brand: string;
    category: string;
    power?: string;
    price: number;
    description: string;
    features: string[];
    children?: Product[];
    instructions?: {
        people?: number;
        avgTimeMin?: number | null;
        steps?: number;
        tools?: Thumb[];
        parts?: Thumb[];
    };
}

export const productsData: Product[] = [
    {
        id: "1",
        title: "Siemens 8EM1310-5HF14-1GA2 - VersiCharge AC",
        seed: "siemens-charger-1",
        brand: "Siemens",
        category: "EV Charger",
        power: "22kW",
        price: 1250000,
        description: "Trạm sạc xe điện AC thông minh với khả năng kết nối wifi và quản lý từ xa",
        features: ["Wifi kết nối", "Quản lý từ xa", "Màn hình LCD", "Bảo vệ quá tải"],
        children: [
            {
                id: "1-1",
                title: "INHEM1216 - Inhab Energy Monitor",
                seed: "inhab-monitor-1-1",
                brand: "Siemens",
                category: "Monitoring",
                price: 350000,
                description: "Thiết bị giám sát năng lượng thông minh",
                features: ["Theo dõi thời gian thực", "Báo cáo chi tiết"]
            },
            {
                id: "1-2",
                title: "LM1160 - Inhab Load Manager",
                seed: "inhab-load-1-2",
                brand: "Siemens",
                category: "Load Management",
                price: 280000,
                description: "Bộ quản lý tải thông minh",
                features: ["Cân bằng tải", "Tối ưu hóa năng lượng"]
            }
        ]
    },
    {
        id: "2",
        title: "Siemens 8EM13900EG00 - VersiCharge AC Wall Mount",
        seed: "siemens-wallmount-2",
        brand: "Siemens",
        category: "EV Charger",
        power: "11kW",
        price: 950000,
        description: "Trạm sạc gắn tường compact và hiệu quả cho sử dụng gia đình",
        features: ["Thiết kế compact", "Dễ lắp đặt", "Chống thấm nước IP54", "LED báo trạng thái"]
    },
    {
        id: "3",
        title: "ABB Terra AC Wallbox 22kW",
        seed: "abb-terra-3",
        brand: "ABB",
        category: "EV Charger",
        power: "22kW",
        price: 1480000,
        description: "Trạm sạc ABB Terra với công nghệ tiên tiến và độ bền cao",
        features: ["Màn hình cảm ứng", "Thanh toán thẻ", "Kết nối 4G", "Bảo hành 3 năm"]
    },
    {
        id: "4",
        title: "Schneider Electric EVlink Pro AC",
        seed: "schneider-evlink-4",
        brand: "Schneider Electric",
        category: "EV Charger",
        power: "22kW",
        price: 1320000,
        description: "Giải pháp sạc thương mại với khả năng quản lý nhiều trạm sạc",
        features: ["Quản lý đám mây", "Báo cáo sử dụng", "Thanh toán RFID", "Cập nhật OTA"]
    },
    {
        id: "5",
        title: "Delta AC Max 22kW Smart Charging Station",
        seed: "delta-acmax-5",
        brand: "Delta",
        category: "EV Charger",
        power: "22kW",
        price: 1180000,
        description: "Trạm sạc thông minh với AI tối ưu hóa quá trình sạc",
        features: ["AI tối ưu sạc", "Ứng dụng mobile", "Eco mode", "Fast charging"]
    },
    {
        id: "6",
        title: "KEBA KeContact P30 c-series",
        seed: "keba-kecontact-6",
        brand: "KEBA",
        category: "EV Charger",
        power: "22kW",
        price: 1090000,
        description: "Trạm sạc Austria với chất lượng Châu Âu và tính năng bảo mật cao",
        features: ["Bảo mật cao", "Thiết kế modular", "Ethernet kết nối", "Màn hình OLED"]
    },
    {
        id: "7",
        title: "Wallbe Eco 2.0 22kW",
        seed: "wallbe-eco-7",
        brand: "Wallbe",
        category: "EV Charger",
        power: "22kW",
        price: 890000,
        description: "Trạm sạc thân thiện môi trường với vật liệu tái chế",
        features: ["Vật liệu tái chế", "Tiết kiệm năng lượng", "Compact design", "LED indicator"]
    },
    {
        id: "8",
        title: "Phoenix Contact AC Charging Controller",
        seed: "phoenix-controller-8",
        brand: "Phoenix Contact",
        category: "Charging Controller",
        power: "32A",
        price: 750000,
        description: "Bộ điều khiển sạc công nghiệp với độ tin cậy cao",
        features: ["Chuẩn công nghiệp", "Giao tiếp Modbus", "DIN rail mount", "Chống nhiễu"]
    },
    {
        id: "9",
        title: "Mennekes AMTRON Xtra 22kW",
        seed: "mennekes-amtron-9",
        brand: "Mennekes",
        category: "EV Charger",
        power: "22kW",
        price: 1150000,
        description: "Trạm sạc Đức với connector chuẩn Type 2 và tính năng thông minh",
        features: ["Type 2 connector", "Smart features", "German quality", "Weather resistant"]
    },
    {
        id: "10",
        title: "Tesla Wall Connector Gen 3",
        seed: "tesla-wall-10",
        brand: "Tesla",
        category: "EV Charger",
        power: "22kW",
        price: 1380000,
        description: "Trạm sạc Tesla thế hệ 3 với tốc độ sạc nhanh và tích hợp WiFi",
        features: ["Tesla integration", "WiFi built-in", "Over-the-air updates", "Sleek design"]
    }
];

// Hàm tìm kiếm sản phẩm
export const searchProducts = (query: string): Product[] => {
    if (!query.trim()) {
        return productsData;
    }

    const searchTerm = query.toLowerCase();
    return productsData.filter(product =>
        product.title.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.features.some(feature => feature.toLowerCase().includes(searchTerm))
    );
};

// Hàm lọc sản phẩm theo thương hiệu
export const filterProductsByBrand = (brand: string): Product[] => {
    return productsData.filter(product =>
        product.brand.toLowerCase() === brand.toLowerCase()
    );
};

// Hàm lọc sản phẩm theo danh mục
export const filterProductsByCategory = (category: string): Product[] => {
    return productsData.filter(product =>
        product.category.toLowerCase() === category.toLowerCase()
    );
};

// Lấy tất cả thương hiệu
export const getAllBrands = (): string[] => {
    const brands = productsData.map(product => product.brand);
    return [...new Set(brands)];
};

// Lấy tất cả danh mục
export const getAllCategories = (): string[] => {
    const categories = productsData.map(product => product.category);
    return [...new Set(categories)];
};
// data/products.ts
export type Thumb = { id: string; seed: string; name?: string };