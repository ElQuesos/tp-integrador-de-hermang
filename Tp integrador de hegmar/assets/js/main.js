let lista = [];
class Producto{
    constructor(nombre, precio, stock, img){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
    }
}
url1="https://i.scdn.co/image/ab67616d0000b273c3f8d22366e8d0c0594129bb";
url2="https://i.kym-cdn.com/entries/icons/original/000/042/865/Huh_meme_dog_banner.jpg";
url3="https://cdnb.artstation.com/p/assets/images/images/040/748/419/large/christopher-sanchez-goblino-final-passes-19.jpg?1629776796";
const prod1 = new Producto("the void", 999, 999999999,url1);
const prod2 = new Producto("el huh", 20, 2,url2);
const prod3 = new Producto("zohar", 17, 1,url3);
let boxbuy = document.querySelector(".boxbuy");
if (!localStorage.getItem("prod")){
    lista=[prod1,prod2,prod3];
    localStorage.setItem("prod", JSON.stringify(lista));
    lista.forEach(prod =>{
    boxbuy.innerHTML +=  `
    <div class="card" style="width: 18rem;">
        <img src=${prod.img} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${prod.nombre}</h5>
            <p class="card-text">${prod.stock}</p>
            <p class="card-text">${prod.precio}</p>
            <a href="#" class="btn btn-primary">Add to cart</a>
        </div>
    </div>
    `
    })
}
else{
lista=[prod1,prod2,prod3];    
localStorage.setItem("prod",JSON.stringify(lista))
lista.forEach(prod =>{
    boxbuy.innerHTML +=  `
    <div class="card" style="width: 18rem;">
        <img src=${prod.img} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${prod.nombre}</h5>
            <p class="card-text">${prod.stock}</p>
            <p class="card-text">${prod.precio}</p>
            <a href="#" class="btn btn-primary">Add to cart</a>
        </div>
    </div>
    `
})}
let nombre =document.querySelector("#innombre");
let precio =document.querySelector("#inprecio");
let stock =document.querySelector("#instock");
let img =document.querySelector("#inmage");
crear=()=>{
nombre = nombre.value;
precio = precio.value;
stock = stock.value;
img = img.value;
let nuevoprod={nombre:nombre,precio:precio,stock:stock,img:img};
lista.push(nuevoprod);
localStorage.setItem("prod",JSON.stringify(lista));
    boxbuy.innerHTML +=  `
    <div class="card" style="width: 18rem;">
        <img src="${nuevoprod.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${nuevoprod.nombre}</h5>
            <p class="card-text">${nuevoprod.stock}</p>
            <p class="card-text">${nuevoprod.precio}</p>
            <a href="#" class="btn btn-primary">Add to cart</a>
        </div>
    </div>
    `
}
let boton = document.getElementById("buttonsave");
boton.addEventListener("click", crear);
