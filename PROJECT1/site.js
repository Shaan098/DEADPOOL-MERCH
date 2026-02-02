const menu = document.getElementById("menu");
const nav = document.getElementById("nav");


menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});


document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


let cart = JSON.parse(localStorage.getItem('deadpoolCart')) || [];

function addToCart(button) {
    const product = {
        id: button.dataset.id,
        name: button.dataset.name,
        price: parseFloat(button.dataset.price),
        image: button.dataset.image,
        quantity: 1
    };

    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(product);
    }

  
    localStorage.setItem('deadpoolCart', JSON.stringify(cart));

    updateCartCount();

    button.textContent = 'Added! ✓';
    button.style.background = '#28a745';

    setTimeout(() => {
        button.textContent = 'Add to Cart';
        button.style.background = '';
    }, 1500);
}


function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;

       
        cartCount.style.transform = 'scale(1.3)';
        setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
        }, 200);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});
