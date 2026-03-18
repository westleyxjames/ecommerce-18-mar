// StyleLoop E-Commerce - Main Application JavaScript
// Complete Cart & E-commerce Functionality

// ===================================
// CART MANAGEMENT
// ===================================
class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.updateCartUI();
    }

    loadCart() {
        const saved = localStorage.getItem('styleloop_cart');
        return saved ? JSON.parse(saved) : [];
    }

    saveCart() {
        localStorage.setItem('styleloop_cart', JSON.stringify(this.items));
        this.updateCartUI();
    }

    addItem(product, quantity = 1, size = null, color = null) {
        const existingItem = this.items.find(item => 
            item.id === product.id && 
            item.size === size && 
            item.color === color
        );

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                ...product,
                quantity,
                size,
                color,
                addedAt: new Date().toISOString()
            });
        }

        this.saveCart();
        this.showToast(`${product.name} added to cart!`, 'success');
        return true;
    }

    removeItem(index) {
        this.items.splice(index, 1);
        this.saveCart();
        this.showToast('Item removed from cart', 'info');
    }

    updateQuantity(index, quantity) {
        if (quantity <= 0) {
            this.removeItem(index);
        } else {
            this.items[index].quantity = quantity;
            this.saveCart();
        }
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    getItemCount() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
    }

    clear() {
        this.items = [];
        this.saveCart();
    }

    updateCartUI() {
        const countElement = document.getElementById('cartCount');
        if (countElement) {
            const count = this.getItemCount();
            countElement.textContent = count;
            countElement.style.display = count > 0 ? 'flex' : 'none';
        }
    }

    showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 6L9 17l-5-5"/>
            </svg>
            <span>${message}</span>
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => toast.classList.add('show'), 10);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

// Initialize cart
const cart = new ShoppingCart();

// ===================================
// PRODUCT FUNCTIONS
// ===================================
function getProductById(id) {
    return allProducts.find(p => p.id === parseInt(id));
}

function getProductBySlug(slug) {
    return allProducts.find(p => p.slug === slug);
}

function getProductsByCategory(category) {
    if (category === 'all') return allProducts;
    return allProducts.filter(p => p.category === category);
}

// ===================================
// ADD TO CART FUNCTION
// ===================================
function addToCart(productId, quantity = 1, size = null, color = null) {
    const product = getProductById(productId);
    if (!product) {
        cart.showToast('Product not found', 'error');
        return false;
    }

    if (!product.inStock) {
        cart.showToast('Product is out of stock', 'error');
        return false;
    }

    cart.addItem(product, quantity, size, color);
    return true;
}

// ===================================
// NAVIGATE TO PRODUCT DETAILS
// ===================================
function viewProduct(productId) {
    localStorage.setItem('selected_product_id', productId);
    window.location.href = 'product-details.html';
}

// ===================================
// HEADER SCROLL EFFECT
// ===================================
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.getElementById('mainHeader');
    if (!header) return;

    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===================================
