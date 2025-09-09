import Sidebar from "./Sidebar";

export default function Dashboard({ user, handleLogout }) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar user={user} />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-green-50 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome, {user?.name || "Farmer"}!
          </h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        <p className="text-gray-700 mb-6">
          This is your personalized dashboard. Add features like crop
          recommendations, weather updates, and AI Assistant here!
        </p>

        {/* Example Feature Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title="Crop Recommendations"
            desc="Get AI-powered crop suggestions."
          />
          <FeatureCard
            title="Weather Forecast"
            desc="Stay updated on local weather."
          />
          <FeatureCard
            title="Soil Analysis"
            desc="Analyze soil health and nutrients."
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="bg-white shadow rounded-lg p-5 hover:shadow-md transition">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
