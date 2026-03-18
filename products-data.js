// LUXE MODAL - Premium Sustainable Fashion Products Database

const allProducts = [
    {
        id: 1,
        name: "Organic Linen Blazer",
        type: "Women's Outerwear",
        category: "women",
        price: 189.99,
        originalPrice: 249.99,
        discount: 24,
        rating: 4.8,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&q=80",
            "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80",
            "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=800&q=80"
        ],
        description: "Sustainably crafted blazer made from 100% organic linen. Features a relaxed fit, natural buttons, and breathable fabric perfect for year-round wear.",
        features: [
            "100% Organic Linen",
            "GOTS Certified",
            "Natural dye process",
            "Breathable & Lightweight",
            "Ethically made in Portugal"
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#E8DCC4", "#8B9D83", "#5A6B5D"],
        inStock: true,
        badge: "Eco-Friendly",
        sku: "LXM-W-BLZ-001"
    },
    {
        id: 2,
        name: "Bamboo Silk Midi Dress",
        type: "Women's Dresses",
        category: "women",
        price: 145.00,
        originalPrice: 195.00,
        discount: 26,
        rating: 4.9,
        reviews: 203,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
            "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=800&q=80",
            "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80"
        ],
        description: "Elegant midi dress crafted from luxurious bamboo silk blend. Features a flattering A-line silhouette and side pockets. Incredibly soft and sustainable.",
        features: [
            "70% Bamboo / 30% Silk Blend",
            "Biodegradable fabric",
            "Hidden side pockets",
            "Machine washable",
            "Zero waste production"
        ],
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["#8B9D83", "#C47B5C", "#3E2723"],
        inStock: true,
        badge: "Bestseller",
        sku: "LXM-W-DRS-002"
    },
    {
        id: 3,
        name: "Recycled Wool Overcoat",
        type: "Men's Outerwear",
        category: "men",
        price: 299.00,
        originalPrice: 399.00,
        discount: 25,
        rating: 4.7,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
            "https://images.unsplash.com/photo-1548624313-6e4f9b73b5b5?w=800&q=80"
        ],
        description: "Classic overcoat made from 100% recycled wool. Features premium horn buttons, internal pocket, and timeless design. Warm and sustainable.",
        features: [
            "100% Recycled Wool",
            "Water-resistant finish",
            "Premium horn buttons",
            "Fully lined interior",
            "Carbon neutral shipping"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["#3E2723", "#5A6B5D", "#8B9D83"],
        inStock: true,
        badge: "Sustainable",
        sku: "LXM-M-COT-003"
    },
    {
        id: 4,
        name: "Organic Cotton Turtleneck",
        type: "Women's Tops",
        category: "women",
        price: 68.00,
        rating: 4.6,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&q=80",
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
            "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?w=800&q=80"
        ],
        description: "Classic turtleneck in soft organic cotton. Perfect layering piece with a slim fit and stretchy fabric. Available in versatile neutral colors.",
        features: [
            "100% Organic Cotton",
            "Fair Trade Certified",
            "Slim fit design",
            "Pre-shrunk fabric",
            "Durable rib knit"
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#E8DCC4", "#3E2723", "#5A6B5D"],
        inStock: true,
        sku: "LXM-W-TOP-004"
    },
    {
        id: 5,
        name: "Hemp Canvas Chinos",
        type: "Men's Pants",
        category: "men",
        price: 98.00,
        originalPrice: 128.00,
        discount: 23,
        rating: 4.8,
        reviews: 167,
        image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80",
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
            "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80"
        ],
        description: "Contemporary chinos crafted from durable hemp canvas. Features a modern tapered fit, reinforced seams, and exceptional breathability.",
        features: [
            "55% Hemp / 45% Organic Cotton",
            "4-way stretch",
            "Reinforced pockets",
            "UV protective",
            "Biodegradable"
        ],
        sizes: ["28", "30", "32", "34", "36", "38"],
        colors: ["#C4A882", "#5A6B5D", "#3E2723"],
        inStock: true,
        badge: "New",
        sku: "LXM-M-PNT-005"
    },
    {
        id: 6,
        name: "Tencel Wide-Leg Trousers",
        type: "Women's Pants",
        category: "women",
        price: 115.00,
        rating: 4.9,
        reviews: 198,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80",
            "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=800&q=80",
            "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&q=80"
        ],
        description: "Elegant wide-leg trousers in soft Tencel fabric. Features a high waist, flowing silhouette, and exceptional drape. Perfect for any occasion.",
        features: [
            "100% Tencel Lyocell",
            "Closed-loop production",
            "High-rise waist",
            "Flowing wide leg",
            "Wrinkle resistant"
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#3E2723", "#8B9D83", "#E8DCC4"],
        inStock: true,
        badge: "Trending",
        sku: "LXM-W-PNT-006"
    },
    {
        id: 7,
        name: "Merino Wool Crew Sweater",
        type: "Men's Knitwear",
        category: "men",
        price: 135.00,
        originalPrice: 175.00,
        discount: 23,
        rating: 4.7,
        reviews: 142,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
            "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&q=80",
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80"
        ],
        description: "Premium crew neck sweater in 100% Merino wool. Temperature-regulating, naturally odor-resistant, and incredibly soft. A wardrobe essential.",
        features: [
            "100% Merino Wool",
            "ZQ Certified",
            "Temperature regulating",
            "Odor resistant",
            "Italian spun yarn"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["#5A6B5D", "#C47B5C", "#3E2723"],
        inStock: true,
        badge: "Premium",
        sku: "LXM-M-KNT-007"
    },
    {
        id: 8,
        name: "Recycled Cashmere Cardigan",
        type: "Women's Knitwear",
        category: "women",
        price: 225.00,
        originalPrice: 295.00,
        discount: 24,
        rating: 5.0,
        reviews: 91,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
            "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=800&q=80",
            "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80"
        ],
        description: "Luxurious cardigan made from 100% recycled cashmere. Features ribbed trim, horn buttons, and cloud-soft feel. Sustainable luxury at its finest.",
        features: [
            "100% Recycled Cashmere",
            "GRS Certified",
            "Natural horn buttons",
            "Ribbed cuffs & hem",
            "Hand washable"
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#E8DCC4", "#8B9D83", "#C47B5C"],
        inStock: true,
        badge: "Luxury",
        sku: "LXM-W-KNT-008"
    },
    {
        id: 9,
        name: "Organic Denim Jacket",
        type: "Unisex Outerwear",
        category: "unisex",
        price: 165.00,
        rating: 4.8,
        reviews: 276,
        image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800&q=80",
            "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&q=80",
            "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=800&q=80"
        ],
        description: "Classic denim jacket made from 100% organic cotton. Features a relaxed fit, metal buttons, and timeless design. Gets better with age.",
        features: [
            "100% Organic Cotton Denim",
            "Water-saving production",
            "Classic trucker style",
            "Adjustable waist tabs",
            "Vintage wash"
        ],
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["#5C7A99", "#3E2723"],
        inStock: true,
        badge: "Classic",
        sku: "LXM-U-JKT-009"
    },
    {
        id: 10,
        name: "Silk-Cotton Blend Shirt",
        type: "Men's Shirts",
        category: "men",
        price: 89.00,
        originalPrice: 119.00,
        discount: 25,
        rating: 4.6,
        reviews: 188,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
            "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80",
            "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&q=80"
        ],
        description: "Refined button-down shirt in silk-cotton blend. Features mother-of-pearl buttons, subtle sheen, and breathable fabric. Perfect for any occasion.",
        features: [
            "70% Organic Cotton / 30% Peace Silk",
            "Mother-of-pearl buttons",
            "Wrinkle resistant",
            "Breathable weave",
            "Made in Italy"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["#E8DCC4", "#5A6B5D", "#8B9D83"],
        inStock: true,
        sku: "LXM-M-SHT-010"
    },
    {
        id: 11,
        name: "Linen Wrap Skirt",
        type: "Women's Skirts",
        category: "women",
        price: 95.00,
        rating: 4.7,
        reviews: 134,
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&q=80",
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80",
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80"
        ],
        description: "Versatile wrap skirt in premium European linen. Features adjustable ties, midi length, and flowing movement. Effortlessly elegant.",
        features: [
            "100% European Linen",
            "Adjustable wrap design",
            "Hidden button closure",
            "Side pocket",
            "Pre-washed softness"
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#C47B5C", "#8B9D83", "#E8DCC4"],
        inStock: true,
        badge: "Versatile",
        sku: "LXM-W-SKT-011"
    },
    {
        id: 12,
        name: "Recycled Polyester Puffer",
        type: "Unisex Outerwear",
        category: "unisex",
        price: 210.00,
        originalPrice: 280.00,
        discount: 25,
        rating: 4.9,
        reviews: 312,
        image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&q=80",
            "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80",
            "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=800&q=80"
        ],
        description: "Modern puffer jacket made from 100% recycled polyester. Features water-resistant coating, multiple pockets, and exceptional warmth.",
        features: [
            "100% Recycled Polyester",
            "PFC-free water repellent",
            "700-fill recycled down",
            "Multiple zip pockets",
            "Packable design"
        ],
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["#3E2723", "#5A6B5D", "#C47B5C"],
        inStock: true,
        badge: "Warm",
        sku: "LXM-U-PUF-012"
    },
    {
        id: 13,
        name: "Cork Leather Crossbody Bag",
        type: "Accessories",
        category: "accessories",
        price: 78.00,
        rating: 4.8,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
            "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&q=80"
        ],
        description: "Stylish crossbody bag made from sustainable cork leather. Features adjustable strap, multiple compartments, and water-resistant material.",
        features: [
            "100% Cork Leather",
            "Vegan & Cruelty-free",
            "Water resistant",
            "Adjustable strap",
            "Lightweight & durable"
        ],
        sizes: ["One Size"],
        colors: ["#C4A882", "#8B9D83", "#3E2723"],
        inStock: true,
        badge: "Vegan",
        sku: "LXM-A-BAG-013"
    },
    {
        id: 14,
        name: "Organic Cotton Basics Set",
        type: "Women's Basics",
        category: "women",
        price: 125.00,
        originalPrice: 165.00,
        discount: 24,
        rating: 4.9,
        reviews: 445,
        image: "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?w=800&q=80",
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
            "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&q=80"
        ],
        description: "Essential basics set including 3 t-shirts and 2 tank tops. Made from super soft organic cotton. Perfect foundation for any wardrobe.",
        features: [
            "100% Organic Pima Cotton",
            "5-piece set",
            "Pre-shrunk fabric",
            "Reinforced seams",
            "Carbon neutral"
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#E8DCC4", "#3E2723", "#5A6B5D"],
        inStock: true,
        badge: "Value Pack",
        sku: "LXM-W-SET-014"
    },
    {
        id: 15,
        name: "Wool Felt Wide Brim Hat",
        type: "Accessories",
        category: "accessories",
        price: 65.00,
        rating: 4.7,
        reviews: 98,
        image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&q=80",
            "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?w=800&q=80",
            "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80"
        ],
        description: "Timeless wide-brim hat crafted from 100% wool felt. Features grosgrain ribbon detail and adjustable internal band. UV protective.",
        features: [
            "100% Wool Felt",
            "UPF 50+ protection",
            "Adjustable inner band",
            "Grosgrain ribbon",
            "Handcrafted"
        ],
        sizes: ["S/M", "M/L"],
        colors: ["#C4A882", "#3E2723", "#8B9D83"],
        inStock: true,
        badge: "Artisan",
        sku: "LXM-A-HAT-015"
    }
];

