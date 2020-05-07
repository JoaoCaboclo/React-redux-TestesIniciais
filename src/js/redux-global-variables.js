import store from "./store-1/index";
import { addArticle, deleteArticle } from "./actions-4/index";

window.store = store;
window.addArticle = addArticle;
window.deleteArticle = deleteArticle;