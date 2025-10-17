// let originalprice = (document.getElementsByClassName("original-price")[0].textContent.replace('$', ''));    
// console.log(originalprice);
// let currentprice = (document.getElementsByClassName("current-price"));
// console.log(currentprice);
// let productcard = document.getElementsByClassName("product-card")[0].textContent;
// console.log(productcard);

let currentpricelement = document.getElementsByClassName("current-price")[0];
console.log(currentpricelement);

let currentprice = currentpricelement.textContent;
console.log(currentprice);

let currentpricevalue = (currentprice.replace('$', ''));
console.log(currentpricevalue);

finalprice = parseInt(currentpricevalue) + 100;
console.log(finalprice);

let mrp = document.getElementsByClassName("original-price");
console.log(mrp);

let mrpvalue = mrp[0].textContent;
console.log(mrpvalue);

let mrpvalueOnly = (mrpvalue.replace('$', ''));
console.log(mrpvalueOnly);

let discount = mrpvalueOnly - (mrpvalueOnly * 100 / 100);
console.log(discount);


// const discount = 11.77;
// const finalprice = originalprice - (originalprice * discount / 100); 
// console.log("Final Price: $" + finalprice)
let Buttonelement = document.getElementsByClassName("add-to-cart-btn")[0];
 
Buttonelement.addEventListener('click', function() {
    let Button = Buttonelement.textContent;
    console.log(Button)
    Buttonelement.textContent = "Added to Cart";
    alert("added to cart");
})



