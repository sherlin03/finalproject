import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/admin/login/Login';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './Pages/admin/Dashboard/Layout';
import { ToastContainer } from 'react-toastify';
import AdminRegistration from './Pages/admin/login/AdminRegistration';


function App() {
  return (
    <div className="App">
        <ToastContainer theme='colored' ></ToastContainer>
        <Router>
          <Routes>
             <Route exact path='/' element={<Login/>}></Route>
             <Route exact path='/register' element={<AdminRegistration/>}></Route>
             <Route exact path='/layout' element={<Layout/>}></Route>
          </Routes>
        </Router>

    </div>
  );
}

export default App;
