import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';


//Store disponibiliza todo conteudo pra o app
const store = createStore(rootReducer);

export default store;