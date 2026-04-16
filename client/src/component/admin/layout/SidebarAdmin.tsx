import { NavLink, useLocation } from "react-router";
import {
  LayoutDashboard,
  Package,
  Tag,
  ShoppingCart,
  BarChart2,
  Settings,
  LogOut,
  Store,
} from "lucide-react";
import "./style/SidebarAdmin.css";

const navItems = [
  {
    to: "/dashboard/analitik",
    label: "dashboard",
    icon: LayoutDashboard,
    activePrefix: "/dashboard",
  },
  { to: "/produk", label: "Produk", icon: Package },
  { to: "/kategori", label: "Kategori", icon: Tag },
  { to: "/transaksi", label: "Transaksi", icon: ShoppingCart },
  { to: "/laporan", label: "Laporan", icon: BarChart2 },
];

function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <Store size={24} />
        </div>
        <div className="sidebar-brand">
          <span className="sidebar-brand-name">Armanda</span>
          <span className="sidebar-brand-sub">Point of Sale</span>
        </div>
      </div>

      <nav className="sidebar-content">
        <p className="sidebar-section-label">Menu</p>
        {navItems.map(({ to, label, icon: Icon, activePrefix }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) => {
              const active =
                isActive ||
                (activePrefix ? pathname.startsWith(activePrefix) : false);
              return `sidebar-nav-item${active ? " active" : ""}`;
            }}
          >
            <Icon size={18} className="sidebar-nav-icon" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `sidebar-nav-item${isActive ? " active" : ""}`
          }
        >
          <Settings size={18} className="sidebar-nav-icon" />
          <span>Settings</span>
        </NavLink>
        <button className="sidebar-nav-item sidebar-logout">
          <LogOut size={18} className="sidebar-nav-icon" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
