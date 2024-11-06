let cartCount = 0;
let cartItems = [];
function addToCart(name, image, price) {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
    const item = { name, image, price };
    cartItems.push(item);
    alert("Your item has been added!!!!!!!")
    updateCartDisplay();
}
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";
    cartItems.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <p class="cart-item-title">${item.name}</p>
                <p class="cart-item-price">$${item.price}</p>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
}