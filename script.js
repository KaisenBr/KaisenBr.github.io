

console.log('oi')
if (!localStorage['cart']) {
    localStorage['cart'] = ''
    console.log('carrinho criado' + localStorage['cart'])

}
else {
    console.log('carrinho já existe: ', localStorage['cart'])
}


// funcoes auxiliares ou uteis
const seleciona = (elemento) => document.querySelector(elemento)
const selecionaTodos = (elemento) => document.querySelectorAll(elemento)
const selecionaid = (elemento) => document.getElementById(elemento)


// Botão adcionar produto
const addCartProductButtons = document.getElementsByClassName("camisaInfo--addButton")
for (var i = 0; i < addCartProductButtons.length; i++) {
    addCartProductButtons[i].addEventListener("click", addProduct)
}

function addProduct(event) {

    console.log('Adicionando produto')
    const button = event.target
    const productInfos = button.parentElement
    const productImage = productInfos.parentElement.getElementsByClassName("ProductImage")[0].src
    const productName = productInfos.getElementsByClassName("ProductName")[0].innerText
    const productSize = productInfos.getElementsByClassName("ProductSize")[0].value
    const productQuant = productInfos.getElementsByClassName("ProductQuant")[0].value
    const productPrice = productInfos.getElementsByClassName("ProductPrice")[0].innerText.replace("R$ ", "").replace(",", ".")


    console.log(productImage)
    console.log(productName)
    console.log(productSize)
    console.log(productQuant)
    console.log(productPrice)

    localStorage['cart'] = localStorage['cart'] + `
    <tr>
    <td><a href="#" class="remove-product-button"><i class="fa-regular fa-circle-xmark"></i></a></td>
    <td><img src="img_aula/products/f2.jpg" alt=""></td>
    <td>Cartoon Astronaut T-shirts</td>
    <td>R$29,99</td>
    <td><input class="ProductQuant" type="number" value="1"></td>
    <td>R$29,99</td>
    </tr>`

    window.location.href = ("carrinho.html")
}

// Botão remover produto
const removeCartProductButtons = document.getElementsByClassName("remove-product-button")
for (var i = 0; i < removeCartProductButtons.length; i++) {
    removeCartProductButtons[i].addEventListener("click", removeProduct)
}

function removeProduct(event) {
    console.log('removendo produto')
    event.target.parentElement.parentElement.parentElement.remove()
    console.log('teste')
    //updateTotal()
}


const checkoutProductButtons = document.getElementsByClassName("normal checkout--button")
for (var i = 0; i < checkoutProductButtons.length; i++) {
    checkoutProductButtons[i].addEventListener("click", checkout)
}

function checkout(event){
    console.log('teste')
    if(localStorage['cart']){
        console.log('teste2')
        localStorage.removeItem('cart')
        document.querySelector(".tbody").innerHTML = ''
    }
}


 
window.addEventListener('beforeunload', function(event) {
    if (event.clientY < 0) {
      // A página está sendo fechada, limpe a LocalStorage aqui
      console.log('oi')
      this.localStorage.removeItem['cart'];
    }
  });