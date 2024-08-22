
let products = document.querySelectorAll(".product-item");

for (var i = 0; i < products.length; i++) {
    products[i].addEventListener('click', function (event) {
        window.location.href = "product.html";
    });
}

const readBottom = document.querySelector("read-more");
const moreProducts = document.querySelectorAll(".more-product");
console.log(moreProducts);