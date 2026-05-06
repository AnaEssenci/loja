let filter = "all";
let search = "";

function card(p){
return `
<div class="card">
<h3>${p.nome}</h3>

<a class="btn-primary" href="${p.url}" target="_blank">
Ver produto
</a>

<a class="btn-whatsapp" href="https://wa.me/message/P2WGXAOBKQKNP1">
Comprar
</a>
</div>
`;
}

function render(){

const grid = document.getElementById("grid");
const carousel = document.getElementById("carousel");

if(!grid || !carousel) return;

grid.innerHTML = "";
carousel.innerHTML = "";

let list = produtos;

// filtro
if(filter !== "all"){
list = list.filter(p => p.cat === filter);
}

// busca
if(search.length > 0){
list = list.filter(p =>
p.nome.toLowerCase().includes(search.toLowerCase())
);
}

// grid principal
list.forEach(p=>{
grid.insertAdjacentHTML("beforeend", card(p));
});

// carrossel (mais vendidos)
produtos.slice(0,4).forEach(p=>{
carousel.insertAdjacentHTML("beforeend", card(p));
});
}

function setFilter(f){
filter = f;
render();
}

function searchProduct(value){
search = value;
render();
}

document.addEventListener("DOMContentLoaded", render);