function orderNow(cookie) {
    alert("Thank you for ordering " + cookie + " 🤎");
}

function orderNow(cookieName) {
    alert("Thank you for ordering " + cookieName + " 🍪");
}

function orderNow(cookieName) {
    document.body.insertAdjacentHTML(
        "beforeend",
        `<div class="popup">
            <p>${cookieName} added to cart! 🍪</p>
        </div>`
    );

    setTimeout(() => {
        document.querySelector(".popup").remove();
    }, 2000);
}

let cart = [];
let total = 0;

function addToCart(name, price, button) {
    let qty = button.parentElement.querySelector(".qty").value;

    let item = {
        name: name,
        price: price,
        qty: parseInt(qty)
    };

    cart.push(item);
    total += price * qty;

    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    let count = 0;
    total = 0;

    cart.forEach((item, index) => {
        count += item.qty;
        total += item.price * item.qty;

        cartItems.innerHTML += `
            <div>
                ${item.name} x ${item.qty}
                - $${item.price * item.qty}
                <button onclick="removeItem(${index})">❌</button>
            </div>
        `;
    });

    document.getElementById("cart-count").innerText = count;
    document.getElementById("cart-total").innerText = total;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function toggleCart() {
    document.getElementById("cartPanel").classList.toggle("active");
}

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});