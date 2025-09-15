
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Alarm, Home, Users, MoneySack, Statistic } from "@/components/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Sidebar({ className }: { className?: string }) {
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
    <div className={`bg-white border-r border-sidebar-border pt-8 ${className}`}>
      <ul className="flex flex-col gap-3 justify-center items-center">
        {listMenu.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.name} className={`w-10 h-10 rounded-md flex items-center justify-center ${activeMenu == item.name ? 'bg-icon-secondary-soft' : null}`}>
              <Link to={item.path} onClick={() => setActiveMenu(item.name)}>
                <Tooltip>
                  <TooltipTrigger>
                    <Icon className={`${activeMenu === item.name ? "text-icon-primary" : "text-icon-secondary"}`} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
