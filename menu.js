const menus = {
    1: [
        { name: "Apple juice large", price: 100 },
        { name: "Apple juice Medium", price: 70 }
    ],
    2: [
        { name: "Veg pizza", price: 190 },
        { name: "Garlic Bread", price: 120 }
    ]
    ,3:[
        { name: "CHICKEN BUCKETS", price: 548.57 },
        { name: "Chicken & Fries Bucket", price: 299.50 }
    ]
    ,4:[
        { name: "Full Meals ", price: 250.57 },
        { name: "Chicken Briyani", price: 190.50 }
    ]
};

let cart = [];

function loadMenu() {
    const restaurantId = localStorage.getItem('selectedRestaurant');
    const menuItems = menus[restaurantId];
    const container = document.getElementById('food-items-list');
    container.innerHTML = menuItems.map(item => `
        <div class="food-item">
            <h4>${item.name}</h4>
            <p>₹${item.price}</p>
            <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
        </div>
    `).join('');
}

function addToCart(itemName, price) {
    cart.push({ itemName, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = cart.map(item => `
        <div>${item.itemName} - ₹${item.price}</div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('total').textContent = total;
}

function placeOrder() {
    alert(`Order placed! Total: ₹${document.getElementById('total').textContent}`);
    cart = [];
    updateCart();
}

// Load menu when the page loads
window.onload = loadMenu;