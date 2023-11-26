import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Main} from "components/blocks/Main";



function App() {

  return (
    <Routes>
      <Route path="/" element={<Main name={"React-developer portfolio"}/>} />
      </Routes>
  );
}

export default App;
