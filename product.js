var products = document.querySelectorAll(".arrival-item");
console.log(products);

for (var i = 0; i < products.length; i++) {
    products[i].addEventListener('click', function (event) {
        window.location.href = "product.html";
    });
}