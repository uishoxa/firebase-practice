import React, { useEffect, useState } from 'react'
import './App.css'
import { AlarmOn, RunningWithErrors } from '@mui/icons-material'
import { db } from './firebase'
import { collection, getDocs, addDoc  } from 'firebase/firestore'


export default function OrderCreator() {
    
    const ordersCollectionRef = collection(db, "orders")
    const [newClient, setNewClient] = useState('');
    const [newProductType, setNewProductType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState(0)
    const [process, setProcess] = useState(false)


    const createOrder = async () => {
        await addDoc(ordersCollectionRef, {client: newClient , product_type: newProductType, quantity: quantity, total_price: price, Process: process})
    }


    
    

  
    return (
        <div className="container">
          <div className="input-field">
            <input
              type="text"
              placeholder="Client..."
              value={newClient}
              onChange={(e) => setNewClient(e.target.value)}
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Type Product type..."
              defaultValue={1}
              value={newProductType}
              onChange={(e) => setNewProductType(e.target.value)}
            />
          </div>
          <div className="input-field">
            <input
              type="number"
              placeholder="Set the quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <button className="button" onClick={() => setPrice(quantity * 140000)}>
            See the Total price
          </button>
          <h1 className="total-price">Total price: {price}</h1>
          <div className="status">
            <button
              className="process-button"
              onClick={() => setProcess(false)}
            >
              On process <RunningWithErrors className="status-icon" />
            </button>
            <button className="process-button" onClick={() => setProcess(true)}>
              Ready <AlarmOn className="status-icon" />
            </button>
          </div>
          <button className="button" onClick={createOrder}>
            Make Order
          </button>
        </div>
      )
}
