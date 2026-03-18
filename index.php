<?php
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LUXE MODAL - Premium Sustainable Fashion | Ethical Clothing</title>
    <meta name="description" content="Discover premium sustainable fashion at LUXE MODAL. Shop ethically made clothing crafted from organic materials with Cash on Delivery across USA.">
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Header -->
    <header class="header" id="mainHeader">
        <div class="container">
            <div class="header-content">
                <!-- Logo -->
                <a href="index.html" class="logo">
                    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                        <rect x="8" y="8" width="24" height="24" stroke="currentColor" stroke-width="1.5" rx="2"/>
                        <circle cx="20" cy="20" r="6" stroke="currentColor" stroke-width="1.5"/>
                        <line x1="20" y1="8" x2="20" y2="14" stroke="currentColor" stroke-width="1.5"/>
                        <line x1="20" y1="26" x2="20" y2="32" stroke="currentColor" stroke-width="1.5"/>
                        <line x1="8" y1="20" x2="14" y2="20" stroke="currentColor" stroke-width="1.5"/>
                        <line x1="26" y1="20" x2="32" y2="20" stroke="currentColor" stroke-width="1.5"/>
                    </svg>
                    <span>LUXE MODAL</span>
                </a>

                <!-- Navigation -->
                <nav class="main-nav">
                    <a href="index.html" class="nav-link active">Home</a>
                    <a href="shop.html" class="nav-link">Shop</a>
                    <a href="blog.html" class="nav-link">Journal</a>
                    <a href="about.html" class="nav-link">About</a>
                    <a href="contact.html" class="nav-link">Contact</a>
                </nav>

                <!-- Header Actions -->
                <div class="header-actions">
                    <button class="header-icon" id="searchToggle" aria-label="Search">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                        </svg>
                    </button>
                    <button class="header-icon" id="cartToggle" aria-label="Cart">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
                        </svg>
                        <span class="cart-badge" id="cartCount">0</span>
                    </button>
                    <button class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Menu">
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu">
        <div class="mobile-menu-header">
            <span>MENU</span>
            <button class="mobile-menu-close" id="closeMobileMenu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </button>
        </div>
        <nav class="mobile-nav">
            <a href="index.html">Home</a>
            <a href="shop.html">Shop</a>
            <a href="blog.html">Journal</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
        </nav>
    </div>

    <!-- Hero Slider / Carousel -->
    <section class="hero">
        <div class="hero-slider">
            <!-- Slide 1 -->
            <div class="hero-slide active">
                <div class="hero-background">
                    <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80" alt="Sustainable Fashion Collection">
                </div>
                <div class="container">
                    <div class="hero-content">
                        <span class="hero-badge">Spring 2026 Collection</span>
                        <h1 class="hero-title">Sustainable Luxury<br>Meets Modern Style</h1>
                        <p class="hero-subtitle">Discover ethically crafted fashion from organic materials. Premium quality without compromising the planet.</p>
                        <div class="hero-actions">
                            <a href="shop.html" class="btn btn-primary">Explore Collection</a>
                            <a href="about.html" class="btn btn-outline">Our Story</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Slide 2 -->
            <div class="hero-slide">
                <div class="hero-background">
                    <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80" alt="Organic Fashion">
                </div>
                <div class="container">
                    <div class="hero-content">
                        <span class="hero-badge">Conscious Fashion</span>
                        <h1 class="hero-title">100% Organic<br>Zero Compromise</h1>
                        <p class="hero-subtitle">Every piece tells a story of craftsmanship, sustainability, and timeless design. Fashion that feels good.</p>
                        <div class="hero-actions">
                            <a href="shop.html?category=women" class="btn btn-primary">Shop Women</a>
                            <a href="shop.html?category=men" class="btn btn-outline">Shop Men</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Slide 3 -->
            <div class="hero-slide">
                <div class="hero-background">
                    <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1920&q=80" alt="Ethical Fashion">
                </div>
                <div class="container">
                    <div class="hero-content">
                        <span class="hero-badge">Limited Edition</span>
                        <h1 class="hero-title">Crafted with Care<br>Made to Last</h1>
                        <p class="hero-subtitle">Premium fabrics. Ethical production. Timeless designs. Invest in pieces that transcend trends.</p>
                        <div class="hero-actions">
                            <a href="shop.html" class="btn btn-primary">Shop New Arrivals</a>
                            <a href="blog.html" class="btn btn-outline">Read Our Journal</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Slider Navigation Dots -->
        <div class="hero-dots">
            <button class="hero-dot active" data-slide="0" aria-label="Slide 1"></button>
            <button class="hero-dot" data-slide="1" aria-label="Slide 2"></button>
            <button class="hero-dot" data-slide="2" aria-label="Slide 3"></button>
        </div>
    </section>

    <!-- Trending Section -->
    <section class="section">
        <div class="container">
            <div class="section-header">
                <p class="section-subtitle">Hot Right Now</p>
                <h2 class="section-title">Trending Pieces</h2>
                <p class="section-description">Our most popular sustainable pieces loved by conscious fashion enthusiasts worldwide.</p>
            </div>

            <div class="products-grid" id="trendingProducts"></div>

            <div style="text-align: center; margin-top: 3rem;">
                <a href="shop.html" class="btn btn-primary">Shop All Trending</a>
            </div>
        </div>
    </section>

    <!-- Women's Section -->
    <section class="section" style="background: var(--cream); padding: 4rem 0;">
        <div class="container">
            <div class="section-header">
                <p class="section-subtitle">For Her</p>
                <h2 class="section-title">Women's Collection</h2>
                <p class="section-description">Timeless elegance meets sustainable craftsmanship. Discover premium pieces designed for the modern woman.</p>
            </div>

            <div class="products-grid" id="womensProducts"></div>

            <div style="text-align: center; margin-top: 3rem;">
                <a href="shop.html?category=women" class="btn btn-primary">Shop Women's</a>
            </div>
        </div>
    </section>

    <!-- Men's Section -->
    <section class="section">
        <div class="container">
            <div class="section-header">
                <p class="section-subtitle">For Him</p>
                <h2 class="section-title">Men's Collection</h2>
                <p class="section-description">Contemporary style with ethical foundations. Premium menswear crafted from the finest sustainable materials.</p>
            </div>

            <div class="products-grid" id="mensProducts"></div>

            <div style="text-align: center; margin-top: 3rem;">
                <a href="shop.html?category=men" class="btn btn-primary">Shop Men's</a>
            </div>
        </div>
    </section>

    <!-- Features -->
    <section class="section" style="background: var(--cream); padding: 4rem 0;">
        <div class="container">
            <div class="features-grid">
                <div class="feature-item">
                    <div class="feature-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                        </svg>
                    </div>
                    <h3 class="feature-title">Sustainable Materials</h3>
                    <p class="feature-description">100% organic and recycled fabrics certified by GOTS and GRS standards.</p>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                        </svg>
                    </div>
                    <h3 class="feature-title">Ethical Production</h3>
                    <p class="feature-description">Fair trade certified workshops with safe working conditions and living wages.</p>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <h3 class="feature-title">Quality Guaranteed</h3>
                    <p class="feature-description">Premium craftsmanship built to last. 1-year warranty on all items.</p>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                        </svg>
                    </div>
                    <h3 class="feature-title">Cash on Delivery</h3>
                    <p class="feature-description">Pay when you receive. Free shipping on orders over $150.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section class="section">
        <div class="container">
            <div class="section-header">
                <p class="section-subtitle">Customer Stories</p>
                <h2 class="section-title">What They Say</h2>
            </div>
            <div class="products-grid">
                <div style="background: var(--white); padding: 2rem; border-radius: 4px; box-shadow: var(--shadow);">
                    <div class="stars" style="color: var(--terracotta); margin-bottom: 1rem;">★★★★★</div>
                    <p style="color: var(--gray-700); margin-bottom: 1.5rem; font-style: italic;">"The quality is exceptional. Finally found a brand that aligns with my values without sacrificing style."</p>
                    <p style="font-weight: 600; color: var(--deep-brown);">— Sarah M., New York</p>
                </div>
                <div style="background: var(--white); padding: 2rem; border-radius: 4px; box-shadow: var(--shadow);">
                    <div class="stars" style="color: var(--terracotta); margin-bottom: 1rem;">★★★★★</div>
                    <p style="color: var(--gray-700); margin-bottom: 1.5rem; font-style: italic;">"Love the organic cotton blazer! It's stylish, comfortable, and I feel good knowing it's sustainable."</p>
                    <p style="font-weight: 600; color: var(--deep-brown);">— James R., California</p>
                </div>
                <div style="background: var(--white); padding: 2rem; border-radius: 4px; box-shadow: var(--shadow);">
                    <div class="stars" style="color: var(--terracotta); margin-bottom: 1rem;">★★★★★</div>
                    <p style="color: var(--gray-700); margin-bottom: 1.5rem; font-style: italic;">"The bamboo silk dress is gorgeous! Fits perfectly and the fabric is incredibly soft. Highly recommend."</p>
                    <p style="font-weight: 600; color: var(--deep-brown);">— Emily K., Massachusetts</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-col footer-about">
                    <a href="index.html" class="footer-logo">
                        <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                            <rect x="8" y="8" width="24" height="24" stroke="currentColor" stroke-width="1.5" rx="2"/>
                            <circle cx="20" cy="20" r="6" stroke="currentColor" stroke-width="1.5"/>
                        </svg>
                        <span>LUXE MODAL</span>
                    </a>
                    <p>Premium sustainable fashion crafted with care. Ethical clothing that doesn't compromise on style or quality.</p>
                    <div class="footer-social">
                        <a href="#" aria-label="Facebook"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                        <a href="#" aria-label="Instagram"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                        <a href="#" aria-label="Pinterest"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg></a>
                    </div>
                </div>
                <div class="footer-col">
                    <h4>Shop</h4>
                    <a href="shop.html">All Products</a>
                    <a href="shop.html?category=women">Women's Collection</a>
                    <a href="shop.html?category=men">Men's Collection</a>
                    <a href="shop.html?category=accessories">Accessories</a>
                </div>
                <div class="footer-col">
                    <h4>Company</h4>
                    <a href="about.html">About Us</a>
                    <a href="blog.html">Our Journal</a>
                    <a href="contact.html">Contact</a>
                    <a href="about.html#sustainability">Sustainability</a>
                </div>
                <div class="footer-col">
                    <h4>Support</h4>
                    <a href="privacy.html">Privacy Policy</a>
                    <a href="terms.html">Terms & Conditions</a>
                    <a href="return-policy.html">Return Policy</a>
                    <a href="cart.html">Shopping Cart</a>
                </div>
                <div class="footer-col">
                    <h4>Contact</h4>
                    <p>591 Memorial Dr<br>Chicopee, MA 01020<br>United States</p>
                    <p style="margin-top: 1rem;">Email: hello@luxemodal.com<br>Phone: (413) 555-LUXE</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 LUXE MODAL. All rights reserved.</p>
                <div class="footer-payment">
                    <span>COD</span>
                    <span>Visa</span>
                    <span>Mastercard</span>
                    <span>Amex</span>
                </div>
            </div>
        </div>
    </footer>

    <!-- Search Modal -->
    <div class="modal" id="searchModal">
        <div class="modal-content modal-search">
            <div class="modal-header">
                <h3>Search Products</h3>
                <button class="modal-close" id="closeSearch">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            <div class="modal-body">
                <input type="text" class="search-input" id="searchInput" placeholder="Search for sustainable fashion...">
                <div class="search-results" id="searchResults">
                    <p class="search-hint">Type at least 2 characters to search...</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Cart Modal -->
    <div class="modal" id="cartModal">
        <div class="modal-content modal-cart">
            <div class="modal-header">
                <h3>Shopping Cart (<span id="cartModalCount">0</span>)</h3>
                <button class="modal-close" onclick="closeCartModal()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            <div class="modal-body">
                <div id="cartEmptyState" class="empty-state">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
                    </svg>
                    <h4>Your cart is empty</h4>
                    <p>Add some sustainable pieces to get started!</p>
                    <a href="shop.html" class="btn btn-primary">Explore Collection</a>
                </div>
                <div id="cartModalContent" style="display:none;">
                    <div id="cartModalItems"></div>
                    <div class="cart-modal-footer">
                        <div class="cart-modal-total">
                            <span>Total:</span>
                            <strong id="cartModalTotal">$0.00</strong>
                        </div>
                        <a href="cart.html" class="btn btn-primary btn-block">View Cart & Checkout</a>
                        <button onclick="closeCartModal()" class="btn btn-outline btn-block">Continue Shopping</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="products-data.js"></script>
    <script src="app.js"></script>
    <script>
        // Render Trending Products (products with badges)
        const trendingContainer = document.getElementById('trendingProducts');
        if (trendingContainer) {
            const trendingProducts = allProducts.filter(p => p.badge === 'Bestseller' || p.badge === 'Trending' || p.badge === 'New').slice(0, 4);
            
            trendingContainer.innerHTML = trendingProducts.map(product => `
                <div class="product-card" onclick="viewProduct(${product.id})">
                    ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                        <button class="product-quick-add" onclick="event.stopPropagation(); addToCart(${product.id})">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
                            </svg>
                            Add to Cart
                        </button>
                    </div>
                    <div class="product-info">
                        <span class="product-category">${product.type}</span>
                        <h3 class="product-name">${product.name}</h3>
                        <div class="product-rating">
                            <div class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</div>
                            <span>(${product.reviews})</span>
                        </div>
                        <div class="product-price">
                            <span class="price-current">$${product.price.toFixed(2)}</span>
                            ${product.originalPrice ? `<span class="price-original">$${product.originalPrice.toFixed(2)}</span>` : ''}
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Render Women's Products
        const womensContainer = document.getElementById('womensProducts');
        if (womensContainer) {
            const womensProducts = allProducts.filter(p => p.category === 'women').slice(0, 4);
            
            womensContainer.innerHTML = womensProducts.map(product => `
                <div class="product-card" onclick="viewProduct(${product.id})">
                    ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                        <button class="product-quick-add" onclick="event.stopPropagation(); addToCart(${product.id})">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
                            </svg>
                            Add to Cart
                        </button>
                    </div>
                    <div class="product-info">
                        <span class="product-category">${product.type}</span>
                        <h3 class="product-name">${product.name}</h3>
                        <div class="product-rating">
                            <div class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</div>
                            <span>(${product.reviews})</span>
                        </div>
                        <div class="product-price">
                            <span class="price-current">$${product.price.toFixed(2)}</span>
                            ${product.originalPrice ? `<span class="price-original">$${product.originalPrice.toFixed(2)}</span>` : ''}
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Render Men's Products
        const mensContainer = document.getElementById('mensProducts');
        if (mensContainer) {
            const mensProducts = allProducts.filter(p => p.category === 'men').slice(0, 4);
            
            mensContainer.innerHTML = mensProducts.map(product => `
                <div class="product-card" onclick="viewProduct(${product.id})">
                    ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                        <button class="product-quick-add" onclick="event.stopPropagation(); addToCart(${product.id})">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
                            </svg>
                            Add to Cart
                        </button>
                    </div>
                    <div class="product-info">
                        <span class="product-category">${product.type}</span>
                        <h3 class="product-name">${product.name}</h3>
                        <div class="product-rating">
                            <div class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</div>
                            <span>(${product.reviews})</span>
                        </div>
                        <div class="product-price">
                            <span class="price-current">$${product.price.toFixed(2)}</span>
                            ${product.originalPrice ? `<span class="price-original">$${product.originalPrice.toFixed(2)}</span>` : ''}
                        </div>
                    </div>
                </div>
            `).join('');
        }
    </script>
</body>
</html>
