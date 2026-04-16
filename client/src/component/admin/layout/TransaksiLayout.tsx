import { Outlet } from "react-router";
import TransaksiAdminNav from "../pages/Transaksi/TransaksiAdminNav";
function TransaksiLayout() {
  return (
    <>
      <TransaksiAdminNav />
      <div>
        <Outlet />
      </div>
    </>
  );
}
export default TransaksiLayout;
