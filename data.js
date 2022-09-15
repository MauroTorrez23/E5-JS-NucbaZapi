const productsData = [
    {
      id: 1,
      name: 'Pizza caprese',
      bid: 1000,
      category: 'pizzas',
      cardImg: './images/pizza1.jpg',
    },
    {
        id: 2,
        name: 'Pizza continental',
        bid: 1000,
        category: 'pizzas',
        cardImg: './images/pizza2.jpg',
      },
      {
        id: 3,
        name: 'Pizza de champignones',
        bid: 1000,
        category: 'pizzas',
        cardImg: './images/pizza3.jpeg',
      },
      {
        id: 4,
        name: 'Pizza yankee',
        bid: 1000,
        category: 'pizzas',
        cardImg: './images/pizza4.jpg',
      },
      {
        id: 5,
        name: 'Pizza de muzzarella',
        bid: 1000,
        category: 'pizzas',
        cardImg: './images/pizza5.jpg',
      },
      {
        id: 6,
        name: 'Pizza porteña',
        bid: 1000,
        category: 'pizzas',
        cardImg: './images/pizza6.jpg',
      },
      {
        id: 7,
        name: 'yankee',
        bid: 1100,
        category: 'hamburguesas',
        cardImg: './images/hamburguesa1.jpg',
      },
      {
        id: 8,
        name: 'gourmet',
        bid: 1300,
        category: 'hamburguesas',
        cardImg: './images/hamburguesa2.jpg',
      },
      {
        id: 9,
        name: 'stacker',
        bid: 1000,
        category: 'hamburguesas',
        cardImg: './images/hamburguesa3.jpg',
      },
      {
        id: 10,
        name: 'chicken little',
        bid: 900,
        category: 'hamburguesas',
        cardImg: './images/hamburguesa4.jpg',
      },
      {
        id: 11,
        name: 'big M',
        bid: 1100,
        category: 'hamburguesas',
        cardImg: './images/hamburguesa5.jpg',
      },
      {
        id: 12,
        name: 'cheese bacon',
        bid: 1100,
        category: 'hamburguesas',
        cardImg: './images/hamburguesa6.jpg',
      },
      {
        id: 13,
        name: 'Jamon y queso',
        bid: 900,
        category: 'papas',
        cardImg: './images/papas1.jpg',
      },
      {
        id: 14,
        name: 'parmesanas',
        bid: 900,
        category: 'papas',
        cardImg: './images/papas2.jpg',
      },
      {
        id: 15,
        name: 'clasicas',
        bid: 800,
        category: 'papas',
        cardImg: './images/papas3.jpg',
      },
      {
        id: 16,
        name: 'full',
        bid: 1100,
        category: 'papas',
        cardImg: './images/papas4.jpg',
      },
      {
        id: 17,
        name: 'canaletas',
        bid: 800,
        category: 'papas',
        cardImg: './images/papas5.jpg',
      },
      {
        id: 18,
        name: 'cheddar y bacon',
        bid: 1100,
        category: 'papas',
        cardImg: './images/papas6.jpg',
      },
      {
        id: 19,
        name: 'fit wrap',
        bid: 1100,
        category: 'wraps',
        cardImg: './images/wrap1.jpg',
      },
      {
        id: 20,
        name: 'veggie',
        bid: 1100,
        category: 'wraps',
        cardImg: './images/wrap2.jpg',
      },
      {
        id: 21,
        name: 'caprese',
        bid: 1100,
        category: 'wraps',
        cardImg: './images/wrap3.jpg',
      },
      {
        id: 22,
        name: 'carne',
        bid: 1100,
        category: 'wraps',
        cardImg: './images/wrap4.jpg',
      },
      {
        id: 23,
        name: 'pollo',
        bid: 1100,
        category: 'wraps',
        cardImg: './images/wrap5.jpg',
      },
      {
        id: 24,
        name: 'carne y aceituna',
        bid: 1100,
        category: 'wraps',
        cardImg: './images/wrap6.jpg',
      },
      {
        id: 25,
        name: 'clasicos',
        bid: 1100,
        category: 'mexican',
        cardImg: './images/mexico1.jpg',
      },
      {
        id: 26,
        name: 'birria',
        bid: 1100,
        category: 'mexican',
        cardImg: './images/mexico2.jpg',
      },
      {
        id: 27,
        name: 'queso y chile',
        bid: 1100,
        category: 'mexican',
        cardImg: './images/mexico3.jpg',
      },
      {
        id: 28,
        name: 'el chavo del 8',
        bid: 1100,
        category: 'mexican',
        cardImg: './images/mexico4.jpg',
      },
      {
        id: 29,
        name: 'camarones',
        bid: 1100,
        category: 'mexican',
        cardImg: './images/mexico5.jpg',
      },
      {
        id: 30,
        name: 'quesadillas',
        bid: 1100,
        category: 'mexican',
        cardImg: './images/mexico6.jpg',
      },
      {
        id: 31,
        name: 'frutilla',
        bid: 1100,
        category: 'milkshakes',
        cardImg: './images/Milkshake1.jpg',
      },
      {
        id: 32,
        name: 'chocolate',
        bid: 1100,
        category: 'milkshakes',
        cardImg: './images/Milkshake2.jpg',
      },
      {
        id: 33,
        name: 'chocolate con cereal',
        bid: 1100,
        category: 'milkshakes',
        cardImg: './images/Milkshake3.jpg',
      },
      {
        id: 34,
        name: 'vainilla',
        bid: 1100,
        category: 'milkshakes',
        cardImg: './images/Milkshake4.jpg',
      },
      {
        id: 35,
        name: 'oreo',
        bid: 1100,
        category: 'milkshakes',
        cardImg: './images/Milkshake5.jpg',
      },
      {
        id: 36,
        name: 'super',
        bid: 1100,
        category: 'milkshakes',
        cardImg: './images/Milkshake6.jpg',
      }
    ];


    function splitProducts(size) {
      
      let chunk = [];
      
      for (let i = 0; i < productsData.length; i += size)
        
        chunk.push(productsData.slice(i, i + size));
    
      
      return chunk;
    }

    const allProducts = {
      productList: splitProducts(6),
      next: 1,
      limit: splitProducts(6).length,
    };