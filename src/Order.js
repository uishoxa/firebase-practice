import React, { useEffect, useState } from 'react'
import './App.css'
import { db } from './firebase'
import { collection, getDocs,  } from 'firebase/firestore'

function Order() {

    const [orders, setOrders] = useState([])
    const ordersCollectionRef = collection(db, "orders")

    useEffect(() => {

        const getOrders = async () => {
            const data = await getDocs(ordersCollectionRef);
            setOrders(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getOrders()
    }, [orders])

  return (
    <div className='App'>
        {orders.map((orders) => {
            return (
                <div>
                    <h1>Client : {orders.client}</h1>
                    <h1>Product_Type : {orders.product_type}</h1>
                    <h1>Quantity : {orders.quantity}</h1>
                    <h1>Total price : {orders.total_price}</h1>
                    <h1>Process : {orders.process ? 'Ready' : 'On Process'}</h1>
                </div>
            )
        })}
    </div>
  )
}




export default Order;