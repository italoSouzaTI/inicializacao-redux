import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux'
import { IProduct } from '../store/modules/cart/types';
import api from '../services/api';
import { useDispatch } from 'react-redux'
import { addProductToCart } from '../store/modules/cart/actions';

// import { Container } from './styles';

const Cataog: React.FC = () => {
  const dispatch = useDispatch();
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data)
    })
  }, [])

  const handleAddProductToCart = useCallback((product: IProduct) => {
    dispatch(addProductToCart(product))
  }, [dispatch]);

  return (
    <main>
      <h1>Catálogo</h1>
      {catalog.map(product => (
        <article key={product.id}>
          <strong>{product.title}</strong>{" - "}
          <strong>{product.price}</strong>{"  "}
          <button
            type="button"
            onClick={() => handleAddProductToCart(product)}
          >Comprar</button>
        </article>
      ))}
    </main>
  );
}

export default Cataog;