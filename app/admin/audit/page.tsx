import DesktopLayout from "../../components/DesktopLayout";
import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: "grid_view" },
  { label: "Organizations", href: "/admin/organizations", icon: "apartment" },
  { label: "Users & Roles", href: "/admin/users", icon: "group" },
  { label: "Audit Logs", href: "/admin/audit", icon: "history" },
];

const logs = [
  { timestamp: "24-10-2023 14:30:45", user: "Vikram Singh", role: "Site Engineer", type: "Transaction", typeColor: "emerald", description: "Authorized payment of ₹ 4,50,000 to Vendor: BuildWell Supplies", ip: "192.168.1.42", success: true },
  { timestamp: "24-10-2023 11:15:22", user: "Anjali Desai", role: "Procurement Mgr", type: "Data Entry", typeColor: "blue", description: "Modified material requisition #REQ-882 for Cement Grade 43", ip: "10.0.0.12", success: true },
  { timestamp: "24-10-2023 09:45:10", user: "Unknown", role: "External", type: "Security", typeColor: "red", description: "Failed login attempt (3rd retry) for account: admin@nirmaan.co.in", ip: "45.23.11.89", success: false },
  { timestamp: "23-10-2023 16:20:05", user: "Priya Sharma", role: "HR Manager", type: "System", typeColor: "purple", description: "Updated project staffing timeline for 'Skyline Towers - Phase 2'", ip: "192.168.1.15", success: true },
  { timestamp: "23-10-2023 10:00:00", user: "System Bot", role: "Automated", type: "System", typeColor: "slate", description: "Daily database backup completed successfully. Archive ID: BK-2023-10-23", ip: "localhost", success: true },
  { timestamp: "23-10-2023 08:15:12", user: "Amit Verma", role: "Inventory Mgr", type: "Inventory", typeColor: "orange", description: "Marked 150 units of Steel Rebar as 'Damaged' in Warehouse B. Value Loss: ₹ 75,000", ip: "10.0.0.45", success: true },
];

const typeColors: Record<string, string> = {
  "emerald": "bg-emerald-100 text-emerald-800 border-emerald-200",
  "blue": "bg-blue-100 text-blue-800 border-blue-200",
  "red": "bg-red-100 text-red-800 border-red-200",
  "purple": "bg-purple-100 text-purple-800 border-purple-200",
  "slate": "bg-slate-100 text-slate-800 border-slate-200",
  "orange": "bg-orange-100 text-orange-800 border-orange-200",
};

export default function AuditPage() {
  return (
    <DesktopLayout
      title="System Audit & Activity Logs"
      subtitle="Review chronological records of system events, user actions, and security alerts"
      brandSubtitle="Admin Console"
      navItems={navItems}
      userInfo={{ name: "Arjun Mehta", role: "Super Admin" }}
    >
      <div className="animate-fade-in space-y-6">
        {/* Filters */}
        <div className="bg-white rounded-xl border border-slate-200 p-4 md:p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-end">
            <div className="lg:col-span-3">
              <label className="block text-slate-700 text-sm font-medium mb-1.5">Date Range</label>
              <select className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg p-2.5 focus:ring-[#136dec] focus:border-[#136dec]">
                <option>Last 30 Days</option>
                <option>This Month (Oct 2023)</option>
                <option>Last Month (Sep 2023)</option>
                <option>Custom Range</option>
              </select>
            </div>
            <div className="lg:col-span-3">
              <label className="block text-slate-700 text-sm font-medium mb-1.5">User</label>
              <select className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg p-2.5 focus:ring-[#136dec] focus:border-[#136dec]">
                <option>All Users</option>
                <option>Vikram Singh</option>
                <option>Anjali Desai</option>
                <option>Priya Sharma</option>
              </select>
            </div>
            <div className="lg:col-span-2">
              <label className="block text-slate-700 text-sm font-medium mb-1.5">Activity Type</label>
              <select className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg p-2.5 focus:ring-[#136dec] focus:border-[#136dec]">
                <option>All Types</option>
                <option>Transaction</option>
                <option>Security</option>
                <option>Data Entry</option>
                <option>System</option>
              </select>
            </div>
            <div className="lg:col-span-4">
              <label className="block text-slate-700 text-sm font-medium mb-1.5">Search Logs</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <span className="material-symbols-outlined text-xl">search</span>
                </span>
                <input 
                  type="text" 
                  placeholder="Search by ID, keyword, or IP..." 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#136dec]/20 focus:border-[#136dec] transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Logs Table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-200 flex items-center justify-between">
            <h3 className="font-bold text-slate-900">Activity Log</h3>
            <button className="btn-primary flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold">
              <span className="material-symbols-outlined text-lg">download</span>
              Export Logs
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-[180px]">Timestamp</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-[200px]">User</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-[120px]">Event Type</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Description</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-[140px]">IP Address</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-[80px] text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {logs.map((log, i) => (
                  <tr key={i} className={`hover:bg-slate-50 transition-colors ${!log.success ? 'bg-red-50/30' : ''}`}>
                    <td className="p-4 text-sm text-slate-500 font-medium whitespace-nowrap">{log.timestamp}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className={`size-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          log.user === 'Unknown' ? 'bg-slate-200 text-slate-500 grayscale' :
                          log.user === 'System Bot' ? 'bg-slate-200 text-slate-500' :
                          'bg-[#136dec]/10 text-[#136dec]'
                        }`}>
                          {log.user === 'System Bot' ? (
                            <span className="material-symbols-outlined text-sm">smart_toy</span>
                          ) : (
                            log.user.split(' ').map(w => w[0]).join('')
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">{log.user}</p>
                          <p className="text-xs text-slate-500">{log.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${typeColors[log.typeColor]}`}>
                        {log.type}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-slate-700">{log.description}</td>
                    <td className="p-4">
                      <code className={`text-xs px-2 py-1 rounded ${!log.success ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-slate-100 text-slate-600'}`}>
                        {log.ip}
                      </code>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`material-symbols-outlined text-xl ${log.success ? 'text-emerald-600' : 'text-red-500'}`}>
                        {log.success ? 'check_circle' : 'cancel'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="p-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">Showing 1 to 6 of 1,240 results</p>
            <div className="flex items-center gap-2">
              <button className="h-8 w-8 rounded border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:bg-slate-50 disabled:opacity-50" disabled>
                <span className="material-symbols-outlined text-lg">chevron_left</span>
              </button>
              <button className="h-8 w-8 rounded bg-[#136dec] text-white text-sm font-medium">1</button>
              <button className="h-8 w-8 rounded border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:bg-slate-50">2</button>
              <button className="h-8 w-8 rounded border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:bg-slate-50">3</button>
              <span className="text-slate-400 text-sm px-1">...</span>
              <button className="h-8 w-8 rounded border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:bg-slate-50">12</button>
              <button className="h-8 w-8 rounded border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-50">
                <span className="material-symbols-outlined text-lg">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/* Flow Navigation */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <span className="text-sm text-slate-400">Admin Flow Complete!</span>
          <div className="flex items-center gap-2">
            <Link href="/admin" className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">✓ Dashboard</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/admin/organizations" className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">✓ Organizations</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/admin/users" className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">✓ Users</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <span className="px-3 py-1 rounded-full bg-[#136dec] text-white text-sm font-medium">✓ Audit</span>
          </div>
        </div>

        {/* Back to Home */}
        <div className="flex justify-center pt-4">
          <Link href="/" className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full font-medium transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Role Selection
          </Link>
        </div>
      </div>
    </DesktopLayout>
  );
}
