import { NavLink } from "react-router";
import {
  ShoppingCart,
  Package,
  Users,
  DollarSign,
  UserCog,
  BarChart2,
} from "lucide-react";
import "./style/DashboardAdminNav.css";

const dashboardNavItems = [
  { to: "/dashboard/analitik", label: "Ringkasan Analitik", icon: BarChart2 },
  { to: "/dashboard/transaksi", label: "Transaksi", icon: ShoppingCart },
  { to: "/dashboard/stok-barang", label: "Stok Barang", icon: Package },
  { to: "/dashboard/pelanggan", label: "Pelanggan", icon: Users },
  { to: "/dashboard/keuangan", label: "Keuangan", icon: DollarSign },
  { to: "/dashboard/karyawan", label: "Karyawan", icon: UserCog },
];

function DashboardAdminNav() {
  return (
    <div className="dashboard-nav-wrapper">
      <nav className="dashboard-nav">
        {dashboardNavItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `dashboard-nav-item${isActive ? " active" : ""}`
            }
          >
            <Icon size={18} className="dashboard-nav-icon" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default DashboardAdminNav;
