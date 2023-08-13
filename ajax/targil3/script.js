async function getProducts(){
    const response = await fetch("https://fakestoreapi.com/products");
    if(!response.ok){
        throw new Error("HTTP error " + response.status);
    }
    const data = await response.json();
    return data;
}

getProducts().then(data => {
    renderProducts(data);
}).catch(error => {console.log(error.message)});

function createProductElement(product){
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.title;

    const productTitle = document.createElement("h3");
    productTitle.textContent = product.title;

    const productPrice = document.createElement("p");
    productPrice.textContent = product.price;

    productElement.append(productImage, productTitle, productPrice);

    return productElement;
};

function renderProducts(products){
    const productsElement = document.querySelector(".products");
    products.forEach(product => {
        const productElement = createProductElement(product);
        productsElement.appendChild(productElement);
    });
}