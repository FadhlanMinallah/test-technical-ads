
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Alarm, Home, Users } from "./icons";
import MoneySack from "./icons/MoneySack";
import Statistic from "./icons/Statistic";

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState("");
  const location = useLocation();
  const pathName = location.pathname;
  useEffect(() => {
    setActiveMenu(pathName.replace('/', ''))
  }, [pathName])


  const listMenu = [
    { name: "dashboard", path: "/dashboard", icon: Home },
    { name: "users", path: "/users", icon: Users },
    { name: "schedule", path: "/schedule", icon: Alarm },
    { name: "finance", path: "/finance", icon: MoneySack },
    { name: "statistic", path: "/statistic", icon: Statistic },
  ];

  return (
    <div className="w-20 h-screen bg-white border-r border-sidebar-border pt-8">
      <ul className="flex flex-col gap-3 justify-center items-center">
        {listMenu.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.name} className={`w-10 h-10 rounded-md flex items-center justify-center ${activeMenu == item.name ? 'bg-icon-secondary-soft' : null}`}>
              <Link to={item.path} onClick={() => setActiveMenu(item.name)}>
                <Icon
                  className={`${activeMenu === item.name ? "text-icon-primary" : "text-icon-secondary"
                    }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
