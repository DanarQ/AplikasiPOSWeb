import React, { useEffect, useMemo, useState } from "react";
import {
  Banknote,
  ReceiptText,
  CheckCircle,
  XCircle,
  Search,
  CalendarDays,
  Download,
} from "lucide-react";
import "./style/Transaksi.css";

// ====================== TYPES ======================
export type Transaksi = {
  id: string;
  tanggal: string;
  pelanggan: string;
  total: number;
  metode: string;
  status: "Sukses" | "Pending" | "Gagal";
};

// ====================== MOCK SERVICE ======================
const fetchTransaksi = async (): Promise<Transaksi[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "TRX-001",
          tanggal: "17 Apr 2026 08:30",
          pelanggan: "Budi Santoso",
          total: 150000,
          metode: "QRIS",
          status: "Sukses",
        },
        {
          id: "TRX-002",
          tanggal: "17 Apr 2026 09:15",
          pelanggan: "Siti Aminah",
          total: 75000,
          metode: "Tunai",
          status: "Sukses",
        },
        {
          id: "TRX-003",
          tanggal: "17 Apr 2026 10:05",
          pelanggan: "Andi Darmawan",
          total: 250000,
          metode: "Kartu Kredit",
          status: "Pending",
        },
      ]);
    }, 500);
  });
};

// ====================== HELPERS ======================
const formatRupiah = (angka: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(angka);

const statusClass: Record<Transaksi["status"], string> = {
  Sukses: "status-sukses",
  Pending: "status-pending",
  Gagal: "status-gagal",
};

// ====================== CUSTOM HOOK ======================
const useTransaksi = () => {
  const [data, setData] = useState<Transaksi[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransaksi().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, loading };
};

// ====================== COMPONENTS ======================

const SummaryCards = React.memo(({ data }: { data: Transaksi[] }) => {
  const { total, sukses, gagal } = useMemo(() => {
    let t = 0,
      s = 0,
      g = 0;
    for (let i = 0; i < data.length; i++) {
      t += data[i].total;
      if (data[i].status === "Sukses") s++;
      else if (data[i].status === "Gagal") g++;
    }
    return { total: t, sukses: s, gagal: g };
  }, [data]);

  return (
    <div className="transaksi-summary-cards">
      <div className="summary-card">
        <div className="summary-icon">
          <Banknote size={22} />
        </div>
        <div className="summary-info">
          <span className="summary-label">Total Pendapatan</span>
          <p className="summary-value">{formatRupiah(total)}</p>
        </div>
      </div>
      <div className="summary-card">
        <div className="summary-icon">
          <ReceiptText size={22} />
        </div>
        <div className="summary-info">
          <span className="summary-label">Total Transaksi</span>
          <p className="summary-value">{data.length}</p>
        </div>
      </div>
      <div className="summary-card">
        <div className="summary-icon">
          <CheckCircle size={22} />
        </div>
        <div className="summary-info">
          <span className="summary-label">Transaksi Sukses</span>
          <p className="summary-value">{sukses}</p>
        </div>
      </div>
      <div className="summary-card">
        <div className="summary-icon">
          <XCircle size={22} />
        </div>
        <div className="summary-info">
          <span className="summary-label">Transaksi Gagal</span>
          <p className="summary-value">{gagal}</p>
        </div>
      </div>
    </div>
  );
});

const SearchBar = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) => (
  <div className="search-box">
    <Search size={16} className="search-icon" />
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Cari transaksi..."
    />
  </div>
);

const Table = React.memo(({ data }: { data: Transaksi[] }) => (
  <div className="table-container">
    <table className="transaksi-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Tanggal</th>
          <th>Pelanggan</th>
          <th>Metode</th>
          <th>Total</th>
          <th>Status</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={7} className="empty-state">
              Tidak ada transaksi ditemukan.
            </td>
          </tr>
        ) : (
          data.map((trx) => (
            <tr key={trx.id}>
              <td className="trx-id">{trx.id}</td>
              <td>{trx.tanggal}</td>
              <td>{trx.pelanggan}</td>
              <td>{trx.metode}</td>
              <td className="trx-total">{formatRupiah(trx.total)}</td>
              <td>
                <span className={`status-badge ${statusClass[trx.status]}`}>
                  {trx.status}
                </span>
              </td>
              <td>
                <button className="btn-action">Detail</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
));

// ====================== LOADING SKELETON ======================

const LoadingSkeleton = () => (
  <div className="transaksi-loading">
    <div className="skeleton-header">
      <div className="skeleton-block skeleton-title" />
      <div className="skeleton-block skeleton-subtitle" />
    </div>
    <div className="skeleton-cards">
      {[...Array(4)].map((_, i) => (
        <div className="skeleton-card" key={i}>
          <div className="skeleton-block skeleton-icon" />
          <div className="skeleton-info">
            <div className="skeleton-block skeleton-label" />
            <div className="skeleton-block skeleton-value" />
          </div>
        </div>
      ))}
    </div>
    <div className="skeleton-table-section">
      <div className="skeleton-controls">
        <div className="skeleton-block skeleton-search" />
        <div className="skeleton-block skeleton-btn" />
      </div>
      <div className="skeleton-rows">
        {[...Array(5)].map((_, i) => (
          <div className="skeleton-row" key={i}>
            <div className="skeleton-block skeleton-cell-sm" />
            <div className="skeleton-block skeleton-cell-md" />
            <div className="skeleton-block skeleton-cell-lg" />
            <div className="skeleton-block skeleton-cell-md" />
            <div className="skeleton-block skeleton-cell-md" />
            <div className="skeleton-block skeleton-cell-badge" />
            <div className="skeleton-block skeleton-cell-btn" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ====================== MAIN ======================

export default function TransaksiPage() {
  const { data, loading } = useTransaksi();
  const [search, setSearch] = useState("");
  const [debounced, setDebounced] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setDebounced(search), 300);
    return () => clearTimeout(t);
  }, [search]);

  const filtered = useMemo(() => {
    if (!debounced) return data;
    const lowerQuery = debounced.toLowerCase();

    return data.filter(
      (trx) =>
        trx.id.toLowerCase().includes(lowerQuery) ||
        trx.pelanggan.toLowerCase().includes(lowerQuery),
    );
  }, [debounced, data]);

  if (loading) return <LoadingSkeleton />;

  return (
    <div className="transaksi-container">
      <div className="transaksi-header">
        <h1 className="transaksi-title">Data Transaksi</h1>
        <p className="transaksi-subtitle">
          Kelola dan pantau semua transaksi penjualan
        </p>
      </div>

      <SummaryCards data={data} />

      <div className="transaksi-table-section">
        <div className="table-controls">
          <SearchBar value={search} onChange={setSearch} />
          <div className="filter-actions">
            <button className="btn-filter">
              <CalendarDays size={16} />
              Filter Tanggal
            </button>
            <button className="btn-export">
              <Download size={16} />
              Export
            </button>
          </div>
        </div>

        <Table data={filtered} />

        <div className="pagination">
          <span className="pagination-info">
            Menampilkan {filtered.length} dari {data.length} transaksi
          </span>
          <div className="pagination-controls">
            <button className="btn-page" disabled>
              Sebelumnya
            </button>
            <button className="btn-page active">1</button>
            <button className="btn-page" disabled>
              Berikutnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
