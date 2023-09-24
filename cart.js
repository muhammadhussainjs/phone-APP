
const cartdiv = document.querySelector('#cartdiv')
const para = document.querySelector('#para')

const data = localStorage.getItem('cartitems')
const cartitem = JSON.parse(data);
console.log(cartitem)


function  backs() {
    window.location = 'index.html'
}

function rendercart() {
for(i = 0; i < cartitem.length; i++){
    cartdiv.innerHTML +=`<div class='a'>
    <img class="image"src="${cartitem[i].img}" alt=""> 
    <p><span class='bold'>brand:</span> ${cartitem[i].brand}</p>
    <p> <span class='bold'>ram:</span> ${cartitem[i].ram}</p> 
    <p> <span class='bold'>rom:</span> ${cartitem[i].rom}</p> 
    <p> <span class='bold'>camera:</span> ${cartitem[i].camera}</p>
    <p><span class='bold'>price:</span>${cartitem[i].price}</p>
    <p><span class='bold'>quantity:</span>${cartitem[i].quantity}</p>
    <p><span class='bold'>total price:</span>${cartitem[i].totalprice=cartitem[i].price*cartitem[i].quantity}</p>
    <button class='btn3' onclick='increase(${i})'>+</button>
    <button class='btn3' onclick='decrease(${i})'>-</button>
    <button  class='btn4' onclick='deletes(${i})'>delete</button>

    </div>`
}
}
rendercart()

function increase(index) {
    cartdiv.innerHTML = ''
    console.log(cartitem[index])
    cartitem[index].quantity += 1 
    rendercart()
}
function decrease(index) {
    cartdiv.innerHTML = ''
    console.log(cartitem[index])
    cartitem[index].quantity -= 1 
    rendercart()
    if(cartitem[index].quantity == 0 ){
        cartdiv.innerHTML = ''
        cartitem.splice(index , 1)
        rendercart()
    }
}
function deletes(index) {
    cartdiv.innerHTML = ''
    cartitem.splice(index , 1)
    rendercart()
}

function totalprice() {
    para.innerHTML = ""
    let totalprice = 0
    for(i = 0; i < cartitem.length; i++){
        const itemtotal = cartitem[i].totalprice
        totalprice+=itemtotal
        
    }
    para.innerHTML= `<p>total price: ${totalprice}</p>`

}

















