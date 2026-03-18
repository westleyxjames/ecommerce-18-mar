// Product Details Page JavaScript

// Products data (same as in script.js)
const productsData = [
    {
        id: 1,
        name: "Luxe Satin Dress",
        category: "women",
        price: 349.99,
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
        badge: "New",
        rating: 4.9,
        type: "Women's"
    },
    {
        id: 2,
        name: "Designer Handbag Collection",
        category: "accessories",
        price: 599.99,
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80",
        badge: "Exclusive",
        rating: 5.0,
        type: "Accessories"
    },
    {
        id: 3,
        name: "Premium Leather Jacket",
        category: "women",
        price: 449.99,
        image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&q=80",
        badge: "Trending",
        rating: 4.8,
        type: "Women's"
    },
    {
        id: 4,
        name: "Classic Wool Coat",
        category: "men",
        price: 529.99,
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80",
        badge: "Hot",
        rating: 4.9,
        type: "Men's"
    },
    {
        id: 5,
        name: "Elegant Evening Gown",
        category: "women",
        price: 799.99,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
        badge: "Premium",
        rating: 5.0,
        type: "Women's"
    },
    {
        id: 6,
        name: "Designer Sunglasses",
        category: "accessories",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80",
        badge: "New",
        rating: 4.7,
        type: "Accessories"
    },
    {
        id: 7,
        name: "Tailored Business Suit",
        category: "men",
        price: 899.99,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
        badge: "Trending",
        rating: 4.9,
        type: "Men's"
    },
    {
        id: 8,
        name: "Summer Floral Dress",
        category: "women",
        price: 279.99,
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80",
        badge: "Hot",
        rating: 4.6,
        type: "Women's"
    },
    {
        id: 9,
        name: "Luxury Watch",
        category: "accessories",
        price: 1299.99,
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80",
        badge: "Exclusive",
        rating: 5.0,
        type: "Accessories"
    },
    {
        id: 10,
        name: "Urban Streetwear Set",
        category: "men",
        price: 399.99,
        image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&q=80",
        badge: "New",
        rating: 4.8,
        type: "Men's"
    },
    {
        id: 11,
        name: "Chic Jumpsuit",
        category: "women",
        price: 329.99,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
        badge: "Trending",
        rating: 4.7,
        type: "Women's"
    },
    {
        id: 12,
        name: "Premium Sneakers",
        category: "accessories",
        price: 249.99,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=80",
        badge: "Hot",
        rating: 4.9,
        type: "Accessories"
    }
];

// Load product details on page load
document.addEventListener('DOMContentLoaded', () => {
    const productId = parseInt(localStorage.getItem('selectedProductId'));
    const product = productsData.find(p => p.id === productId);
    
    if (product) {
        loadProductDetails(product);
    } else {
        // Default to first product if no ID found
        loadProductDetails(productsData[0]);
    }
    
    updateCartCount();
});

// Load product details
function loadProductDetails(product) {
    // Update product title and badge
    document.querySelector('.product-title').textContent = product.name;
    document.querySelector('.product-badge').textContent = product.badge;
    
    // Update main image
    const mainImage = document.getElementById('mainProductImage');
    mainImage.src = product.image;
    
    // Update price
    document.querySelector('.current-price').textContent = `$${product.price.toFixed(2)}`;
    
    // Update rating
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    document.querySelector('.product-rating-detail .stars').textContent = stars;
    
    // Update category in meta
    document.querySelector('.product-meta .meta-item:nth-child(2)').innerHTML = 
        `<strong>Category:</strong> ${product.type}`;
}

// Change main image when clicking thumbnail
function changeMainImage(thumbnail) {
    const mainImage = document.getElementById('mainProductImage');
    mainImage.src = thumbnail.src.replace('w=200', 'w=800');
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    thumbnail.classList.add('active');
}

// Quantity controls
function increaseQuantity() {
    const input = document.getElementById('quantity');
    const currentValue = parseInt(input.value);
    if (currentValue < 10) {
        input.value = currentValue + 1;
    }
}

function decreaseQuantity() {
    const input = document.getElementById('quantity');
    const currentValue = parseInt(input.value);
    if (currentValue > 1) {
        input.value = currentValue - 1;
    }
}

// Size selection
document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// Color selection
document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// Tab switching
function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
}

// Add to cart from details page
function addToCartFromDetails() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const selectedSize = document.querySelector('.size-btn.active')?.textContent || 'M';
    const selectedColor = document.querySelector('.color-btn.active')?.title || 'Black';
    
    const product = {
        id: Date.now(),
        name: document.querySelector('.product-title').textContent,
        price: 349.99,
        image: document.getElementById('mainProductImage').src,
        quantity: quantity,
        size: selectedSize,
        color: selectedColor
    };
    
    // Get existing cart
    let cart = JSON.parse(localStorage.getItem('styleLoopCart')) || [];
    
    // Add product to cart
    cart.push(product);
    
    // Save to localStorage
    localStorage.setItem('styleLoopCart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // Show notification
    showToast(`${quantity} item(s) added to cart!`);
}

// Buy now function
function buyNow() {
    addToCartFromDetails();
    setTimeout(() => {
        window.location.href = 'cart.html';
    }, 500);
}

// Add to wishlist
function addToWishlist() {
    showToast('Added to wishlist!');
}

// Show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);
        color: white;
        padding: 1.25rem 2rem;
        border-radius: 1rem;
        box-shadow: 0 8px 32px rgba(255, 107, 107, 0.4);
        z-index: 3000;
        font-weight: 600;
        animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// Update cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('styleLoopCart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}