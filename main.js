const products = document.querySelector('.products-container');
const productsCart = document.querySelector('.cart-container');
const total = document.querySelector('.total');
const categories = document.querySelector('.categories');
const categoriesList = document.querySelectorAll('.category');
const btnLoad = document.querySelector('.btn-load');
const buyBtn = document.querySelector('.btn-buy');
const barsBtn = document.querySelector('.menu-label');
const cartBtn = document.querySelector('.cart-label');
const cartMenu = document.querySelector('.cart');
const barsMenu = document.querySelector('.navbar-list');
const overlay = document.querySelector('.overlay');

let cart =JSON.parse(localStorage.getItem('cart')) || [];


 const saveLocalStorage = cartList => {
   localStorage.setItem('cart', JSON.stringify(cartList));
   };




const renderProduct = product => {
    const { id, name, bid, user, cardImg } = product;
    return`
    <div class="box">
        <img src=${cardImg} alt="">
        <div class="content">
            <h3>${name}</h3>
            <p>${user}</p>
            <span>$${bid}</span>
            <div class="btn">
                <button class="btn-add"
                data-id='${id}'
                data-name='${name}'
                data-bid='${bid}'
                data-img='${cardImg}'>Agregar</button>
            </div>
        </div>
</div>`;
};



const renderProducts = (category, index) => {
if (category === 'todas') {
    products.innerHTML += allProducts.productList[index]
    .map(renderProduct)
    .join('');
    return;
}
const productList = productsData.filter(p => p.category === category);
products.innerHTML = productList.map(renderProduct).join('');
};


const changeFilterState = e => {
const selectedCategory = e.target.dataset.category;
const categories = [...categoriesList];
categories.forEach((category)=> {
  if(category.dataset.category !== selectedCategory){
    category.classList.remove('active');
  }else {
    category.classList.add('active');
  }
});
if (selectedCategory !== 'todas') {
  btnLoad.classList.add('hidden');
} else {
  btnLoad.classList.remove('hidden');
}

};


const filterProducts = e => {
  if(!e.target.classList.contains('category')) return;
  changeFilterState(e);
  if(e.target.dataset.category.toLowerCase() === 'todas') {
    products.innerHTML = '';
    renderProducts('todas', 0);
  } else {
    renderProducts(e.target.dataset.category);
  };
};





const showMore = () => {
  renderProducts('todas', allProducts.next);
  allProducts.next++;
  if (allProducts.next === allProducts.limit){
    btnLoad.classlist.add('hidden');
  }
};




const init = () => {
document.addEventListener('DOMContentLoaded', renderProducts
('todas', 0));
categories.addEventListener('click', filterProducts);
btnLoad.addEventListener('click', showMore);

};

init();