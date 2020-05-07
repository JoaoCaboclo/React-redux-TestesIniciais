// src/js/reducers/index.js
import { ADD_ARTICLE } from "../constantsTipoActions-3/action-types";
import { DELETE_ARTICLE } from "../constantsTipoActions-3/action-types";

import { ReactReduxContext } from "react-redux";

const initialState = {
  articles: []
};


function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  if (action.type === DELETE_ARTICLE) {
 //   var index = state.articles.indexOf(action.payload);
    return Object.assign({}, state, {
//    articles: state.articles.splice(index,1)
      articles: state.articles.concat(action.payload)
    });
  }

  return state;
}

export default rootReducer;


//NOTE:
//   Remember two key points for avoiding mutations in Redux:
//   use concat, slice, or the spread operator for arrays
//   use Object.assign or object spread of objects


//  Esta  função fere o principio de imutabilidade do redux
//  porque o "push" alterará o conteúdo original do array de "articles"
//  corrigimos na função acima, usando "concat"
//  function rootReducer(state = initialState, action) {
//     if (action.type === ADD_ARTICLE) {
//        state.articles.push(action.payload);
//     }
//     return state;
//  }



/* Um outro exemplo sem ação nenhum do ReactReduxContext
const initialState = {
    articles: []
  };
  
  function rootReducer(state = initialState, action) {
    return state;
  };
  
  export default rootReducer; */