import React, {  } from "react";
import CartList from "../components/cartlist";
import Layout from "../components/layout";


export default function Cart(props) {
 
  const send = async ()=> {
    console.log("sending");
    const response = await fetch('/.netlify/functions/send-contact-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name:"hello"})
    });

    console.log(response);

  }
  return (
    <Layout>
      <CartList/>
      <button onClick={send}>Send</button>
    </Layout>
  );
}
