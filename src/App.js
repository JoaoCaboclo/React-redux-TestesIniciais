// src/js/components/App.js
import React from "react";
import List from "./component/List";
import FormAddArticle from "./component/FormAddArticle";
import FormDeleteArticle from "./component/FormDeleteArticle";


const App = () => (
  <>
    <div>
      <h2>Articles</h2>
      <List />
    </div>
    <div>
      <h2>Add a new article</h2>
      <FormAddArticle/>
    </div>
    <div>
      <h2>Delete an article</h2>
      <FormDeleteArticle/>
    </div>

  </>
);
export default App;