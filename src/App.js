import Sidebar from "./navbar/Sidebar";
import Tagcreate from "./pages/Tagscreate";
import NewTag from "./pages/NewTag";
import TagTable from "./pages/TagTable";
import Account from "./pages/Account";
import "./App.css";
import Header from "../src/component/Header";
import "boxicons";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import AdminLogin from "./pages/AdminLogin";
import AdminSignup from "./pages/AdminSignup";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Account />} />
          <Route path="/tags" element={<Tagcreate />} />
          <Route path="/tagtable" element={<TagTable />} />
          <Route path="/adminSignup" element={<AdminSignup />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
