import Sidebar from "./navbar/Sidebar";
import Tagcreate from "./pages/Tagscreate";
import NewTag from "./pages/NewTag";
import TagTable from "./pages/TagTable";
import AdminLogin from "./pages/AdminLogin";
import "boxicons";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/adminDashboard" element={<Sidebar />} />
        <Route path="/tags" element={<Tagcreate />} />
        <Route path="/newtag" element={<NewTag />} />
        <Route path="/tagtable" element={<TagTable />} />
      </Routes>
    </div>
  );
}

export default App;
