import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Tabs, Tab, Col, Row, Alert } from 'react-bootstrap';
import { useState } from 'react';
import Cardproduct from './componants/cardproduct';
import { useEffect } from 'react';
import Cardproduitpanier from './componants/cardproduitpanier';
import ValiderPanier from './componants/validerpanier';


function App() {
    
  const [npp, setNpp] = useState(0);
  const [key, setKey] = useState(0);
  const [data, setData] = useState([[]]);
  const [panier, setPanier] = useState([<ValiderPanier/>]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [show, setShow] = useState(false);

  let elementpanier = panier;

  //allow to delete card from sales cart and modifie total price
  function delPan(e){
    for(let i=1; i<panier.length; i++){
      if(e.currentTarget.parentNode.parentNode.id === panier[i].props.id.toString()){
        panier.splice(panier.indexOf(panier[i]),1)
      }
    }
    setNpp(panier.length-1)
    let totalprix = 0;
    for(let i=1; i<panier.length; i++){
      totalprix += parseFloat(panier[i].props.price.slice(7,-2))
    }
    setTotalPrice(Math.floor(totalprix));
  }

  //allow to add product card to sales cart and modifie total price
  function addPan(e){
    setShow(true);
    setNpp(npp + 1);
    elementpanier.push(
      <Cardproduitpanier 
        key={key}
        id={key}
        src={e.currentTarget.parentNode.previousSibling.src}
        title={e.currentTarget.parentNode.childNodes[0].innerText}
        price={e.currentTarget.parentNode.childNodes[2].innerText}
        delclickhandler={(e) => {delPan(e)}}
      />)
    setPanier(elementpanier);
    setKey(key+1);
    setTotalPrice(Math.floor(totalPrice + parseFloat(e.currentTarget.parentNode.childNodes[2].innerText.slice(7,-2))))
  }

  //get data's product from api and put it into data variable
  useEffect(
    () => {axios.get('https://fakestoreapi.com/products').then((response) => {setData(response.data)})}  
  )
  
  //add all product from api into cardsproduct variable
  let cardsproduct = [];
  data.map((element, idx) => {
    return cardsproduct.push(
      <Row key={idx} >
        <Cardproduct 
          src={element.image} 
          title={element.title} 
          description={element.description} 
          price={element.price} 
          category={element.category}
          clickhandler={(e) => {addPan(e)}} 
          show={show}
          hidemodalhandler={(e) => {setShow(false)}}
        />
      </Row>)
  })

  return (
    <>
      <Tabs defaultActiveKey="home">
        <Tab eventKey="home" title="Produits">
          <Col>
            {cardsproduct}
          </Col>
        </Tab>
        <Tab eventKey="panier" title={"Panier [ " + npp + " ]"}>
          {npp===0 ? <Alert variant='warning' className='m-3'><p>le panier est vide</p></Alert> : panier} 
        </Tab>
        <Tab eventKey="totalPrice" title={"prix total [ " + totalPrice + " DH ]"} disabled>
        </Tab>
      </Tabs>
    </>  
  );
}

export default App;