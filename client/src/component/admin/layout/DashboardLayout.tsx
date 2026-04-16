import { Outlet } from "react-router";
import DashboardAdminNav from "../pages/Dashboard/DashboardAdminNav";

function DashboardLayout() {
  return (
    <>
      {/* Navigasi ini tidak akan di-rerender saat berpindah Nested Routes di bawahnya */}
      <DashboardAdminNav />
      {/* Outlet akan merender komponen halaman seperti Transaksi, Analitik, dll */}
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default DashboardLayout;