// MOBILE MENU
// ===================================
function initMobileMenu() {
    const menuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMobileMenu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        if (closeMenu) {
            closeMenu.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        // Close on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

// ===================================
// CART MODAL
// ===================================
function openCartModal() {
    const modal = document.getElementById('cartModal');
    if (!modal) return;

    renderCartModal();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartModal() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function renderCartModal() {
    const cartItemsContainer = document.getElementById('cartModalItems');
    const cartTotalElement = document.getElementById('cartModalTotal');
    const emptyState = document.getElementById('cartEmptyState');
    const cartContent = document.getElementById('cartModalContent');

    if (!cartItemsContainer) return;

    if (cart.items.length === 0) {
        if (emptyState) emptyState.style.display = 'block';
        if (cartContent) cartContent.style.display = 'none';
        return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (cartContent) cartContent.style.display = 'block';

    cartItemsContainer.innerHTML = cart.items.map((item, index) => `
        <div class="cart-modal-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-modal-item-info">
                <h4>${item.name}</h4>
                <p class="cart-modal-item-meta">
                    ${item.size ? `Size: ${item.size}` : ''}
                    ${item.color ? ` • Color: <span style="display:inline-block;width:12px;height:12px;background:${item.color};border-radius:50%;vertical-align:middle;"></span>` : ''}
                </p>
                <div class="cart-modal-item-bottom">
                    <span class="cart-modal-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                    <div class="cart-modal-quantity">
                        <button onclick="cart.updateQuantity(${index}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="cart.updateQuantity(${index}, ${item.quantity + 1})">+</button>
                    </div>
                </div>
            </div>
            <button class="cart-modal-remove" onclick="cart.removeItem(${index}); renderCartModal();">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                </svg>
            </button>
        </div>
    `).join('');

    if (cartTotalElement) {
        cartTotalElement.textContent = `$${cart.getTotal().toFixed(2)}`;
    }
}

// ===================================
// SEARCH FUNCTIONALITY
// ===================================
function initSearch() {
    const searchToggle = document.getElementById('searchToggle');
    const searchModal = document.getElementById('searchModal');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const closeSearch = document.getElementById('closeSearch');

    if (searchToggle && searchModal) {
        searchToggle.addEventListener('click', () => {
            searchModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            if (searchInput) searchInput.focus();
        });

        if (closeSearch) {
            closeSearch.addEventListener('click', () => {
                searchModal.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase().trim();
                
                if (query.length < 2) {
                    searchResults.innerHTML = '<p class="search-hint">Type at least 2 characters to search...</p>';
                    return;
                }

                const results = allProducts.filter(p => 
                    p.name.toLowerCase().includes(query) ||
                    p.description.toLowerCase().includes(query) ||
                    p.category.toLowerCase().includes(query)
                );

                if (results.length === 0) {
                    searchResults.innerHTML = '<p class="no-results">No products found</p>';
                    return;
                }

                searchResults.innerHTML = results.slice(0, 6).map(product => `
                    <div class="search-result-item" onclick="viewProduct(${product.id})">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="search-result-info">
                            <h4>${product.name}</h4>
                            <p>${product.type}</p>
                            <span class="search-result-price">$${product.price.toFixed(2)}</span>
                        </div>
                    </div>
                `).join('');
            });
        }
    }
}

// ===================================
// INITIALIZE ON PAGE LOAD
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize search
    initSearch();
    
    // Initialize hero slider
    initHeroSlider();
    
    // Update cart count
    cart.updateCartUI();
    
    // Close modals on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCartModal();
            const searchModal = document.getElementById('searchModal');
            if (searchModal) {
                searchModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
    
    // Cart toggle
    const cartToggle = document.getElementById('cartToggle');
    if (cartToggle) {
        cartToggle.addEventListener('click', openCartModal);
    }
});

// ===================================
// HERO SLIDER / CAROUSEL
// ===================================
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    let currentSlide = 0;
    let slideInterval;

    if (slides.length === 0) return;

    function showSlide(index) {
        // Remove active class from all
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Add active class to current
        slides[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function goToSlide(index) {
        currentSlide = index;
        showSlide(currentSlide);
        resetInterval();
    }

    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }

    // Dot click handlers
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });

    // Auto-advance slides
    slideInterval = setInterval(nextSlide, 5000);

    // Pause on hover
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', () => clearInterval(slideInterval));
        heroSection.addEventListener('mouseleave', resetInterval);
    }
}

// ===================================
// HELPER FUNCTIONS FOR CART PAGE
// ===================================
function getCart() {
    const saved = localStorage.getItem('styleloop_cart');
    return saved ? JSON.parse(saved) : [];
}

function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const countElement = document.getElementById('cartCount');
    if (countElement) {
        countElement.textContent = count;
        countElement.style.display = count > 0 ? 'flex' : 'none';
    }
    const modalCount = document.getElementById('cartModalCount');
    if (modalCount) {
        modalCount.textContent = count;
    }
}

function removeFromCart(productId, size = null, color = null) {
    let cart = getCart();
    cart = cart.filter(item => !(
        item.productId === productId && 
        item.size === size && 
        item.color === color
    ));
    localStorage.setItem('styleloop_cart', JSON.stringify(cart));
    
    // Refresh the page if on cart page
    if (window.location.pathname.includes('cart.html')) {
        if (typeof renderCartPage === 'function') {
            renderCartPage();
        }
    }
    updateCartCount();
}