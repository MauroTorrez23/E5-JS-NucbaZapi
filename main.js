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




//localStorage
let cart = JSON.parse(localStorage.getItem(`cart`)) || [];

const saveLocalStorage = cartlist => {
    localStorage.setItem(`cart`, JSON.stringify(cartlist));
};

//Carrito
const renderCartProduct = cartProduct => {
    const {id, name,bid,img,quantity} = cartProduct; //completar con los datos requeridos.
    return `
    <div class= "cart-item>
       <img src="${img}"/>
       <div class="item-info">
        <h3 class="item-title">${name}</h3>
        <span class="item-price">${bid}</span>
    </div>
    <div class="item-handler">
      <span class="quantity-handler down" data-id=${id}>-</span>
      <span class="item-quantity">${quantity}</span>
      <span class="quantity-handler up" data-id=${id}>+</span>
    </div>
  </div>
  `;
};

//rendercart
const renderCart = cartlist => {
    if (!cartlist.length) {
        productsCart.innerHTML = `<p class="empty-msg">Vacio</p>`;
        return;
    }
    productsCart.innerHTML = cartlist.map(renderCartProduct).join('');
}

//TotalaPagar 
const showTotal = cartlist => {
    total.innerHTML = `${cartlist
        .reduce((acc,cur) => acc + Number(cur.bid)* cur.quantity,0)
        .toFixed(2)} pesos`;
}

//ON/OFF boton compra 
const disableBuyBtn = () => {
    if(!cart.length) {
        buyBtn.classList.add('disabled');
    } else {
        buyBtn.classList.remove('disabled');
    }
    };

//agregar/quitar producto
const handleQuantity = e => {
    if (e.target,classList.contains('down')) {
        const existingCartItem = cart.find(item =>item.id === e.target.dataset.id);


        if(existingCartItem.quantity === 1) {
            if(window.confirm('¿Eliminar Producto?')) {
                cart = cart.filter(prod => prod.id !== existingCartItem.id);
                saveLocalStorage(cart);
                renderCart(cart);
                showTotal(cart);
                disableBuyBtn();
                return;
            }
        }

        cart = cart.map(item => {
            return item.id === existingCartItem-id
            ? { ...item, quantity: Number(item.quantity) - 1}
            : item;
        });
    
    }else if (e.target.classList.contains('up')) {
    const existingCartItem = cart.find(item => item.id === e.target.dataset.id);

    cart = cart.map(item => {
        return item.id === existingCartItem.id
        ? { ...item, quantity: Number(item.quantity) + 1}
        : item;
    });
}

saveLocalStorage(cart);
renderCart(cart)
showTotal(cart)
disableBuyBtn();
};

const addProduct = e => {
    if (!e.target.classList.contains('btn-add')) return;
    const product = {
        id: e.target.dataset.id,
        name: e.target.dataset.name,
        bid: e.target.dataset.bid,
        img: e.target.dataset.img,
    };


    const existingCartItem = cart.find(item => item.id === product.id);

    if (existingCartItem) {
        cart = cart.map(item => {
            return item.id === product.id
            ? { ...item, quantity: Number(item.quantity) + 1}
            : item;
        });
    } else {
        cart = [...cart, {...product,quantity:1}];
    }
    saveLocalStorage(cart);
    renderCart(cart);
    showTotal(cart);
    disableBuyBtn();
};

const completeBuy = () => {
    if (!cart.length) return;
    if ( window.confirm('¿Desea finalizar la compra?')){
        localStorage.removeItem('cart');
        window.location.reload();
    }
};


//funcion carrito js

  
  const toggleCart = () => {
    cartMenu.classList.toggle('open-cart');
    if (barsMenu.classList.contains('open-menu')) {
      barsMenu.classList.remove('open-menu');
      return;
    }
    overlay.classList.toggle('show-overlay');
  };
  
  //
  const closeOnScroll = () => {
    if (
      !barsMenu.classList.contains('open-menu') &&
      !cartMenu.classList.contains('open-cart')
    )
      return;
  
    
    cartMenu.classList.remove('open-cart');
    overlay.classList.remove('show-overlay');
  };
  //eventos carrito
 const init = () =>{
  document.addEventListener('DOMContentLoaded', renderCart(cart));
  document.addEventListener('DOMContentLoaded', showTotal(cart));
  // products.addEventListener('click', addProduct)
  productsCart.addEventListener('click', handleQuantity);
  buyBtn.addEventListener('click', completeBuy);
  cartBtn.addEventListener('click', toggleCart);
  
  disableBuyBtn();
  window.addEventListener('scroll', closeOnScroll);

  document.addEventListener('DOMContentLoaded', renderProducts
('todas', 0));
categories.addEventListener('click', filterProducts);
btnLoad.addEventListener('click', showMore);
 };
 init();

