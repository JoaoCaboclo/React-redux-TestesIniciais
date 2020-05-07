// src/js/actions/index.js
import { ADD_ARTICLE } from "../constantsTipoActions-3/action-types";
import { DELETE_ARTICLE } from "../constantsTipoActions-3/action-types";



export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};

export function deleteArticle(payload) {
    return { type: DELETE_ARTICLE, payload }
};
