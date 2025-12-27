import DesktopLayout from "../../components/DesktopLayout";
import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: "grid_view" },
  { label: "Organizations", href: "/admin/organizations", icon: "apartment" },
  { label: "Users & Roles", href: "/admin/users", icon: "group" },
  { label: "Audit Logs", href: "/admin/audit", icon: "history" },
];

const organizations = [
  { name: "Sri Krishna Constructions Pvt. Ltd.", location: "Bengaluru, KA", projects: 12, users: 45, status: "Active", verified: true },
  { name: "BuildWell Infrastructure", location: "Mumbai, MH", projects: 8, users: 32, status: "Active", verified: true },
  { name: "Sunrise Developers", location: "Pune, MH", projects: 5, users: 18, status: "Active", verified: false },
  { name: "Metro Construction Co.", location: "Chennai, TN", projects: 3, users: 15, status: "Pending", verified: false },
  { name: "Green Valley Builders", location: "Hyderabad, TS", projects: 7, users: 28, status: "Active", verified: true },
];

export default function OrganizationsPage() {
  return (
    <DesktopLayout
      title="Organization Registry"
      subtitle="Manage registered construction companies"
      brandSubtitle="Admin Console"
      navItems={navItems}
      userInfo={{ name: "Arjun Mehta", role: "Super Admin" }}
    >
      <div className="animate-fade-in space-y-6">
        {/* Search & Actions */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
              <span className="material-symbols-outlined text-xl">search</span>
            </span>
            <input 
              type="text" 
              placeholder="Search organizations..." 
              className="w-full bg-white border border-slate-200 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#136dec]/20 focus:border-[#136dec] transition-all"
            />
          </div>
          <button className="btn-primary flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold">
            <span className="material-symbols-outlined text-lg">add</span>
            Add Organization
          </button>
        </div>

        {/* Organizations Table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Organization</th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Location</th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Projects</th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Users</th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Status</th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-500 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {organizations.map((org, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#136dec] to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                          {org.name.split(' ').map(w => w[0]).slice(0, 2).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 flex items-center gap-1">
                            {org.name}
                            {org.verified && <span className="material-symbols-outlined text-green-500 text-sm">verified</span>}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-slate-600">{org.location}</td>
                    <td className="p-4 text-sm font-medium text-slate-900">{org.projects}</td>
                    <td className="p-4 text-sm font-medium text-slate-900">{org.users}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                        org.status === 'Active' 
                          ? 'bg-green-50 text-green-700 border border-green-200' 
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${org.status === 'Active' ? 'bg-green-500' : 'bg-amber-500'}`}></span>
                        {org.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-2 text-slate-400 hover:text-[#136dec] hover:bg-blue-50 rounded-lg transition-colors">
                          <span className="material-symbols-outlined text-lg">visibility</span>
                        </button>
                        <button className="p-2 text-slate-400 hover:text-[#136dec] hover:bg-blue-50 rounded-lg transition-colors">
                          <span className="material-symbols-outlined text-lg">edit</span>
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
            <p className="text-sm text-slate-500">Showing 1 to 5 of 24 organizations</p>
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
            <span className="px-3 py-1 rounded-full bg-[#136dec] text-white text-sm font-medium">Organizations</span>
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
