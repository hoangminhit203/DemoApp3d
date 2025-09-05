export interface Product3D {
    id: string;
    name: string;
    title: string;
    brand: string;
    category: string;
    power?: string;
    price: number;
    description: string;
    features: string[];
    image: string;
    // url: string; // commented as requested
}

export const products3D: Product3D[] = [
    {
        id: "1",
        name: "RoboCraft",
        title: "RoboCraft - Advanced Robotics Kit",
        brand: "TechCorp",
        category: "Robotics",
        power: "12V",
        price: 299000,
        description: "Advanced robotics construction kit with AI capabilities and remote control features",
        features: ["AI Integration", "Remote Control", "Modular Design", "Educational Kit"],
        // url: "https://portal.inservio.app/product/Configurations/6891c4c45209e6769d929654",
        image: "https://storage.googleapis.com/ploggvn-media/model_3d_a99b00e97e/model_3d_a99b00e97e.png"
    },
    {
        id: "2",
        name: "Fermo",
        title: "Fermo - Industrial Fastening System",
        brand: "IndusCorp",
        category: "Industrial",
        price: 189000,
        description: "High-strength industrial fastening system for heavy-duty applications",
        features: ["High Strength", "Corrosion Resistant", "Easy Installation", "Durable"],
        // url: "https://portal.inservio.app/product/Configurations/65e5ee38cecf0e1e89bb76a6",
        image: "https://storage.googleapis.com/inservio/image_inservio/poster_fermo.webp"
    },
    {
        id: "3",
        name: "Boat Fisher",
        title: "Boat Fisher - Professional Fishing Vessel",
        brand: "AquaTech",
        category: "Marine",
        power: "250HP",
        price: 1250000,
        description: "Professional fishing boat with advanced navigation and fish finding systems",
        features: ["GPS Navigation", "Fish Finder", "Storage Compartments", "Weather Resistant"],
        // url: "https://portal.inservio.app/product/Configurations/65e61c82febf489dbec9c206",
        image: "https://storage.googleapis.com/inservio/image_inservio/boat_poster1.webp"
    },
    {
        id: "4",
        name: "Boat Arc",
        title: "Boat Arc - Luxury Yacht",
        brand: "AquaTech",
        category: "Marine",
        power: "350HP",
        price: 2450000,
        description: "Luxury yacht with premium amenities and advanced propulsion system",
        features: ["Luxury Interior", "Advanced Propulsion", "Entertainment System", "Climate Control"],
        // url: "https://portal.inservio.app/product/Configurations/65e6248ad949b9cd4e975235",
        image: "https://storage.googleapis.com/inservio/image_inservio/poster_arc.webp"
    },
    {
        id: "5",
        name: "Boat",
        title: "Boat - Standard Marine Vessel",
        brand: "AquaTech",
        category: "Marine",
        power: "150HP",
        price: 890000,
        description: "Standard marine vessel for recreational and commercial use",
        features: ["Reliable Engine", "Spacious Deck", "Safety Equipment", "Fuel Efficient"],
        // url: "https://portal.inservio.app/product/Configurations/65e624bfd949b9cd4e975238",
        image: "https://storage.googleapis.com/inservio/image_inservio/poster_boat.webp"
    },
    {
        id: "6",
        name: "Cabinet",
        title: "Cabinet - Storage Solution",
        brand: "HomeTech",
        category: "Furniture",
        price: 125000,
        description: "Modern storage cabinet with adjustable shelves and premium finish",
        features: ["Adjustable Shelves", "Premium Finish", "Durable Construction", "Easy Assembly"],
        // url: "https://portal.inservio.app/product/Configurations/65e624c6d949b9cd4e97523b",
        image: "https://storage.googleapis.com/inservio/image_inservio/poster-cabinet.webp"
    },
    {
        id: "7",
        name: "Watch",
        title: "Watch - Smart Timepiece",
        brand: "TechTime",
        category: "Electronics",
        power: "Battery",
        price: 45000,
        description: "Smart watch with health monitoring and connectivity features",
        features: ["Health Monitoring", "GPS Tracking", "Water Resistant", "Long Battery Life"],
        // url: "https://portal.inservio.app/product/Configurations/65e85ed630e860647c8a390c",
        image: "https://storage.googleapis.com/inservio/image_inservio/pt_watch3.webp"
    },
    {
        id: "8",
        name: "Encore Shower",
        title: "Encore Shower - Premium Bathroom Fixture",
        brand: "AquaLux",
        category: "Bathroom",
        price: 320000,
        description: "Premium shower system with multiple spray patterns and temperature control",
        features: ["Multiple Spray Patterns", "Temperature Control", "Water Saving", "Premium Materials"],
        // url: "https://portal.inservio.app/product/Configurations/66d022c7042a4efa36dc4758",
        image: "https://storage.googleapis.com/inservio/image_inservio/pt_shower.webp"
    },
    {
        id: "9",
        name: "LCN Lock Door",
        title: "LCN Lock Door - Security System",
        brand: "SecureTech",
        category: "Security",
        power: "24V",
        price: 280000,
        description: "Advanced door locking system with smart access control",
        features: ["Smart Access", "Remote Control", "Security Alerts", "Durable Design"],
        // url: "https://portal.inservio.app/product/Configurations/66d97160ba8f6cc46dfce6fc",
        image: "https://storage.googleapis.com/inservio/image_inservio/poster_lock.webp"
    },
    {
        id: "10",
        name: "Bathtub",
        title: "Bathtub - Luxury Bathroom Fixture",
        brand: "AquaLux",
        category: "Bathroom",
        price: 450000,
        description: "Luxury bathtub with ergonomic design and premium materials",
        features: ["Ergonomic Design", "Premium Materials", "Easy Cleaning", "Heat Retention"],
        // url: "https://portal.inservio.app/product/Configurations/66d97300ba8f6cc46dfce72d",
        image: "https://storage.googleapis.com/inservio/image_inservio/poster_bathtub1.webp"
    },
    {
        id: "11",
        name: "Untitled Product",
        title: "Untitled Product - Industrial Component",
        brand: "IndusCorp",
        category: "Industrial",
        price: 150000,
        description: "Versatile industrial component for various applications",
        features: ["Versatile Design", "Industrial Grade", "Easy Installation", "Cost Effective"],
        // url: "https://portal.inservio.app/product/Configurations/66f12a7003052adf49304424",
        image: "https://storage.googleapis.com/inservio/image_inservio/poster_skp5.webp"
    },
    {
        id: "12",
        name: "Mills",
        title: "Mills - Industrial Milling Machine",
        brand: "MachineCorp",
        category: "Industrial",
        power: "15kW",
        price: 850000,
        description: "High-precision industrial milling machine for manufacturing",
        features: ["High Precision", "CNC Control", "Robust Construction", "Multiple Materials"],
        // url: "https://portal.inservio.app/product/Configurations/66f3017b03052adf49304e8c",
        image: "https://storage.googleapis.com/inservio/image_inservio/poster-mills.webp"
    },
    {
        id: "13",
        name: "Machine CLX 450",
        title: "Machine CLX 450 - Advanced Manufacturing",
        brand: "MachineCorp",
        category: "Industrial",
        power: "25kW",
        price: 1200000,
        description: "Advanced manufacturing machine with automated controls",
        features: ["Automated Controls", "High Efficiency", "Safety Features", "Easy Maintenance"],
        // url: "https://portal.inservio.app/product/Configurations/66f5205e03052adf4930588e",
        image: "https://storage.googleapis.com/inservio/image_inservio/poster_machine.webp"
    },
    {
        id: "14",
        name: "Machine Automatic",
        title: "Machine Automatic - Automated System",
        brand: "AutoTech",
        category: "Industrial",
        power: "30kW",
        price: 1800000,
        description: "Fully automated manufacturing system with AI integration",
        features: ["AI Integration", "Full Automation", "Remote Monitoring", "Quality Control"],
        // url: "https://portal.inservio.app/product/Configurations/671758f603052adf4930e803",
        image: "https://storage.googleapis.com/inservio/image_inservio/automatic_model1.webp"
    },
    {
        id: "15",
        name: "Elfin Collaborative Robot - E10",
        title: "Elfin E10 - Collaborative Robot",
        brand: "RoboTech",
        category: "Robotics",
        power: "500W",
        price: 650000,
        description: "Collaborative robot arm for industrial automation and human-robot interaction",
        features: ["Human-Safe", "Precise Movement", "Easy Programming", "Versatile Applications"],
        // url: "https://portal.inservio.app/product/Configurations/672b15592be357f8cf9c48f6",
        image: "https://storage.googleapis.com/inservio/image_inservio/poster_hand.webp"
    },
    {
        id: "16",
        name: "Water Bottling Line",
        title: "Water Bottling Line - Production System",
        brand: "ProductionTech",
        category: "Industrial",
        power: "50kW",
        price: 2500000,
        description: "Complete water bottling production line with quality control",
        features: ["Complete Production", "Quality Control", "High Speed", "Hygienic Design"],
        // url: "https://portal.inservio.app/product/Configurations/6736f962f7b77dabbf408ad0",
        image: "https://storage.googleapis.com/inservio/image_inservio/poster_multi.webp"
    },
    {
        id: "17",
        name: "Motor",
        title: "Motor - Electric Drive System",
        brand: "ElectricTech",
        category: "Electronics",
        power: "5kW",
        price: 180000,
        description: "High-efficiency electric motor for various applications",
        features: ["High Efficiency", "Variable Speed", "Low Maintenance", "Compact Design"],
        // url: "https://portal.inservio.app/product/Configurations/673c4b85f7b77dabbf409463",
        image: "https://storage.googleapis.com/inservio/image_inservio/poster_emorto.webp"
    },
    {
        id: "18",
        name: "Jet Engine",
        title: "Jet Engine - Aerospace Propulsion",
        brand: "AeroTech",
        category: "Aerospace",
        power: "10000HP",
        price: 5000000,
        description: "Advanced jet engine for aerospace applications",
        features: ["High Performance", "Fuel Efficient", "Lightweight", "Advanced Materials"],
        // url: "https://portal.inservio.app/product/Configurations/67471e08f7b77dabbf40b761",
        image: "https://storage.googleapis.com/inservio/image_inservio/tuabin3.webp"
    },
    {
        id: "19",
        name: "Automation CNC 2",
        title: "Automation CNC 2 - Advanced Manufacturing",
        brand: "CNCTech",
        category: "Industrial",
        power: "40kW",
        price: 2200000,
        description: "Advanced CNC automation system for precision manufacturing",
        features: ["Precision Control", "Multi-Axis", "Tool Changer", "Safety Systems"],
        // url: "https://portal.inservio.app/product/Configurations/6759cd34066d5d344bee70a4",
        image: "https://storage.googleapis.com/inservio/image_inservio/automation_4.webp"
    },
    {
        id: "20",
        name: "MF102 Hydraulic Training System",
        title: "MF102 - Hydraulic Training System",
        brand: "EduTech",
        category: "Education",
        power: "2kW",
        price: 380000,
        description: "Educational hydraulic training system for technical learning",
        features: ["Educational Purpose", "Safe Operation", "Clear Visualization", "Comprehensive Manual"],
        // url: "https://portal.inservio.app/product/Configurations/677b9707fca43889dc01d384",
        image: "https://storage.googleapis.com/inservio/image_inservio/poster_item(2).webp"
    },
    {
        id: "21",
        name: "Suzuki Motorbike",
        title: "Suzuki Motorbike - Sports Motorcycle",
        brand: "Suzuki",
        category: "Automotive",
        power: "150HP",
        price: 250000,
        description: "High-performance sports motorcycle with advanced features",
        features: ["High Performance", "Sport Design", "Advanced Suspension", "Digital Display"],
        // url: "https://portal.inservio.app/product/Configurations/6784d4fbfca43889dc01f352",
        image: "https://storage.googleapis.com/inservio/image_inservio/poster_motor_suzuki.webp"
    },
    {
        id: "22",
        name: "Solar Panel",
        title: "Solar Panel - Renewable Energy",
        brand: "SolarTech",
        category: "Energy",
        power: "300W",
        price: 120000,
        description: "High-efficiency solar panel for renewable energy generation",
        features: ["High Efficiency", "Weather Resistant", "Long Lifespan", "Easy Installation"],
        // url: "https://portal.inservio.app/product/Configurations/67a460ad9ad1c8e260b2d381",
        image: "https://storage.googleapis.com/inservio/image_inservio/solar.webp"
    },
    {
        id: "23",
        name: "Aero Chair",
        title: "Aero Chair - Ergonomic Office Furniture",
        brand: "OfficeTech",
        category: "Furniture",
        price: 95000,
        description: "Ergonomic office chair with advanced comfort features",
        features: ["Ergonomic Design", "Adjustable Height", "Lumbar Support", "Breathable Material"],
        // url: "https://portal.inservio.app/product/Configurations/67c18fef9ad1c8e260b2ffc0",
        image: "https://storage.googleapis.com/inservio/image_inservio/poster_2.webp"
    },
    {
        id: "24",
        name: "Private Jet",
        title: "Private Jet - Luxury Aircraft",
        brand: "AeroLux",
        category: "Aerospace",
        power: "8000HP",
        price: 15000000,
        description: "Luxury private jet with premium amenities and advanced avionics",
        features: ["Luxury Interior", "Advanced Avionics", "Long Range", "Premium Service"],
        // url: "https://portal.inservio.app/product/Configurations/67bd7edd9ad1c8e260b2f599",
        image: "https://storage.googleapis.com/inservio/image_inservio/jet(3).webp"
    },
    {
        id: "25",
        name: "Vaisala Series HMW90",
        title: "Vaisala HMW90 - Weather Monitoring",
        brand: "Vaisala",
        category: "Scientific",
        power: "12V",
        price: 450000,
        description: "Professional weather monitoring system with high accuracy sensors",
        features: ["High Accuracy", "Weather Resistant", "Data Logging", "Remote Access"],
        // url: "https://portal.inservio.app/product/Configurations/6772b91ffca43889dc01c0e4",
        image: "https://storage.googleapis.com/inservio/image_inservio/poster-vaisala.webp"
    },
    {
        id: "26",
        name: "Vaisala K-Patents PR-23-SD",
        title: "Vaisala PR-23-SD - Process Monitoring",
        brand: "Vaisala",
        category: "Scientific",
        power: "24V",
        price: 520000,
        description: "Advanced process monitoring instrument for industrial applications",
        features: ["Process Monitoring", "High Precision", "Industrial Grade", "Easy Integration"],
        // url: "https://portal.inservio.app/product/Configurations/67c97dcd9ad1c8e260b307d1",
        image: "https://storage.googleapis.com/inservio/image_inservio/pt_vaisala.webp"
    },
    {
        id: "27",
        name: "Veritek Alcove Bathtub",
        title: "Veritek Alcove Bathtub - Premium Bathroom",
        brand: "Veritek",
        category: "Bathroom",
        price: 380000,
        description: "Premium alcove bathtub with modern design and comfort features",
        features: ["Modern Design", "Comfort Features", "Easy Installation", "Durable Materials"],
        // url: "https://portal.inservio.app/product/Configurations/67dad7de167fb59863b1c4fd",
        image: "https://storage.googleapis.com/inservio/image_inservio/item.webp"
    },
    {
        id: "28",
        name: "C-Spout Faucet",
        title: "C-Spout Faucet - Kitchen Fixture",
        brand: "KitchenTech",
        category: "Kitchen",
        price: 85000,
        description: "Modern C-spout kitchen faucet with smooth operation",
        features: ["Modern Design", "Smooth Operation", "Easy Cleaning", "Durable Finish"],
        // url: "https://portal.inservio.app/product/Configurations/67dbc364167fb59863b1c6e3",
        image: "https://storage.googleapis.com/inservio/image_inservio/faucet_pt5.webp"
    },
    {
        id: "29",
        name: "Aquatic 60ACTS Tub Shower",
        title: "Aquatic 60ACTS - Tub Shower Combo",
        brand: "Aquatic",
        category: "Bathroom",
        price: 420000,
        description: "Premium tub shower combination with advanced features",
        features: ["Combo Design", "Advanced Features", "Water Efficient", "Easy Maintenance"],
        // url: "https://portal.inservio.app/product/Configurations/67e27657167fb59863b1e23b",
        image: "https://storage.googleapis.com/inservio/image_inservio/pt60a2.webp"
    },
    {
        id: "30",
        name: "KUKA LBR iiwa 7 R800 CR",
        title: "KUKA iiwa 7 - Collaborative Robot",
        brand: "KUKA",
        category: "Robotics",
        power: "800W",
        price: 1200000,
        description: "Advanced collaborative robot with 7 degrees of freedom",
        features: ["7 DOF", "Human Safe", "Precision Control", "Easy Programming"],
        // url: "https://portal.inservio.app/product/Configurations/67e17f21167fb59863b1de41",
        image: "https://storage.googleapis.com/inservio/image_inservio/kuka_pt2.webp"
    },
    {
        id: "31",
        name: "Bestar Queen Wall Bed with Storage",
        title: "Bestar Queen Wall Bed - Space Saving Furniture",
        brand: "Bestar",
        category: "Furniture",
        price: 320000,
        description: "Space-saving queen wall bed with integrated storage solutions",
        features: ["Space Saving", "Integrated Storage", "Easy Operation", "Quality Materials"],
        // url: "https://portal.inservio.app/product/Configurations/67eea37c0d87f51318b34219",
        image: "https://storage.googleapis.com/inservio/image_inservio/pt_bed4.webp"
    },
    {
        id: "32",
        name: "Geiger Peer Table",
        title: "Geiger Peer Table - Office Furniture",
        brand: "Geiger",
        category: "Furniture",
        price: 150000,
        description: "Modern office table with collaborative design features",
        features: ["Collaborative Design", "Modern Style", "Durable Construction", "Easy Assembly"],
        // url: "https://portal.inservio.app/product/Configurations/67f6984f6b1d64b059d2a5fb",
        image: "https://storage.googleapis.com/inservio/image_inservio/table.webp"
    },
    {
        id: "33",
        name: "Pudurobotics - BellaBot",
        title: "BellaBot - Service Robot",
        brand: "Pudurobotics",
        category: "Robotics",
        power: "200W",
        price: 850000,
        description: "Advanced service robot for hospitality and retail environments",
        features: ["Service Robot", "Navigation System", "Interactive Display", "Safe Operation"],
        // url: "https://portal.inservio.app/product/Configurations/681dc0276b1d64b059d2f6d2",
        image: "https://storage.googleapis.com/inservio/image_inservio/bella_pt.webp"
    },
    {
        id: "34",
        name: "KUKA x Venus Concept – ARTAS iX",
        title: "ARTAS iX - Medical Robot System",
        brand: "KUKA",
        category: "Medical",
        power: "1kW",
        price: 2800000,
        description: "Advanced medical robot system for precision procedures",
        features: ["Medical Grade", "Precision Control", "Safety Systems", "Advanced Imaging"],
        // url: "https://portal.inservio.app/product/Configurations/680896a36b1d64b059d2cd2d",
        image: "https://storage.googleapis.com/inservio/image_inservio/pt_hair4.webp"
    },
    {
        id: "35",
        name: "ATI Axia130 Force/Torque Sensor",
        title: "ATI Axia130 - Force/Torque Sensor",
        brand: "ATI",
        category: "Scientific",
        power: "12V",
        price: 180000,
        description: "High-precision force and torque sensor for robotic applications",
        features: ["High Precision", "Robotic Integration", "Durable Design", "Multiple Ranges"],
        // url: "https://portal.inservio.app/product/Configurations/6825b2310b62fbb1e12937ba",
        image: "https://storage.googleapis.com/inservio/atipt2.webp"
    },
    {
        id: "36",
        name: "DOBOT CR20A Collaborative Robot Arm",
        title: "DOBOT CR20A - Collaborative Robot",
        brand: "DOBOT",
        category: "Robotics",
        power: "600W",
        price: 450000,
        description: "Versatile collaborative robot arm for industrial automation",
        features: ["Collaborative", "Easy Programming", "Safety Features", "Versatile Applications"],
        // url: "https://portal.inservio.app/product/Configurations/682c38bad7704bc7f0db670b",
        image: "https://storage.googleapis.com/inservio/image_inservio/posterdobott.webp"
    },
    {
        id: "37",
        name: "Game Aerospace GB2 Landing Gear",
        title: "Game GB2 - Aircraft Landing Gear",
        brand: "Game Aerospace",
        category: "Aerospace",
        power: "Hydraulic",
        price: 680000,
        description: "Advanced aircraft landing gear system with hydraulic operation",
        features: ["Hydraulic Operation", "Aircraft Grade", "Safety Systems", "Durable Design"],
        // url: "https://portal.inservio.app/product/Configurations/684a7d3ddc7096d65a9e84ba",
        image: "https://storage.googleapis.com/inservio/image_inservio/pt_landing.webp"
    },
    {
        id: "38",
        name: "3D dental scanner",
        title: "3D Dental Scanner - Medical Device",
        brand: "MedTech",
        category: "Medical",
        power: "100W",
        price: 520000,
        description: "Advanced 3D dental scanner for precision diagnostics",
        features: ["3D Scanning", "High Resolution", "Fast Processing", "User Friendly"],
        // url: "https://portal.inservio.app/product/Configurations/686263909f2dccb066f90573",
        image: "https://storage.googleapis.com/inservio/image_inservio/dentalpt2.webp"
    }
];

// Helper functions for filtering and searching
export const getProducts3D = () => {
    return products3D;
};

export const searchProducts3D = (query: string) => {
    if (!query.trim()) {
        return products3D;
    }
    return products3D.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    );
};

export const filterProductsByCategory3D = (category: string) => {
    return products3D.filter(product =>
        product.category.toLowerCase() === category.toLowerCase()
    );
};

export const filterProductsByBrand3D = (brand: string) => {
    return products3D.filter(product =>
        product.brand.toLowerCase() === brand.toLowerCase()
    );
};

export const getBrands3D = () => {
    const brands = products3D.map(product => product.brand);
    return [...new Set(brands)].sort();
};

export const getCategories3D = () => {
    const categories = products3D.map(product => product.category);
    return [...new Set(categories)].sort();
};
