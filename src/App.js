import Sidebar from "./navbar/Sidebar";
import Tagcreate from "./pages/Tagscreate";
import "boxicons";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/tags" element={<Tagcreate />} />
      </Routes>
    </div>
  );
}

export default App;
