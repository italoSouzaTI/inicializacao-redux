import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';
import { ICartState } from './modules/cart/types';

export interface IState {
  cart: ICartState;
}

//Store disponibiliza todo conteudo pra o app
const store = createStore(rootReducer);

export default store;