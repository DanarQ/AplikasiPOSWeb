import { Routes, Route } from "react-router";
import Sidebar from "./component/admin/layout/SidebarAdmin";
import Dashboard from "./component/admin/pages/DashboardAdmin";
import "./App.css";

function App() {
  return (
    <>
      {/* Halaman Admin (yang user belum, nanti setelah di implementasikan database nya) */}
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* Kamu bisa menambahkan route halaman lain di sini nanti */}
        </Routes>
      </main>
    </>
  );
}

export default App;
