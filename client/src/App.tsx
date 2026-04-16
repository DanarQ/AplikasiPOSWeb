import { Routes, Route } from "react-router";
import Sidebar from "./component/admin/layout/SidebarAdmin";
import Dashboard from "./component/admin/pages/Dashboard/DashboardAdminNav";
import RingkasanAnalitik from "./component/admin/pages/Dashboard/RingkasanAnalitik";
import Transaksi from "./component/admin/pages/Dashboard/Transaksi";
import StokBarang from "./component/admin/pages/Dashboard/StokBarang";
import Pelanggan from "./component/admin/pages/Dashboard/Pelanggan";
import Keuangan from "./component/admin/pages/Dashboard/Keuangan";
import Karyawan from "./component/admin/pages/Dashboard/Karyawan";
import "./App.css";

function App() {
  return (
    <>
      {/* Halaman Admin (yang user belum, nanti setelah di implementasikan database nya) */}
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/dashboard/analitik" element={<RingkasanAnalitik />} />
          <Route path="/dashboard/transaksi" element={<Transaksi />} />
          <Route path="/dashboard/stok-barang" element={<StokBarang />} />
          <Route path="/dashboard/pelanggan" element={<Pelanggan />} />
          <Route path="/dashboard/keuangan" element={<Keuangan />} />
          <Route path="/dashboard/karyawan" element={<Karyawan />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
