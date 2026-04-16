import { Outlet } from "react-router";
import ProdukAdminNav from "../pages/Produk/ProdukAdminNav";
function ProdukLayout() {
  return (
    <>
      <ProdukAdminNav />
      <div>
        <Outlet />
      </div>
    </>
  );
}
export default ProdukLayout;
