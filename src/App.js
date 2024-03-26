import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/admin/login/Login';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './Pages/admin/Dashboard/Layout';
import Layout2 from './Pages/admin/Dashboard/Layout2';
import { ToastContainer } from 'react-toastify';
import AdminRegistration from './Pages/admin/login/AdminRegistration';
import Jean from './Pages/admin/Dashboard/adminpages/Jean';
import Shoes from './Pages/admin/Dashboard/adminpages/Shoes';
import Suits from './Pages/admin/Dashboard/adminpages/Suits';
import Tshirt from './Pages/admin/Dashboard/adminpages/Tshirt';
import Addtshirt from './Pages/admin/Dashboard/adminpages/Addtshirt';
import Addjean from './Pages/admin/Dashboard/adminpages/Addjean';


function App() {
  return (
    <div className="App">
        <ToastContainer theme='colored' ></ToastContainer>
        <Router>
          <Routes>
             <Route exact path='/' element={<Login/>}></Route>
             <Route exact path='/register' element={<AdminRegistration/>}></Route>
             <Route exact path='/layout' element={<Layout/>}></Route>
             
             <Route element={<Layout2/>}>

             {/* <Route exact path='/' element={<Login/>}></Route> */}
                <Route exact path='/jean' element={<Jean/>}></Route>
                <Route exact path='/shoes' element={<Shoes/>}></Route>
                <Route exact path='/suits' element={<Suits/>}></Route>
                <Route exact path='/tshirts' element={<Tshirt/>}></Route>
                <Route exact path='/addtshirt' element={<Addtshirt/>}></Route>
                <Route exact path='/addjean' element={<Addjean/>}></Route>

             </Route>

          </Routes>
        </Router>

    </div>
  );
}

export default App;
