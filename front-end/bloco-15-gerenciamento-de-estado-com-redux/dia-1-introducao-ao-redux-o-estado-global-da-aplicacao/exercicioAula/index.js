// const Redux = require('redux');

// //*criação do store => para armazenar os dados
// // const store = Redux.createStore();

// //*criação do reducer  => de acordo com as BoasPráticas deve ser criado em arquivo separado 
// const fazerLogin = (email) => ({
//   type: "LOGIN",
//   email});

// const ESTADO_INICIAL = {
//   login: false,
//   email: "",
// };

// const reducer = (state = ESTADO_INICIAL, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       return {
//         ...state,
//         login: !state.login,
//         email: action.email,
//       };
//     default: // No switch, sempre precisamos ter um caso default!
//       return state;
//   }
// };

// const store = Redux.createStore(reducer);

// store.dispatch(fazerLogin("alguem@email.com"));

// console.log(store.getState());

// // { login: true, email: 'alguem@email.com' }


// Arquivo index.js

import { combineReducers } from 'redux';
import meuReducer from './meuReducer';
import meuOutroReducer from './meuOutroReducer';

const reducerCombinado = combineReducers({
meuReducer,
meuOutroReducer});

export default reducerCombinado;