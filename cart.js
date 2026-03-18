// Cart Page JavaScript

let cartData = [];
let selectedPaymentMethod = 'cod'; // COD is default

// Load cart on page load
function loadCart() {
    cartData = JSON.parse(localStorage.getItem('styleLoopCart')) || [];
    renderCart();
    updateCartSummary();
}

// Render cart items
function renderCart() {
    const container = document.getElementById('cartItemsContainer');
    const emptyMessage = document.getElementById('emptyCartMessage');
    
    if (cartData.length === 0) {
        container.style.display = 'none';
        emptyMessage.style.display = 'block';
        return;
    }
    
    container.style.display = 'block';
    emptyMessage.style.display = 'none';
    
    container.innerHTML = cartData.map((item, index) => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <div class="cart-item-meta">
                    <span>Size: ${item.size || 'M'}</span>
                    <span>Color: ${item.color || 'Black'}</span>
                </div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-quantity">
                <button onclick="updateQuantity(${index}, -1)">-</button>
                <input type="number" value="${item.quantity}" readonly>
                <button onclick="updateQuantity(${index}, 1)">+</button>
            </div>
            <div class="cart-item-total">
                $${(item.price * item.quantity).toFixed(2)}
            </div>
            <button class="cart-item-remove" onclick="removeItem(${index})">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
            </button>
        </div>
    `).join('');
}

// Update quantity
function updateQuantity(index, change) {
    if (cartData[index]) {
        cartData[index].quantity += change;
        
        if (cartData[index].quantity < 1) {
            cartData[index].quantity = 1;
        }
        
        if (cartData[index].quantity > 10) {
            cartData[index].quantity = 10;
        }
        
        localStorage.setItem('styleLoopCart', JSON.stringify(cartData));
        renderCart();
        updateCartSummary();
        updateCartCount();
    }
}

// Remove item
function removeItem(index) {
    if (confirm('Are you sure you want to remove this item?')) {
        cartData.splice(index, 1);
        localStorage.setItem('styleLoopCart', JSON.stringify(cartData));
        renderCart();
        updateCartSummary();
        updateCartCount();
    }
}

// Update cart summary
function updateCartSummary() {
    const subtotal = cartData.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 100 ? 0 : 15;
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax;
    
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Apply promo code
function applyPromo() {
    const promoInput = document.getElementById('promoInput');
    const promoCode = promoInput.value.trim().toUpperCase();
    
    if (promoCode === 'SAVE10') {
        showToast('Promo code applied! 10% discount added.');
        promoInput.value = '';
    } else if (promoCode === '') {
        showToast('Please enter a promo code.');
    } else {
        showToast('Invalid promo code.');
    }
}

// Proceed to checkout
function proceedToCheckout() {
    if (cartData.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    
    document.getElementById('checkoutModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close checkout modal
function closeCheckoutModal() {
    document.getElementById('checkoutModal').classList.remove('active');
    document.body.style.overflow = '';
}

// Checkout steps navigation
function goToPayment() {
    const form = document.getElementById('shippingForm');
    
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    document.getElementById('shippingForm').style.display = 'none';
    document.getElementById('paymentForm').style.display = 'block';
    
    updateStepIndicator(2);
}

function backToShipping() {
    document.getElementById('paymentForm').style.display = 'none';
    document.getElementById('shippingForm').style.display = 'block';
    updateStepIndicator(1);
}

function goToReview() {
    document.getElementById('paymentForm').style.display = 'none';
    document.getElementById('reviewForm').style.display = 'block';
    
    // Populate review section
    populateReview();
    updateStepIndicator(3);
}

function backToPayment() {
    document.getElementById('reviewForm').style.display = 'none';
    document.getElementById('paymentForm').style.display = 'block';
    updateStepIndicator(2);
}

function updateStepIndicator(step) {
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.querySelector(`.step[data-step="${step}"]`).classList.add('active');
}

// Select payment method
function selectPayment(method) {
    selectedPaymentMethod = method;
    const cardDetails = document.getElementById('cardDetails');
    
    if (method === 'card') {
        cardDetails.style.display = 'block';
    } else {
        cardDetails.style.display = 'none';
    }
}

// Populate review section
function populateReview() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zipCode = document.getElementById('zipCode').value;
    
    document.getElementById('reviewShipping').innerHTML = `
        <p><strong>${firstName} ${lastName}</strong></p>
        <p>${address}</p>
        <p>${city}, ${state} ${zipCode}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
    `;
    
    const paymentMethods = {
        'cod': 'Cash on Delivery',
        'card': 'Credit/Debit Card',
        'paypal': 'PayPal'
    };
    
    document.getElementById('reviewPayment').innerHTML = `
        <p><strong>${paymentMethods[selectedPaymentMethod]}</strong></p>
    `;
    
    document.getElementById('reviewItems').innerHTML = cartData.map(item => `
        <div class="review-item-row">
            <img src="${item.image}" alt="${item.name}">
            <div>
                <strong>${item.name}</strong>
                <small>Qty: ${item.quantity} | Size: ${item.size} | Color: ${item.color}</small>
            </div>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');
    
    // Update totals
    const subtotal = cartData.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 100 ? 0 : 15;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;
    
    document.getElementById('reviewSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('reviewShipping2').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    document.getElementById('reviewTax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('reviewTotal').textContent = `$${total.toFixed(2)}`;
}

// Place order
function placeOrder() {
    // Simulate order processing
    showToast('Processing your order...');
    
    setTimeout(() => {
        // Clear cart
        localStorage.removeItem('styleLoopCart');
        cartData = [];
        
        // Show success message
        alert('Order placed successfully! Thank you for shopping with StyleLoop. You will receive an email confirmation shortly.');
        
        // Close modal and redirect
        closeCheckoutModal();
        window.location.href = 'index.html';
    }, 2000);
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

// Update cart count in header
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('styleLoopCart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    updateCartCount();
});