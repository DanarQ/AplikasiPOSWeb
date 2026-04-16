import { Routes, Route, Navigate } from "react-router";
import SidebarAdmin from "./component/admin/layout/SidebarAdmin";
// Dashboard Admin
import DashboardLayoutAdmin from "./component/admin/layout/DashboardLayout";
import RingkasanAnalitikAdmin from "./component/admin/pages/Dashboard/RingkasanAnalitik";
import TransaksiAdmin from "./component/admin/pages/Dashboard/Transaksi";
import StokBarangAdmin from "./component/admin/pages/Dashboard/StokBarang";
import PelangganAdmin from "./component/admin/pages/Dashboard/Pelanggan";
import KeuanganAdmin from "./component/admin/pages/Dashboard/Keuangan";
import KaryawanAdmin from "./component/admin/pages/Dashboard/Karyawan";
// Produk Admin
import ProdukLayoutAdmin from "./component/admin/layout/ProdukLayout";
// Kategori Admin
import KategoriLayoutAdmin from "./component/admin/layout/KategoriLayout";
// Transaksi Admin
import TransaksiLayoutAdmin from "./component/admin/layout/TransaksiLayout";
// Settings Admin
import SettingsLayoutAdmin from "./component/admin/layout/SettingsLayout";
import "./App.css";

function App() {
  return (
    <>
      {/* Halaman Admin */}
      <SidebarAdmin />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/dashboard/analitik" replace />}
          />
          <Route path="/dashboard" element={<DashboardLayoutAdmin />}>
            <Route index element={<Navigate to="analitik" replace />} />
            <Route path="analitik" element={<RingkasanAnalitikAdmin />} />
            <Route path="transaksi" element={<TransaksiAdmin />} />
            <Route path="stok-barang" element={<StokBarangAdmin />} />
            <Route path="pelanggan" element={<PelangganAdmin />} />
            <Route path="keuangan" element={<KeuanganAdmin />} />
            <Route path="karyawan" element={<KaryawanAdmin />} />
          </Route>
          <Route path="/produk" element={<ProdukLayoutAdmin />}></Route>
          <Route path="/kategori" element={<KategoriLayoutAdmin />}></Route>
          <Route path="/transaksi" element={<TransaksiLayoutAdmin />}></Route>
          <Route path="/settings" element={<SettingsLayoutAdmin />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
