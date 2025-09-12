import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
    return (
        <div>
            <Header />
            <div className="flex">
                <Sidebar />
                <main className="flex-1 p-5 overflow-auto h-full">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
