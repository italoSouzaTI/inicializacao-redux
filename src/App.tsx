import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Catalog from '../src/components/Catalog'
import Cart from '../src/components/Cart'


function App() {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>


  );
}

export default App;
