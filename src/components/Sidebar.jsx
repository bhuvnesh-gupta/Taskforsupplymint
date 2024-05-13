import React from "react";
import icons from "../icons/SideBarIcons";
import logo from '../assets/logo.svg'

const SidebarButton = ({ icon, label }) => (
    <button className="mt-9 border-transparent rounded py-2 px-4 bg-slate-50 hover:bg-slate-200  text-black focus:outline-none">
        <img src={icon} alt={label} className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 " />
    </button>
);

function Sidebar() {
    return (
        <aside className="hidden sm:flex flex-col h-auto items-center p-3  w-16 sm:w-24  shadow-2xl bg-slate-50">
            <div className="mt-4 ml-3 w-10 sm:w-12 md:w-14">
                <img src={logo} alt="logo" />
            </div>
            {icons.items.map((item, index) => (
                <SidebarButton className ='w-8' key={index} icon={item.icon} label={item.label} />
            ))}
        </aside>
    );
}

export default Sidebar;
