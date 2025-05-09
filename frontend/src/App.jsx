import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainWrapper from "./layouts/MainWrapper";
import Register from "./views/auth/Register";
import Login from "./views/auth/Login";
import Logout from "./views/auth/Logout";
import ForgotPassword from "./views/auth/ForgotPassword.jsx";
import CreateNewPassword from "./views/auth/CreateNewPassword.jsx";
import { CartContext } from "./views/plugin/Context";

function App() {
  const [cartCount, setCartCount] = useState(0); // Default state for cart count

  return (
    <CartContext.Provider value={[cartCount, setCartCount]}>
      <BrowserRouter>
        <MainWrapper>
          <Routes>
            <Route path="/register/" element={<Register />} />
              <Route path="/login/" element={<Login />} />
              <Route path="/logout/" element={<Logout />} />
              <Route path="/forgot-password/" element={<ForgotPassword />} />
              <Route path="/create-new-password/" element={<CreateNewPassword />} />
          </Routes>
        </MainWrapper>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;