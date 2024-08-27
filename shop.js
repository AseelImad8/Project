
let products = document.querySelectorAll(".product-item");

for (var i = 0; i < products.length; i++) {
    products[i].addEventListener('click', function (event) {
        window.location.href = "product.html";
    });
}

const readBottom = document.querySelector(".show-more");
const moreProducts = document.querySelectorAll(".show");
console.log(moreProducts);


readBottom.addEventListener('click', function () {
    let text = readBottom.textContent;
    if (text == "Show more") {
        readBottom.textContent = "show less";
        for (var i = 0; i < moreProducts.length; i++) {
            moreProducts[i].classList.remove('more-product');
        }
    }
    else {
        readBottom.textContent = "Show more";
        for (var i = 0; i < moreProducts.length; i++) {
            moreProducts[i].classList.add('more-product');
        }
    }
});
