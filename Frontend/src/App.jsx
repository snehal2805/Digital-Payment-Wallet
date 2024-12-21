import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup.js";
import { Signin } from "./pages/Signin.js";
import { Dashboard } from "./pages/Dashboard.js";
import { SendMoney } from "./pages/SendMoney.js";
import { PaymentStatus } from "./pages/PaymentStatus.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
          <Route path="/paymentstatus" element={<PaymentStatus />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
