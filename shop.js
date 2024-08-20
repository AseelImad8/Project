
let products = document.querySelectorAll(".product-item");
console.log(products);

for (var i = 0; i < products.length; i++) {
    products[i].addEventListener('click', function (event) {
        window.location.href = "product.html";
    });
}

const readBottom = document.querySelector("read-more");