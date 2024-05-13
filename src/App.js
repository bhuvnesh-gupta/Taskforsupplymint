
import React from 'react';
import Product from './components/Product';
import Sidebar from './components/Sidebar';
import OrderSummary from './components/OrderSummary';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="flex max-sm:flex-col">
      <Sidebar />
      <div>
        <NavBar />
         <div className='flex max-sm:flex-col'>
          <Product />
          <OrderSummary className="items-center" />
        </div>
      </div>
    </div>
  );
}

export default App;
