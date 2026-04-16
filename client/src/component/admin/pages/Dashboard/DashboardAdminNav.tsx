import { NavLink } from "react-router";
import "./style/DashboardAdmin.css";

const dashboardNavItems = [
  { to: "/dashboard/analitik", label: "Ringkasan Analitik" },
  { to: "/dashboard/transaksi", label: "Transaksi" },
  { to: "/dashboard/stok-barang", label: "Stok Barang" },
  { to: "/dashboard/pelanggan", label: "Pelanggan" },
  { to: "/dashboard/keuangan", label: "Keuangan" },
  { to: "/dashboard/karyawan", label: "Karyawan" },
];

function DashboardAdminNav() {
  return (
    <div className="dashboard-nav-wrapper">
      <nav className="dashboard-nav">
        {dashboardNavItems.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `dashboard-nav-item${isActive ? " active" : ""}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default DashboardAdminNav;
