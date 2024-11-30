import './App.css';
import Nav from './components/Nav';
import footer1 from './components/footer1';
import SignUp1 from './components/SignUp1';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>

        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<ProductList/>} />
        <Route path="/add" element={<AddProduct/>} />
        <Route path="/update/:id" element={<UpdateProduct/>} />
        <Route path="/logout" element={<h1>Logout component</h1>} />
        <Route path="/profile" element={<h1>Profile component</h1>} />
        </Route>

        <Route path="/signup" element={<SignUp1/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      </BrowserRouter>
      <footer1/>
    </div>
  );
}

export default App;
