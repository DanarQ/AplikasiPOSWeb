import { Outlet } from "react-router";
import SettingsAdminNav from "../pages/Settings/SettingsAdminNav";
function SettingsLayout() {
  return (
    <>
      <SettingsAdminNav />
      <div>
        <Outlet />
      </div>
    </>
  );
}
export default SettingsLayout;
