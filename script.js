if (!localStorage['cart']) {
    localStorage['cart'] = ''
    console.log('carrinho criado' + localStorage['cart'])

}
else {
    console.log('carrinho já existe: ', localStorage['cart'])
}

if (!localStorage['login']) {
    localStorage['login'] = ''
    console.log('login criado' + localStorage['login'])

}
else {
    console.log('login já existe: ', localStorage['login'])
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
    const productPrice = productInfos.getElementsByClassName("ProductPrice")[0].innerText//.replace("R$ ", "").replace(",", ".")

    console.log(productSize)
    if (productSize == "Tamanho") {
        alert("Por favor insira um tamanho válido")
        return
    }
    console.log(productImage)
    console.log(productName)
    console.log(productSize)
    console.log(productQuant)
    console.log(productPrice)

    localStorage['cart'] = localStorage['cart'] +
        `
    <tr>
    <td><a href="#" class="remove-product-button"><i class="fa-regular fa-circle-xmark"></i></a></td>
    <td><img src="${productImage}" alt=""></td>
    <td>${productName}</td>
    <td class="product--price">${productPrice}</td>
    <td><input class="ProductQuant" type="number" min="0" value="${productQuant}"></td>
    <td>${productSize}</td>
    </tr>
    `

    /*
    localStorage['cart'] = localStorage['cart'] + `
    <tr>
    <td><a href="#" class="remove-product-button"><i class="${fa-regular fa-circle-xmark}"></i></a></td>
    <td><img src="img_aula/products/f2.jpg" alt=""></td>
    <td>Cartoon Astronaut T-shirts</td>
    <td>R$29,99</td>
    <td><input class="ProductQuant" type="number" value="1"></td>
    <td>R$29,99</td>
    </tr>`
*/


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
    localStorage['cart'] = document.querySelector(".tbody").innerHTML
    subtotal()
    console.log('teste')
    //updateTotal()
}


const checkoutProductButtons = document.getElementsByClassName("normal checkout--button")
for (var i = 0; i < checkoutProductButtons.length; i++) {
    checkoutProductButtons[i].addEventListener("click", checkout)
}


function subtotal() {
    let total = 0
    const checkoutProductprice = document.getElementsByClassName("product--price")
    const checkoutProductquant = document.getElementsByClassName("ProductQuant")
    for (var i = 0; i < checkoutProductprice.length; i++) {
        console.log(checkoutProductprice[i])
        console.log(checkoutProductquant[i])
        console.log(checkoutProductprice[i].innerText)
        total += checkoutProductprice[i].innerText.replace("R$ ", "").replace(",", ".") * checkoutProductquant[i].value

    }
    console.log(total)

    const finalprice = document.getElementsByClassName("finalValue")
    for (var i = 0; i < finalprice.length; i++) {
        finalprice[i].innerText = total.toFixed(2)
        finalprice[i].innerText = "R$ " + finalprice[i].innerText.replace(".", ",")
    }
}

subtotal()

function checkout(event) {
    if(localStorage['login']==''){
        alert('Ops, você ainda não fez login.')
        return
    }
    if (localStorage['cart']) {
        alert("Obrigado pela confiança, " + localStorage['login'] + "! Sua compra deu um total de " + document.getElementsByClassName("finalValue")[0].innerText)
        clearCart()
        subtotal()
    }
}

function quantidadeAlterada() {
    const checkoutQuantInput = document.getElementsByClassName("ProductQuant")
    for (var i = 0; i < checkoutQuantInput.length; i++) {
        checkoutQuantInput[i].addEventListener("input", subtotal)
    }
}


function clearCart() {
    localStorage.removeItem('cart')
    document.querySelector(".tbody").innerHTML = ''
}

window.addEventListener('beforeunload', function (event) {
    if (event.clientY < 0) {
        // A página está sendo fechada, limpe a LocalStorage aqui
        console.log('oi')
        this.localStorage.removeItem['cart'];
    }
});


function loginButtonLister() {
    const loginButton = document.getElementsByClassName("login--button")
    loginButton[0].addEventListener("click", login)

}

function login() {
    if (document.getElementsByClassName("logininput")[0].value != '') {
        if (document.getElementsByClassName("senhainput")[0].value != '') {
            alert("Olá, " + document.getElementsByClassName("logininput")[0].value)
            localStorage['login'] = document.getElementsByClassName("logininput")[0].value
        }else{
            alert('Senha Inválida')
        }
    }
}

function loginName() {

    if (localStorage['login']) {
        if (localStorage['login'] != '') {
            console.log(localStorage['login'])
            document.getElementsByClassName("logintitle")[0].innerText = localStorage['login']
        }
    }
}

quantidadeAlterada()
loginName()
loginButtonLister()
