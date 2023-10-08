const maindiv = document.querySelector('#maindiv');
 //const login = document.querySelector('#login')

// const log = localStorage.getItem('login')
// const log1 = JSON.parse(log)
// console.log(log1);



const cartdata = localStorage.getItem('cartitems')
const cartitem = JSON.parse(cartdata)
console.log(cartitem);

const cartarray = [...cartitem]

const phonearray = [
    {
        img: "./asset/oppo f11.jpg",
        brand: 'oppo',
        ram: '4gb',
        rom: '64 gb',
        camera: '48megapx',
        price: 85000
        
    },
    {
        img: "./asset/samsung s20.avif", 
        brand: 'samsung',
        ram: '4gb',
        rom: '64 gb',
        camera: '48megapx',
        price: 55000
    },
    {
        img: "./asset/iphone 14.webp",
        brand: 'iphone',
        ram: '4gb',
        rom: '64 gb',
        camera: '48megapx',
        price: 199000
    },
    {
        img: "./asset/infinix z10.jpg",
        brand: 'infinix',
        ram: '4gb',
        rom: '64 gb',
        camera: '48megapx',
        price: 20000
    },
    {
        img: "./asset/vivo y20.png",
        brand: 'vivo',
        ram: '4gb',
        rom: '64 gb',
        camera: '48megapx',
        price: 40000
    },
    {
        img: "./asset/xiaomi note10.jpg",
        brand: 'xiaomi',
        ram: '4gb',
        rom: '64 gb',
        camera: '48megapx',
        price: 30000
    },
    {
        img: "./asset/techno spark10.webp",
        brand: 'techno',
        ram: '4gb',
        rom: '64 gb',
        camera: '48megapx',
        price: 15000
    }, 
    
]
for (i = 0; i < phonearray.length; i++) {
    maindiv.innerHTML +=`<div class="a"><img class="image"src="${phonearray[i].img}" alt=""> 
    <p><span class='bold'>BRAND:</span> ${phonearray[i].brand}</p>
    <p><span class='bold'>RAM:</span>  ${phonearray[i].ram}</p> 
    <p><span class='bold'>ROM:</span>  ${phonearray[i].rom}</p>
    <p> <span class='bold'>CAMERA:</span>  ${phonearray[i].camera}</p>
    <p><span class='bold'>PRICE:</span>${phonearray[i].price}</p>
    <button class="btn1" onclick="addtocart(${i})">ADD TO CART</button>
    </div>`
    }
    
    function addtocart(index) {
        
        if (cartarray.includes(phonearray[index])){
            
            for(i = 0; i < cartarray.length; i++){
                if(cartarray[i] === phonearray[index]){
                    cartarray[index].quantity += 1
                    
                    
                    
                }
            }   
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
        })
    }
            else{
                phonearray[index].quantity = 1
                cartarray.push(phonearray[index])
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
                // console.log('else' , cartarray );
            }
}

        

function checkouts() {
    window.location = "cart.html";
    const item = JSON.stringify(cartarray);
    localStorage.setItem('cart' , item);
}
// login.addEventListener('click' , () => {
//     window.location = 'login.html'
// })





