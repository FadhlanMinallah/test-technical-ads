import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
    return (
        <div>
            <Header className="fixed top-0 left-0 w-full max-h-[70px]" />
            <div className="flex mt-[70px]">
                <Sidebar className="fixed top-[70px] left-0 w-20 h-screen" />
                <main className="flex-1 p-5 overflow-auto h-[calc(100vh-70px)] ml-20">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
