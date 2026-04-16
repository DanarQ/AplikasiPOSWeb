import { Outlet } from "react-router";
import KategoriAdminNav from "../pages/Kategori/KategoriAdminNav";
function KategoriLayout() {
  return (
    <>
      <KategoriAdminNav />
      <div>
        <Outlet />
      </div>
    </>
  );
}
export default KategoriLayout;
