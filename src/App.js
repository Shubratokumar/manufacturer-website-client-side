import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import NotFound from "./Pages/NotFound/NotFound";
import Purchase from "./Pages/Purchase/Purchase";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Footer from "./Pages/Shared/Footer";
import { Toaster } from "react-hot-toast";
import RequireAuth from "./Pages/Login/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import AddAReview from "./Pages/Dashboard/AddAReview";
import BLogs from "./Pages/Blogs/BLogs";
import MyProfile from './Pages/Dashboard/MyProfile';

function App() {
  return (
    <div>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<BLogs />} />
        <Route
          path="purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders />} />
          <Route path="profile" element={<MyProfile/>} />
          <Route path="review" element={<AddAReview />} />
        </Route>
        <Route path="portfolio" element={<MyPortfolio />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
