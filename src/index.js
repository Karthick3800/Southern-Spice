import React from "react";
import ReactDOM from "react-dom";
// import index.css from 'piza-menu\src\index.css';
import './index.css'

const Data=[
  {
    "name": "Masala Dosa",
    "ingredients": "Fermented rice and lentil batter, potatoes, onions, green chilies, mustard seeds, curry leaves",
    "price": 80,
    "photoName": "dishes/masala_dosa.jpg",
    "soldOut": false
  },
  {
    "name": "Idli",
    "ingredients": "Fermented rice and lentil batter",
    "price": 15,
    "photoName": "dishes/idli.jpg",
    "soldOut": false
  },
  {
    "name": "Rava Upma",
    "ingredients": "Semolina, mustard seeds, curry leaves, vegetables",
    "price": 50,
    "photoName": "dishes/rava_upma.jpg",
    "soldOut": false
  },
  {
    "name": "Pongal",
    "ingredients": "Rice, moong dal, black pepper, cumin seeds, ghee",
    "price": 60,
    "photoName": "dishes/pongal.jpg",
    "soldOut": true
  },
  {
    "name": "Vada",
    "ingredients": "Black gram flour, green chilies, curry leaves",
    "price": 12,
    "photoName": "dishes/vada.jpg",
    "soldOut": false
  },
  {
    "name": "Adai",
    "ingredients": "Rice, toor dal, chana dal, urad dal, red chilies, curry leaves",
    "price": 100,
    "photoName": "dishes/adai.jpg",
    "soldOut": false
  },
  {
    "name": "Thayir Sadam (Curd Rice)",
    "ingredients": "Rice, curd, mustard seeds, green chilies, curry leaves",
    "price": 80,
    "photoName": "dishes/thayir_sadam.jpg",
    "soldOut": false
  },
  {
    "name": "Uttapam",
    "ingredients": "Fermented rice and lentil batter, onions, tomatoes, green chilies, coriander leaves",
    "price": 80,
    "photoName": "dishes/uttapam.jpg",
    "soldOut": false
  }
  
];


function App() {
  return <>
    <Header/>
    <Menu/>
    <Footer/>
    </>
  ;
}
function Menu()
{
  const foods=Data;
  const numfoods=foods.length;
return (
  <main className="menu">
    <h2>our menu</h2>
    
    {
      numfoods>0 ?
  (  <ul className="foods">
   {
    foods.map((food)=>
<Food foodobj={food}/>)
   }
   </ul>):<p>Come back Later</p>
   }
  </main>
);
}
function Food({foodobj}) {

  return (
  <li className={`food ${foodobj.soldOut? "sold-out" : ""}`}>
    <img src={foodobj.photoName} alt={foodobj.name}/>
    <div>

    <h1>{foodobj.name}</h1>
    <p>{foodobj.ingredients}</p>
    <span>{foodobj.soldOut ? 'SOLD OUT': '₹' +foodobj.price}</span>
    </div>
  </li>
  );
  
  
}

function Header()
{
;
return <header className="header">
  <h1 >Southern Spice</h1>
</header>;
}
function Footer(){
  const hr= new Date().getHours();
  const open=8;
  const close=22;
  const isopen=hr>=open && hr<=close;
return(
<footer className="footer">
  {
    isopen ?
    (
      <Order close={close}/>
    ):<p>We 're happy to welcome youn between {close}:00 and {open}:00 </p>
  }
</footer>
);
}
function Order(props)
{
  return(
    <div className="order">
    <p> 
    We are open untill {props.close}:00 Now order Online or visit our shop
    </p>
    <button className="btn">
    Order
    </button>
    </div>
);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <App/> 
  </React.StrictMode>
);
// root.render();
