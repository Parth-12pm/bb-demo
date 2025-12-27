import DesktopLayout from "../components/DesktopLayout";
import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: "grid_view" },
  { label: "Organizations", href: "/admin/organizations", icon: "apartment" },
  { label: "Users & Roles", href: "/admin/users", icon: "group" },
  { label: "Audit Logs", href: "/admin/audit", icon: "history" },
];

const stats = [
  { label: "Organizations", value: "24", icon: "apartment", change: "+3 this month", color: "blue" },
  { label: "Total Users", value: "142", icon: "group", change: "+12 this week", color: "green" },
  { label: "Active Projects", value: "67", icon: "folder", change: "Across all orgs", color: "purple" },
];

const recentActivity = [
  { user: "Rajesh Kumar", action: "Created new organization", time: "2 hours ago", icon: "apartment" },
  { user: "System", action: "Daily backup completed", time: "4 hours ago", icon: "backup" },
  { user: "Anjali Gupta", action: "Updated user permissions", time: "Yesterday", icon: "lock" },
  { user: "Vikram Singh", action: "Exported audit logs", time: "2 days ago", icon: "download" },
];

export default function AdminDashboard() {
  return (
    <DesktopLayout
      title="Admin Dashboard"
      subtitle="System configuration and management"
      brandSubtitle="Admin Console"
      navItems={navItems}
      userInfo={{ name: "Arjun Mehta", role: "Super Admin" }}
    >
      <div className="animate-fade-in space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 stagger-children">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-5 card-hover">
              <div className="flex items-center gap-4">
                <div className={`h-12 w-12 rounded-lg bg-${stat.color}-50 text-${stat.color}-600 flex items-center justify-center`}>
                  <span className="material-symbols-outlined">{stat.icon}</span>
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                  <p className="text-slate-900 text-2xl font-bold">{stat.value}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{stat.change}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/admin/organizations" className="flex flex-col items-center gap-2 p-4 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-[#136dec] transition-colors group">
              <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">add_business</span>
              <span className="text-sm font-medium">Add Organization</span>
            </Link>
            <Link href="/admin/users" className="flex flex-col items-center gap-2 p-4 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-[#136dec] transition-colors group">
              <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">person_add</span>
              <span className="text-sm font-medium">Add User</span>
            </Link>
            <Link href="/admin/audit" className="flex flex-col items-center gap-2 p-4 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-[#136dec] transition-colors group">
              <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">monitoring</span>
              <span className="text-sm font-medium">View Logs</span>
            </Link>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-[#136dec] transition-colors cursor-pointer group">
              <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">settings</span>
              <span className="text-sm font-medium">Settings</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-900">Recent Activity</h3>
            <Link href="/admin/audit" className="text-sm font-medium text-[#136dec] hover:underline">View All</Link>
          </div>
          <div className="space-y-4">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                  <span className="material-symbols-outlined text-lg">{item.icon}</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">{item.user}</p>
                  <p className="text-sm text-slate-500">{item.action}</p>
                </div>
                <span className="text-xs text-slate-400">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Flow Navigation */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <span className="text-sm text-slate-400">Admin Flow:</span>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#136dec] text-white text-sm font-medium">Dashboard</span>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/admin/organizations" className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200 transition-colors">Organizations</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/admin/users" className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200 transition-colors">Users</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/admin/audit" className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200 transition-colors">Audit</Link>
          </div>
        </div>
      </div>
    </DesktopLayout>
  );
}
