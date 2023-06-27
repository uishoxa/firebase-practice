import React, { useEffect, useState } from 'react';
import { db } from './firebase'
import {collection, getDocs } from 'firebase/firestore'
import './App.css';
import BasicTabs from './BasicPanel';

function App() {

  const [orders, setOrders] = useState([])
  const ordersCollectionRef = collection(db, "orders")

 /* useEffect(() => {
     const getOrders = async () => {
      const data = await getDocs(ordersCollectionRef);
      setOrders(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }


    getOrders()
  }, [orders]) */
 

  return (
    <div className="App">
     <BasicTabs />
    </div>
  );
}

export default App;
