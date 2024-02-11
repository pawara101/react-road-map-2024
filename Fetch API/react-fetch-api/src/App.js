import logo from './logo.svg';
import './App.css';
import FetchData from './FetchData';

function App() {

  let items = ["item1", "item2", "item3", "item4, item5", "item6",'toggle']
  let products = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
    },
  ];
  const url = "https://fakestoreapi.com/products"

  
  return (
    // <div className="div1">
    //   <ul>
    //     {products.map((product) => (
    //       <li key={product.id}>
    //         {product.title}{" "}
    //         <img
    //           className="images"
    //           src={product.image}
    //           alt={product.description}
    //         ></img>{" "}
    //         <span>Price : {product.price}</span>{" "}
    //         <span>Rating : {product.rating.rate}</span>
    //       </li>
    //     ))}
    //   </ul>
    // </div>


    <FetchData></FetchData>
  );
}

export default App;
