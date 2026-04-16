import { Routes, Route, Navigate } from "react-router";
import Sidebar from "./component/admin/layout/SidebarAdmin";
import DashboardLayout from "./component/admin/pages/Dashboard/DashboardLayout";
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
          <Route
            path="/"
            element={<Navigate to="/dashboard/analitik" replace />}
          />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Navigate to="analitik" replace />} />
            <Route path="analitik" element={<RingkasanAnalitik />} />
            <Route path="transaksi" element={<Transaksi />} />
            <Route path="stok-barang" element={<StokBarang />} />
            <Route path="pelanggan" element={<Pelanggan />} />
            <Route path="keuangan" element={<Keuangan />} />
            <Route path="karyawan" element={<Karyawan />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
