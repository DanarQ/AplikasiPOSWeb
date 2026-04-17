import React from "react";
import {
  DollarSign,
  ShoppingBag,
  Users,
  TrendingUp,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
} from "lucide-react";
import "./style/RingkasanAnalitik.css";
// ====================== DATA LAYER ======================
const kpiData = [
  {
    id: 1,
    title: "Total Pendapatan",
    value: "Rp 24.500.000",
    trend: "+12.5%",
    isPositive: true,
    icon: DollarSign,
    color: "blue",
  },
  {
    id: 2,
    title: "Total Pesanan",
    value: "1,245",
    trend: "+5.2%",
    isPositive: true,
    icon: ShoppingBag,
    color: "emerald",
  },
  {
    id: 3,
    title: "Pelanggan Baru",
    value: "384",
    trend: "-2.4%",
    isPositive: false,
    icon: Users,
    color: "purple",
  },
  {
    id: 4,
    title: "Rata-rata Transaksi",
    value: "Rp 125.000",
    trend: "+8.1%",
    isPositive: true,
    icon: TrendingUp,
    color: "orange",
  },
];

const chartData = [40, 60, 45, 80, 55, 90, 65, 85, 70, 95, 60, 80];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Ags",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];

const topProducts = [
  {
    id: 1,
    name: "Kopi Arabica 250g",
    sales: 124,
    revenue: "Rp 6.200.000",
    progress: 85,
    color: "emerald",
  },
  {
    id: 2,
    name: "Teh Hijau Premium",
    sales: 98,
    revenue: "Rp 3.430.000",
    progress: 65,
    color: "blue",
  },
];

const recentTransactions = [
  {
    id: "#TRX-001",
    name: "Budi Santoso",
    date: "17 Apr 2026",
    amount: "Rp 250.000",
    status: "Selesai",
  },
  {
    id: "#TRX-002",
    name: "Ani Wijaya",
    date: "17 Apr 2026",
    amount: "Rp 1.450.000",
    status: "Selesai",
  },
];

// ====================== COMPONENTS ======================

const KPIItem = React.memo(({ item }: { item: (typeof kpiData)[0] }) => {
  const Icon = item.icon;
  return (
    <div className="kpi-card">
      <div className={`kpi-icon-wrapper ${item.color}`}>
        <Icon size={24} />
      </div>
      <div className="kpi-content">
        <span className="kpi-title">{item.title}</span>
        <h3 className="kpi-value">{item.value}</h3>
        <div className="kpi-trend">
          <span
            className={`trend-badge ${item.isPositive ? "positive" : "negative"}`}
          >
            {item.isPositive ? (
              <ArrowUpRight size={14} />
            ) : (
              <ArrowDownRight size={14} />
            )}
            {item.trend}
          </span>
          <span className="trend-label">vs bulan lalu</span>
        </div>
      </div>
    </div>
  );
});

const KPIGrid = React.memo(() => (
  <div className="kpi-grid">
    {kpiData.map((item) => (
      <KPIItem key={item.id} item={item} />
    ))}
  </div>
));

const ChartSection = React.memo(() => (
  <div className="chart-section">
    <div className="section-header">
      <h3>Grafik Penjualan</h3>
      <button className="more-btn">
        <MoreHorizontal size={20} />
      </button>
    </div>
    <div className="chart-container">
      <div className="chart-bars">
        {chartData.map((val, idx) => (
          <div key={idx} className="bar-group">
            <div className="bar-wrapper">
              <div className="bar-fill" style={{ height: `${val}%` }} />
            </div>
            <span className="bar-label">{months[idx]}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
));

const TopProducts = React.memo(() => (
  <div className="top-products-section">
    <div className="section-header">
      <h3>Produk Terlaris</h3>
      <button className="more-btn">
        <MoreHorizontal size={20} />
      </button>
    </div>
    <div className="products-list">
      {topProducts.map((product) => (
        <div key={product.id} className="product-item">
          <div className="product-info">
            <span className="product-name">{product.name}</span>
            <span className="product-sales">{product.sales} terjual</span>
          </div>
          <div className="product-stats">
            <span className="product-revenue">{product.revenue}</span>
            <div className="progress-bar-wrapper">
              <div
                className={`progress-bar-fill ${product.color}`}
                style={{ width: `${product.progress}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
));

const TransactionsTable = React.memo(() => (
  <div className="recent-transactions-section">
    <div className="section-header">
      <h3>Transaksi Terbaru</h3>
      <button className="view-all-btn">Lihat Semua</button>
    </div>
    <div className="table-responsive">
      <table className="transactions-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Tanggal</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {recentTransactions.map((trx) => (
            <tr key={trx.id}>
              <td className="trx-id">{trx.id}</td>
              <td>{trx.name}</td>
              <td>{trx.date}</td>
              <td className="trx-amount">{trx.amount}</td>
              <td>
                <span className={`status-badge ${trx.status.toLowerCase()}`}>
                  {trx.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
));

// ====================== MAIN CONTAINER ======================

const RingkasanAnalitik = () => {
  return (
    <div className="analytics-container">
      <header className="analytics-header">
        <div className="header-title">
          <h1>Ringkasan Analitik</h1>
          <p>Pantau performa bisnis Anda</p>
        </div>
        <div className="header-actions">
          <button className="date-filter-btn">
            <Calendar size={16} />
            Filter Tanggal
          </button>
        </div>
      </header>

      <KPIGrid />

      <div className="dashboard-main-grid">
        <ChartSection />
        <TopProducts />
      </div>

      <TransactionsTable />
    </div>
  );
};

export default RingkasanAnalitik;
