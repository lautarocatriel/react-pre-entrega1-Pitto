export const products = [
    {
      id: 1,
      nombre: "Camiseta de fútbol Argentina",
      precio: 29.99,
      stock: 5,
      categoria: "camiseta",
      imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c6a66eb7e0e64c33912faeb601103498_9366/Camiseta_de_Entrenamiento_Argentina_Tiro_23_Azul_HF3928_01_laydown.jpg"
    },
    {
      id: 2,
      nombre: "Short de fútbol San Lorenzo",
      precio: 19.99,
      stock: 4,
      categoria: "short",
      imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw58a415c4/products/NI_CK9816-100/NI_CK9816-100-1.JPG"
    },
    {
      id: 3,
      nombre: "Camiseta de fútbol Manchester City",
      precio: 24.99,
      stock: 5,
      categoria: "camiseta",
      imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw9fc4e3dd/products/PU770438-01/PU770438-01-1.JPG"
    },
    {
      id: 4,
      nombre: "Short de fútbol Argentina ",
      precio: 17.99,
      stock: 8,
      categoria: "short",
      imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b8bed8a3682c404cab59afd20174c40e_9366/Shorts_Uniforme_Alternativo_Argentina_22_Violeta_GC4405_01_laydown.jpg"
    },
    {
      id: 5,
      nombre: "Camiseta de fútbol San Lorenzo",
      precio: 27.99,
      stock: 6,
      categoria: "camiseta",
      imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw6cab4144/products/NI_CK9872-490/NI_CK9872-490-1.JPG"
    },
    {
      id: 6,
      nombre: "Short de fútbol Colombia",
      precio: 15.99,
      stock: 3,
      categoria: "short",
      imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c16be96217994b70af60ae7a00bb544f_9366/Shorts_de_Local_Colombia_22_Azul_HD8851_01_laydown.jpg"
    },
    {
      id: 7,
      nombre: "Camiseta de fútbol Peru Adidas",
      precio: 22.99,
      stock: 7,
      categoria: "camiseta",
      imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/11d2efc805e24af6be2baf8701727749_9366/Camiseta_Oficial_de_Local_de_la_Seleccion_Peruana_2023_Blanco_GC4230_01_laydown.jpg"
    },
    {
      id: 8,
      nombre: "Short de fútbol Ajax",
      precio: 18.99,
      stock: 4,
      categoria: "short",
      imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d46d38987af24237a732aeb60104a98e_9366/Shorts_Local_Ajax_Amsterdam_22-23_Blanco_H58237_01_laydown.jpg"
    },
    {
      id: 9,
      nombre: "Camiseta de fútbol Liverpool",
      precio: 26.99,
      stock: 8,
      categoria: "camiseta",
      imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw8f44e9a0/products/NI_DM1843-609/NI_DM1843-609-1.JPG"
    },
    {
      id: 10,
      nombre: "Short de fútbol Real Madrid",
      precio: 16.99,
      stock: 7,
      categoria: "short",
      imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8e42713c389a42309cd4add701145c0a_9366/Shorts_Local_Real_Madrid_22-23_Blanco_H18484_01_laydown.jpg"
    }
  ];

export const getProducts = () => {
  return new Promise((resolve) => {
  setTimeout(() => {
    resolve(products);
  }, 3000);
});
}


