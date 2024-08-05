import React, { useEffect, useState } from 'react';
import { myDatabase } from './Firebase';


function Card() {
  const [productData, setProductData] = useState([]);

  const collectData = (event) => {
    const myid = event.target.id;
    let cart = JSON.parse(localStorage.getItem('cart')) || {};

    if (cart[myid] === undefined) {
      const name = document.getElementById("title" + myid).innerText;
      const quantity = 1;
      const price = Number(document.getElementById("price" + myid).innerText);

      cart[myid] = [name, price, quantity];
    } else {
      const quantity = cart[myid][2] + 1;
      cart[myid][2] = quantity;
      const price = Number(document.getElementById("price" + myid).innerText) * quantity;
      cart[myid][1] = price;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart(cart);
  };

  const displayCart = (cart) => {
    let cartData = "";
    for (let i in cart) {
      cartData += `NAME: ${cart[i][0]}, PRICE: ${cart[i][1]}, QUANTITY: ${cart[i][2]}<br/>`;
     // console.log(cartData)
    }
   cartData += '<a href="productData.html">Continue</a>'
   document.getElementById("mypopover").setAttribute('data-content',cartData)
  };

  useEffect(() => {
    const unsubscribe = myDatabase.collection('Products').onSnapshot((snap) => {
      setProductData(snap.docs.map((doc) => doc.data()));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div style={{ margin: '20px', padding: '10px', display: 'flex', flexWrap: 'wrap' }}>
      {productData.map((i) => (
        <div className="card" style={{ width: '350px', margin: '20px', padding: '10px' }} key={i.id}>
          <img src={i.image} className="card-img-top" alt="img" />
          <div className="card-body">
            <h1 className="card-id">{i.id}</h1>
            <h5 className="card-title" id={"title" + i.id}>{i.title}</h5>
            <p className="card-author">by {i.author}</p>
            <p className="card-desc">{i.description}</p>
            <p className="card-price" id={"price" + i.id}>{i.price}</p>
            <button type="button" className="btn btn-primary" onClick={collectData} id={i.id}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
