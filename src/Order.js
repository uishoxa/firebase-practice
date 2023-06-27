import React, { useEffect, useState } from 'react'
import { AlarmOn, RunningWithErrors } from '@mui/icons-material'
import './App.css'
import { db } from './firebase'
import { collection, deleteDoc, doc, getDocs, updateDoc  } from 'firebase/firestore'

function Order() {

    const [orders, setOrders] = useState([])
    const ordersCollectionRef = collection(db, "orders")

    const updateProcess = async(id, Process) => {
        const userDoc = doc(db, "orders", id)
        const newField = {Process : !Process}
        await updateDoc(userDoc, newField)
    }

    const deleteOrder = async (id) => {
        const userDoc = doc(db, "orders", id)
        await deleteDoc(userDoc)
    }

    useEffect(() => {

        const getOrders = async () => {
            const data = await getDocs(ordersCollectionRef);
            setOrders(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getOrders()
    }, [orders])

    return (
        <div className="orders-container">
          {orders.map((order) => {
            return (
              <div key={order.id} className="order-card">
                <h1 className="order-info">Client: {order.client}</h1>
                <h1 className="order-info">Product Type: {order.product_type}</h1>
                <h1 className="order-info">Quantity: {order.quantity}</h1>
                <h1 className="order-info">Total Price: {order.total_price}</h1>
                <h1 className="order-info">Process: {order.Process ? <AlarmOn />  : <RunningWithErrors />}</h1>
                <button className="button" onClick={() => updateProcess(order.id, order.Process)}>Set the Process</button>
                <button className="button" onClick={() => deleteOrder(order.id)}>Delete Order</button>
              </div>
            )
          })}
        </div>
      )
}




export default Order;