// Blog Articles Data
const blogArticles = [
    {
        id: 1,
        title: "The Future of Sustainable Fashion: Why Natural Fibers Matter",
        excerpt: "Discover how natural and recycled materials are revolutionizing the fashion industry and reducing environmental impact.",
        category: "Sustainability",
        date: "January 18, 2026",
        author: "Emma Richardson",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200&q=80",
        readTime: "6 min read",
        content: "Full article content here..."
    },
    {
        id: 2,
        title: "Building a Capsule Wardrobe: 15 Essential Pieces",
        excerpt: "Learn how to create a versatile, sustainable wardrobe with fewer, better-quality pieces that last for years.",
        category: "Style Guide",
        date: "January 15, 2026",
        author: "Michael Chen",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80",
        readTime: "8 min read",
        content: "Full article content here..."
    },
    {
        id: 3,
        title: "How to Care for Natural Fabrics: Expert Tips",
        excerpt: "Extend the life of your sustainable garments with these professional care tips for linen, wool, and organic cotton.",
        category: "Care Guide",
        date: "January 12, 2026",
        author: "Sarah Martinez",
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1200&q=80",
        readTime: "5 min read",
        content: "Full article content here..."
    },
    {
        id: 4,
        title: "Ethical Fashion Certifications Explained",
        excerpt: "Understanding GOTS, Fair Trade, and other certifications that ensure your clothes are truly sustainable.",
        category: "Education",
        date: "January 10, 2026",
        author: "David Park",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1200&q=80",
        readTime: "7 min read",
        content: "Full article content here..."
    },
    {
        id: 5,
        title: "Spring 2026 Trends: Sustainable Style",
        excerpt: "The hottest sustainable fashion trends for spring, from earth tones to minimalist silhouettes.",
        category: "Trends",
        date: "January 8, 2026",
        author: "Emma Richardson",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80",
        readTime: "6 min read",
        content: "Full article content here..."
    },
    {
        id: 6,
        title: "The True Cost of Fast Fashion",
        excerpt: "An eye-opening look at the environmental and social impact of fast fashion and why choosing quality matters.",
        category: "Sustainability",
        date: "January 5, 2026",
        author: "Michael Chen",
        image: "https://images.unsplash.com/photo-1558769132-cb1aea1f1c9f?w=1200&q=80",
        readTime: "9 min read",
        content: "Full article content here..."
    }
];
