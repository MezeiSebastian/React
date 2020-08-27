import React from "react";
import List from "./List";
import Form from "./Form";
import FetchRandomUser from "./FetchRandomUser"

const App = () => (
  <>
    <div>
      <h2>Add a new user</h2>
      <FetchRandomUser/>
      <List />
      <Form />
     
    </div>
  </>
);

export default App;
