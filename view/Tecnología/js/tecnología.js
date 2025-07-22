// aside menu
const btn = document.getElementById('hamburger-btn')
const closeBtn = document.getElementById('close-btn')
const aside = document.getElementById('side-menu')

function toggleMenu() {
    aside.classList.toggle('open');
}

function closeMenu() {
    aside.classList.remove('open');
}

btn.addEventListener('click', toggleMenu)
closeBtn.addEventListener('click', closeMenu)

//card menu
const btnCart = document.getElementById('shop-card')
const closeCartBtn = document.getElementById('close-cart-btn')
const asideCart = document.getElementById('cart-menu')

// mostrar aside con el carrito de compras
function toggleMenu() {
    asideCart.classList.toggle('open');
}

// cerrar aside con el carrito de compras
function closeMenu() {
    asideCart.classList.remove('open');
}

// eventos para abrir y cerrar aside
btnCart.addEventListener('click', toggleMenu)
closeCartBtn.addEventListener('click', closeMenu)


// funcion para obtener productos desde el localstorage
function getProducts() {
    const row = document.getElementById('table-row')
    row.innerHTML = ''

    let products = []
    if (localStorage.getItem('products') === null) {
        row.innerHTML = '<p>No hay productos en el carrito</p>'
    }

    products = (JSON.parse(localStorage.getItem('products')))
    products.forEach(product => {
        row.innerHTML += `
            <tr>
                <td>${product.product}</td>
                <td>${product.precio}</td>
                <td>${product.cantidad}</td>
                <td>${product.precio * product.cantidad}</td>
                <td><button class="btn-remove" onclick="removeProduct('${product.product}')">X</button></td>
            </tr>
        `
    })
}

// funcion para agregar un producto al carrito y guardar en localstorage
function agregateProducts(product, precio, cantidad) {
    let products = []

    if (localStorage.getItem('products') === null) {
        localStorage.setItem('products', JSON.stringify(products))
    }

    products = (JSON.parse(localStorage.getItem('products')))
    products.push({product, precio, cantidad})
    localStorage.setItem('products', JSON.stringify(products))
    getProducts()
}

// funcion para remover un producto del carrito
function removeProduct(product) {
    let products = []
    let productToDelete = product
    console.log(productToDelete)

    products = (JSON.parse(localStorage.getItem('products')))
    console.log(products)
    let newProducts = products.filter(product => product.product !== productToDelete)

    console.log(newProducts)
    localStorage.setItem('products', JSON.stringify(newProducts))
    getProducts()
}

// funcion para limpiar el carrito y localstorage
function clearCart() {
    localStorage.clear()
    getProducts()
}


agregateProducts('product1', 100, 1)
agregateProducts('product2', 200, 2)