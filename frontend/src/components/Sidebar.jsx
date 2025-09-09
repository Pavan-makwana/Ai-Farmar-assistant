import {
    Home,
    Sprout,
    CloudSun,
    FlaskConical,
    Bug,
    TrendingUp,
    Brain,
    Settings,
  } from "lucide-react";
  
  export default function Sidebar({ user }) {
    return (
      <div className="h-screen w-64 bg-white border-r flex flex-col justify-between">
        {/* Logo Section */}
        <div>
          <div className="flex items-center gap-2 px-6 py-4 border-b">
            <Sprout className="text-green-600" size={24} />
            <h1 className="text-lg font-bold text-green-700">KRISHI SAKHA</h1>
          </div>
  
          {/* Navigation Links */}
          <nav className="flex flex-col mt-4 space-y-1">
            <NavItem icon={<Home size={20} />} text="Dashboard" active />
            <NavItem icon={<Sprout size={20} />} text="Crop Recommendations" />
            <NavItem icon={<CloudSun size={20} />} text="Weather Forecast" />
            <NavItem icon={<FlaskConical size={20} />} text="Soil Analysis" />
            <NavItem icon={<Bug size={20} />} text="Pest Alerts" />
            <NavItem icon={<TrendingUp size={20} />} text="Market Prices" />
            <NavItem icon={<Brain size={20} />} text="AI Assistant" />
            <NavItem icon={<Settings size={20} />} text="Settings" />
          </nav>
        </div>
  
        {/* User Profile */}
        <div className="flex items-center gap-3 p-4 border-t">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white font-semibold">
            {user?.name?.split(" ").map(n => n[0]).join("") || "U"}
          </div>
          <div>
            <p className="font-medium">{user?.name || "User"}</p>
            <p className="text-sm text-gray-500">{user?.role || "Farmer"}</p>
          </div>
        </div>
      </div>
    );
  }
  
  function NavItem({ icon, text, active }) {
    return (
      <button
        className={`flex items-center gap-3 px-6 py-2 text-left transition w-full ${
          active
            ? "bg-black text-white rounded-r-full font-semibold"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        {icon}
        <span className="text-sm">{text}</span>
      </button>
    );
  }
  