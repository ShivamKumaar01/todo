import logo from './logo.svg';
import './App.css';
import AddingValue from './components/AddingValue';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Delete from './components/Delete';
import Complete from './components/Complete';



function App() {
  <BrowserRouter>
  <Routes>
    <Route path="/delete" element={<Delete/>}></Route>
    <Route path='/complete' element={<Complete/>}></Route>
  </Routes>
  </BrowserRouter>
  
  return (
    <div className="App">
      <h2>Todo List</h2>
      <AddingValue/>
    
    </div>
  );
}


export default App;
