// ===================================
// PRODUCTS DATA - FRESH IMAGES
// ===================================
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

// ===================================
// SHOPPING CART
// ===================================
let shoppingCart = JSON.parse(localStorage.getItem('styleLoopCart')) || [];

function updateCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    const total = shoppingCart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = total;
}

function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = shoppingCart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        shoppingCart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('styleLoopCart', JSON.stringify(shoppingCart));
    updateCartDisplay();
    showToast(`${product.name} added to cart!`);
}

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

// Add toast animations
const toastStyles = document.createElement('style');
toastStyles.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(toastStyles);

// ===================================
// RENDER PRODUCTS
// ===================================
function renderProducts(filter = 'all') {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    const filtered = filter === 'all' 
        ? productsData 
        : productsData.filter(p => p.category === filter);
    
    grid.innerHTML = filtered.map(product => `
        <div class="product-card-modern" onclick="goToProductDetails(${product.id})" style="cursor: pointer;">
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-tag">${product.badge}</div>
                <div class="product-quick-actions">
                    <button class="quick-action-btn" onclick="event.stopPropagation(); addToWishlist(${product.id})" aria-label="Add to wishlist">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                    </button>
                    <button class="quick-action-btn" onclick="event.stopPropagation(); quickView(${product.id})" aria-label="Quick view">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="product-details">
                <div class="product-cat">${product.type}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <div class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</div>
                    <span class="rating-text">(${product.rating})</span>
                </div>
                <div class="product-bottom">
                    <div class="product-price">$${product.price}</div>
                    <button class="add-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                            <line x1="3" y1="6" x2="21" y2="6"/>
                            <path d="M16 10a4 4 0 0 1-8 0"/>
                        </svg>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Navigate to product details page
function goToProductDetails(productId) {
    // Save product ID to localStorage
    localStorage.setItem('selectedProductId', productId);
    // Navigate to product details page
    window.location.href = 'product-details.html';
}

// ===================================
// WISHLIST & QUICK VIEW
// ===================================
function addToWishlist(productId) {
    showToast('Added to wishlist!');
}

function quickView(productId) {
    const product = productsData.find(p => p.id === productId);
    if (product) {
        showToast(`Quick View: ${product.name}`);
    }
}

// ===================================
// FILTER FUNCTIONALITY
// ===================================
function initializeFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const filter = tab.getAttribute('data-filter');
            renderProducts(filter);
        });
    });
}

// ===================================
// HEADER SCROLL EFFECT
// ===================================
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===================================
// MOBILE MENU
// ===================================
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
    
    // Close menu when clicking nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            mainNav.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
}

// ===================================
// SMOOTH SCROLL NAVIGATION
// ===================================
document.querySelectorAll('.nav-item, a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu
            mainNav.classList.remove('active');
            
            // Update active state
            document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
            if (link.classList.contains('nav-item')) {
                link.classList.add('active');
            }
        }
    });
});

// Update active nav on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + header.offsetHeight + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${sectionId}`) {
                    item.classList.add('active');
                }
            });
        }
    });
});

// ===================================
// MODAL FUNCTIONALITY
// ===================================
const searchToggle = document.getElementById('searchToggle');
const searchModal = document.getElementById('searchModal');
const closeSearch = document.getElementById('closeSearch');

const cartToggle = document.getElementById('cartToggle');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const startShopping = document.getElementById('startShopping');

// Search Modal
if (searchToggle) {
    searchToggle.addEventListener('click', () => {
        searchModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(() => document.getElementById('searchInput')?.focus(), 100);
    });
}

