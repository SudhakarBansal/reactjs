import Home from './components/Home'
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEntry from './components/AddEntry';
import UpdateEntry from './components/UpdateEntry'

function App() {
  const [todos, settodos] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home todos={todos} settodos={settodos} />} />
            <Route path="/addEntry" element={<AddEntry todos={todos} settodos={settodos}/>} />
            <Route path="/updateEntry/:id" element={<UpdateEntry todos={todos}/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
