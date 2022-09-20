import Header from './components/Header'
import './helper/App.css';
import Home from './components/Home'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom" ;
import Checkout from './components/Checkout';
import Login from './components/Login'
function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path="/checkout" element={<div>
    <Header/> <Checkout/></div>}/>
    <Route path="/" element={<div><Header/><Home/></div>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
