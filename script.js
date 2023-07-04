let cart = [] // carrinho

// MAPEAR pizzaJson para gerar lista de pizzas
/*camisasJson.map((item, index) => {
    console.log(item)
    let camisaItem = document.querySelector('pro').cloneNode(true)
    //console.log(camisaItem)
    
})*/
 // fim do MAPEAR pizzaJson para gerar lista de pizzas


// funcoes auxiliares ou uteis
const seleciona = (elemento) => document.querySelector(elemento)
const selecionaTodos = (elemento) => document.querySelectorAll(elemento)
const selecionaid = (elemento) => document.getElementById(elemento)

/*
 const adicionarNoCarrinho = () => {
    seleciona('.camisaInfo--addButton').addEventListener('click', () => {
        console.log('Adicionar no carrinho')

    	// tamanho
	    let size = seleciona('.size--select').value;
	    console.log("Tamanho " + size)
	    // quantidade
        let quantPizzas = seleciona('.quant').value;
    	console.log("Quantidade " + quantPizzas)
        // preco
        let price = seleciona('.price').innerHTML.replace('R$&nbsp;', '')
        console.log("Preço " + price)
    })
}
*/

// Botão adcionar produto
const addCartProductButtons = document.getElementsByClassName("camisaInfo--addButton")
for (var i = 0; i < addCartProductButtons.length; i++) {
    addCartProductButtons[i].addEventListener("click", addProduct)
}

function addProduct(event) {
    console.log('Adicionando produto')
    cart.
    //updateTotal()
  }

// Botão remover produto
const removeCartProductButtons = document.getElementsByClassName("remove-product-button")
for (var i = 0; i < removeCartProductButtons.length; i++) {
  removeCartProductButtons[i].addEventListener("click", removeProduct)
}

function removeProduct(event) {
    console.log('removendo produto')
    event.target.parentElement.parentElement.parentElement.remove()
    //updateTotal()
  }


//adicionarNoCarrinho()