import { Outlet } from "react-router-dom";
import { BottomTabMenu } from "./BottomTabMenu";

export const PanelLayout = () => {
  return (
    <div className="relative">
      <Outlet />
      <BottomTabMenu />
    </div>
  );
};
