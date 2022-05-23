import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/NotFound/NotFound';
import Purchase from './Pages/Purchase/Purchase';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import MyProfile from './Pages/MyProfile/MyProfile';
import Footer from './Pages/Shared/Footer';
import { Toaster } from 'react-hot-toast';
import RequireAuth from './Pages/Login/RequireAuth';


function App() {
  return (
    <div>
      <Navbar/>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='purchase/:id' 
        element={
          <RequireAuth>
            <Purchase/>
          </RequireAuth>
        }/>
        <Route path='/' element={<Home/>}/>
        <Route path='myprofile' element={<MyProfile/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
