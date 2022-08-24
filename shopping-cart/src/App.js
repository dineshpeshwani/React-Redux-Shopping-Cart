import './App.css';
import Header from './containers/Header';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import ProductListing from './containers/ProductListing';
// import ProductComponent from './containers/ProductComponent'
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
         <Header/>
         <Routes>
           <Route path='/' element={<ProductListing/>}/>
           <Route path='/product/:productId' element={<ProductDetail/>}/>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
