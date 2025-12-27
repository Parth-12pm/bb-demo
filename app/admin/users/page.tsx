import DesktopLayout from "../../components/DesktopLayout";
import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: "grid_view" },
  { label: "Organizations", href: "/admin/organizations", icon: "apartment" },
  { label: "Users & Roles", href: "/admin/users", icon: "group" },
  { label: "Audit Logs", href: "/admin/audit", icon: "history" },
];

const users = [
  { name: "Rajesh Kumar", id: "BT-1024", role: "Admin", site: "Headquarters", location: "Mumbai, MH", email: "rajesh.k@buildtrack.in", phone: "+91 98765 12345", status: "Active", lastLogin: "12-10-2023" },
  { name: "Anjali Gupta", id: "BT-1156", role: "Project Owner", site: "Whitefield Site", location: "Bangalore, KA", email: "anjali.g@buildtrack.in", phone: "+91 98765 67890", status: "Active", lastLogin: "14-10-2023" },
  { name: "Vikram Singh", id: "BT-2103", role: "Site Manager", site: "Dwarka Sec-21", location: "New Delhi, DL", email: "vikram.s@buildtrack.in", phone: "+91 99887 77665", status: "Pending", lastLogin: "-" },
  { name: "Priya Desai", id: "BT-1892", role: "Site Engineer", site: "Pune Site A", location: "Pune, MH", email: "priya.d@buildtrack.in", phone: "+91 88990 00112", status: "Revoked", lastLogin: "20-09-2023" },
  { name: "Amit Patel", id: "BT-2201", role: "Accountant", site: "Headquarters", location: "Mumbai, MH", email: "amit.p@buildtrack.in", phone: "+91 77665 55443", status: "Active", lastLogin: "15-10-2023" },
];

const roleColors: Record<string, string> = {
  "Admin": "bg-purple-100 text-purple-800",
  "Project Owner": "bg-blue-100 text-blue-800",
  "Site Manager": "bg-slate-100 text-slate-800",
  "Site Engineer": "bg-orange-100 text-orange-800",
  "Accountant": "bg-green-100 text-green-800",
};

const statusColors: Record<string, { bg: string; dot: string }> = {
  "Active": { bg: "bg-green-50 text-green-700 border-green-200", dot: "bg-green-500" },
  "Pending": { bg: "bg-amber-50 text-amber-700 border-amber-200", dot: "bg-amber-500 animate-pulse" },
  "Revoked": { bg: "bg-red-50 text-red-700 border-red-200", dot: "bg-red-500" },
};

export default function UsersPage() {
  return (
    <DesktopLayout
      title="User Role & Access Management"
      subtitle="Manage user permissions, assign roles, and control access levels"
      brandSubtitle="Admin Console"
      navItems={navItems}
      userInfo={{ name: "Arjun Mehta", role: "Super Admin" }}
    >
      <div className="animate-fade-in space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg bg-blue-50 text-[#136dec] flex items-center justify-center">
              <span className="material-symbols-outlined">group</span>
            </div>
            <div>
              <p className="text-slate-500 text-sm font-medium">Total Users</p>
              <p className="text-slate-900 text-2xl font-bold">142</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
              <span className="material-symbols-outlined">verified_user</span>
            </div>
            <div>
              <p className="text-slate-500 text-sm font-medium">Active Managers</p>
              <p className="text-slate-900 text-2xl font-bold">18</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div>
              <p className="text-slate-500 text-sm font-medium">Pending Invites</p>
              <p className="text-slate-900 text-2xl font-bold">5</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="flex flex-col xl:flex-row gap-4 justify-between">
            <div className="flex-1 min-w-[300px]">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <span className="material-symbols-outlined text-xl">search</span>
                </span>
                <input 
                  type="text" 
                  placeholder="Search by Name, Employee ID, or Phone..." 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#136dec]/20 focus:border-[#136dec] transition-all"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <select className="appearance-none bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg py-2.5 pl-3 pr-10 focus:ring-[#136dec] focus:border-[#136dec]">
                <option>All Roles</option>
                <option>Admin</option>
                <option>Project Owner</option>
                <option>Site Manager</option>
              </select>
              <select className="appearance-none bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg py-2.5 pl-3 pr-10 focus:ring-[#136dec] focus:border-[#136dec]">
                <option>All Statuses</option>
                <option>Active</option>
                <option>Pending</option>
                <option>Revoked</option>
              </select>
              <button className="btn-primary flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold">
                <span className="material-symbols-outlined text-lg">add</span>
                Add User
              </button>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Employee</th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Role</th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Site / Dept</th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Contact</th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Status</th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Last Login</th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-500 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {users.map((user, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors group">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-sm">
                          {user.name.split(' ').map(w => w[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">{user.name}</p>
                          <p className="text-xs text-slate-500">ID: {user.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${roleColors[user.role] || 'bg-slate-100 text-slate-800'}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="p-4">
                      <p className="text-sm font-medium text-slate-900">{user.site}</p>
                      <p className="text-xs text-slate-500">{user.location}</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-slate-600">{user.email}</p>
                      <p className="text-xs text-slate-400">{user.phone}</p>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${statusColors[user.status]?.bg}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${statusColors[user.status]?.dot}`}></span>
                        {user.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-slate-500">{user.lastLogin}</td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-2 text-slate-400 hover:text-[#136dec] hover:bg-blue-50 rounded-lg transition-colors">
                          <span className="material-symbols-outlined text-lg">edit</span>
                        </button>
                        <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <span className="material-symbols-outlined text-lg">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="p-4 border-t border-slate-200 flex items-center justify-between">
            <p className="text-sm text-slate-500">Showing 1 to 5 of 142 users</p>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 border border-slate-200 rounded text-sm font-medium text-slate-500 hover:bg-slate-50 disabled:opacity-50" disabled>Previous</button>
              <button className="px-3 py-1.5 border border-slate-200 rounded text-sm font-medium text-[#136dec] hover:bg-slate-50">Next</button>
            </div>
          </div>
        </div>

        {/* Flow Navigation */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <span className="text-sm text-slate-400">Admin Flow:</span>
          <div className="flex items-center gap-2">
            <Link href="/admin" className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200 transition-colors">Dashboard</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/admin/organizations" className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200 transition-colors">Organizations</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <span className="px-3 py-1 rounded-full bg-[#136dec] text-white text-sm font-medium">Users</span>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/admin/audit" className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200 transition-colors">Audit</Link>
          </div>
        </div>
      </div>
    </DesktopLayout>
  );
}
