import React from 'react';
import {Route, Routes} from "react-router-dom"
import {AnimalsPage} from './Animals'
import {AnimalComponent} from './Animal'

import './App.css';

function App() {
  return (
    <div className="App">
          <Routes>
              <Route path="/animals">
                  <Route index element={<AnimalsPage />} />
                  <Route path={":id"} element={<AnimalComponent />} />
              </Route>
          </Routes>
    </div>
  );
}

export default App;
