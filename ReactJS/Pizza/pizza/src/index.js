import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
  <div className='container'>
    <Header></Header>
    <Menu></Menu>
    <Footer/>
  </div>
  )
}

const hraderStyle = {
color : 'red',
fontSize: "48px",
textTransform: "uppercase"
}
function Header() {
  return (<header className='header'>

    <h1 style={hraderStyle} >welcome to Pizza store Co.</h1>
  </header>)
}


function Menu() {

  return (
    <div className='menu'>
      <h2>Our Menu</h2>

      <div>
        <ul className='pizzas'>
        {/* {pizzaData.map(p => <Pizza name={p.name} 
        ingredients={p.ingredients} 
        imgName={p.photoName}
        price={10}
        key={p.name}
        ></Pizza>)} */}
        {pizzaData.map(p => <Pizza pizzaObj={p} 
        ingredients={p.ingredients} 
        imgName={p.photoName}
        price={10}
        key={p.name}
        ></Pizza>)}
        </ul>
        
      </div>
    </div>
    )
}

function Footer() {

  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
 
  if(!isOpen) {
    return (
      <p>
            we're currently not open.
          </p>
      )
  }

  // footer not rendered


  return (
    <footer className='footer'>
      {new Date().toLocaleDateString()
      
      }
      {
      true && (
        
        <div className='order'>
          <p>
            we're currently open.
          </p>
          <button className='btn'>
            Order
          </button>
        </div>
        )
      }
      {new Date().toLocaleDateString()} 
      {false} 
      {/* doesn't render true/false values */}
    </footer>
    // React.createElement('footer', null, "We're currently open")
    )

}


function Pizza({pizzaObj}) {
  console.log(pizzaObj, pizzaObj.soldOut)

  if(pizzaObj.soldOut) {
  return null
}
  // props.imgName = "test" // err
  return (
    <li className='pizza'>
      <div>
        <img src={pizzaObj.photoName} alt="" />
        <div>

          <h3>{pizzaObj.name}</h3>
          <p> {pizzaObj.ingredients} </p>
          <span>{pizzaObj.price}</span>
        </div>


      </div>
    </li>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App></App>)