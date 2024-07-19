import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/Login/LoginPage";
import AccountPage from "./pages/Account/AccountPage";
import OrderPage from "./pages/Order/OrderPage";
import FoodSpinPage from "./pages/Food/FoodSpinPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/food" element={<FoodSpinPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