if (closeSearch) {
    closeSearch.addEventListener('click', () => {
        searchModal.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Cart Toggle
cartToggle.addEventListener('click', () => {
    cartModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCartModal();
});

// Start Shopping from Empty Cart
const startShoppingBtn = document.getElementById('startShopping');
if (startShoppingBtn) {
    startShoppingBtn.addEventListener('click', () => {
        cartModal.classList.remove('active');
        document.body.style.overflow = '';
        document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
    });
}

if (closeCart) {
    closeCart.addEventListener('click', () => {
        cartModal.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Close modals on backdrop click
[searchModal, cartModal].forEach(modal => {
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});

// Close modals on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchModal?.classList.remove('active');
        cartModal?.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ===================================
// SEARCH FUNCTIONALITY
// ===================================
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.toLowerCase().trim();
        
        if (!query) return;
        
        const results = productsData.filter(p => 
            p.name.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query) ||
            p.type.toLowerCase().includes(query)
        );
        
        if (results.length > 0) {
            searchResults.innerHTML = `
                <h4 style="margin: 2rem 0 1rem; color: var(--accent-teal); font-family: var(--font-display);">
                    Found ${results.length} product${results.length > 1 ? 's' : ''}
                </h4>
                <div style="display: grid; gap: 1.5rem;">
                    ${results.map(product => `
                        <div style="display: flex; gap: 1.5rem; padding: 1.5rem; background: var(--bg-elevated); border-radius: 1rem; border: 1px solid var(--border); cursor: pointer;" onclick="quickView(${product.id})">
                            <img src="${product.image}" alt="${product.name}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 0.75rem;">
                            <div style="flex: 1;">
                                <div style="font-size: 0.875rem; color: var(--accent-teal); font-weight: 600; margin-bottom: 0.5rem;">${product.type}</div>
                                <h5 style="font-family: var(--font-display); font-size: 1.125rem; margin-bottom: 0.5rem;">${product.name}</h5>
                                <div style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 0.75rem;">Rating: ${product.rating} ★</div>
                                <div style="font-size: 1.25rem; font-weight: 700; color: var(--accent-coral);">$${product.price}</div>
                            </div>
                            <button onclick="event.stopPropagation(); addToCart(${product.id})" class="btn-primary" style="align-self: center; padding: 0.75rem 1.5rem; font-size: 0.875rem;">
                                Add to Cart
                            </button>
                        </div>
                    `).join('')}
                </div>
            `;
        } else {
            searchResults.innerHTML = `
                <div style="text-align: center; padding: 3rem; color: var(--text-secondary);">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 1rem; color: var(--text-tertiary);">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.35-4.35"/>
                    </svg>
                    <h4 style="font-family: var(--font-display); margin-bottom: 0.5rem;">No products found</h4>
                    <p>Try searching for something else</p>
                </div>
            `;
        }
    });
}

// ===================================
// NEWSLETTER FORM
// ===================================
const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Thank you for subscribing to StyleLoop!');
        newsletterForm.reset();
    });
}

// ===================================
// CONTACT FORM
// ===================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Message sent successfully! We\'ll get back to you soon.');
        contactForm.reset();
    });
}

// ===================================
// INTERSECTION OBSERVER
// ===================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// ===================================
// INITIALIZE
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Render products
    renderProducts();
    
    // Update cart count
    updateCartDisplay();
    
    // Initialize filters
    initializeFilters();
    
    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('.product-card-modern, .feature-item, .info-card, .collection-large, .collection-small');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
    
    // Page load animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.6s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Console branding
    console.log('%c StyleLoop ', 'background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%); color: white; font-size: 24px; font-weight: bold; padding: 12px 24px; border-radius: 8px;');
    console.log('%c Modern Fashion E-commerce Platform ', 'color: #FF6B6B; font-size: 16px; font-weight: 600; margin-top: 8px;');
    console.log('%c Miami Beach, FL | 2026 ', 'color: #4ECDC4; font-size: 14px; margin-top: 4px;');
});

// ===================================
// ACCESSIBILITY
// ===================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

const a11yStyles = document.createElement('style');
a11yStyles.textContent = `
    .keyboard-nav *:focus {
        outline: 2px solid var(--accent-coral);
        outline-offset: 3px;
    }
`;
document.head.appendChild(a11yStyles);

// ===================================
// CART MODAL RENDERING
// ===================================
function renderCartModal() {
    const cartBody = document.getElementById('cartBody');
    const cart = JSON.parse(localStorage.getItem('styleLoopCart')) || [];
    
    if (cart.length === 0) {
        cartBody.innerHTML = `
            <div class="empty-state">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
                <h4>Your cart is empty</h4>
                <p>Start adding some amazing products!</p>
                <button class="btn-primary" onclick="closeCartAndShop()">Start Shopping</button>
            </div>
        `;
        return;
    }
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartBody.innerHTML = `
        <div class="cart-items-modal">
            ${cart.map(item => `
                <div class="cart-item-modal">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>$${item.price.toFixed(2)} × ${item.quantity}</p>
                    </div>
                    <button class="remove-item-modal" onclick="removeFromCart(${item.id})">×</button>
                </div>
            `).join('')}
        </div>
        <div class="cart-modal-footer">
            <div class="cart-subtotal">
                <span>Subtotal:</span>
                <span class="subtotal-amount">$${subtotal.toFixed(2)}</span>
            </div>
            <a href="cart.html" class="btn-primary btn-full">View Cart</a>
            <button class="btn-outline btn-full" onclick="closeCartModal()">Continue Shopping</button>
        </div>
    `;
}

function closeCartAndShop() {
    document.getElementById('cartModal').classList.remove('active');
    document.body.style.overflow = '';
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}

function closeCartModal() {
    document.getElementById('cartModal').classList.remove('active');
    document.body.style.overflow = '';
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('styleLoopCart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('styleLoopCart', JSON.stringify(cart));
    updateCartCount();
    renderCartModal();
    showToast('Item removed from cart');
}