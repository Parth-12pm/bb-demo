import DesktopLayout from "../../components/DesktopLayout";
import Link from "next/link";

const navItems = [
  { label: "Projects", href: "/manager-web", icon: "folder_open" },
  { label: "DPR Review", href: "/manager-web/dpr-review", icon: "description" },
  { label: "Approvals", href: "/manager-web/approvals", icon: "task_alt" },
  { label: "Attendance", href: "/manager-web/attendance", icon: "groups" },
  { label: "Budget", href: "/manager-web/budget", icon: "currency_rupee" },
];

const approvals = [
  { type: "Material", item: "Cement 53 Grade", qty: "100 Bags", cost: "₹ 45,000", requester: "Priya Sharma", project: "Oberoi Sky City", date: "25-10-2023", priority: "high" },
  { type: "Material", item: "TMT Steel 12mm", qty: "500 kg", cost: "₹ 32,500", requester: "Amit Kumar", project: "Green Valley", date: "25-10-2023", priority: "medium" },
  { type: "Task", item: "Electrical Wiring - Phase 1", qty: "-", cost: "₹ 75,000", requester: "Raju Singh", project: "Tech Park", date: "24-10-2023", priority: "high" },
  { type: "Material", item: "Sand (River)", qty: "10 Trucks", cost: "₹ 60,000", requester: "Mohan Das", project: "Metro Station", date: "24-10-2023", priority: "low" },
];

export default function ManagerApprovals() {
  return (
    <DesktopLayout
      title="Material & Task Approvals"
      subtitle="Review and approve material requests and task completions"
      brandName="BuildTrack India"
      brandSubtitle="Manager Console"
      navItems={navItems}
      userInfo={{ name: "Vikram Singh", role: "Project Manager" }}
    >
      <div className="animate-fade-in space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
            <p className="text-2xl font-bold text-amber-700">8</p>
            <p className="text-sm text-amber-600">Pending Approvals</p>
          </div>
          <div className="bg-green-50 rounded-xl p-4 border border-green-200">
            <p className="text-2xl font-bold text-green-700">24</p>
            <p className="text-sm text-green-600">Approved This Week</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
            <p className="text-2xl font-bold text-blue-700">₹ 4.2 L</p>
            <p className="text-sm text-blue-600">Total Value Pending</p>
          </div>
        </div>

        {/* Approvals Table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-bold text-slate-900">Pending Requests</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200">All</button>
              <button className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-50">Materials</button>
              <button className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-50">Tasks</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Type</th>
                  <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Item</th>
                  <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Project</th>
                  <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Qty</th>
                  <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Cost</th>
                  <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Priority</th>
                  <th className="p-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {approvals.map((item, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${item.type === 'Material' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                        {item.type}
                      </span>
                    </td>
                    <td className="p-4">
                      <p className="text-sm font-medium text-slate-900">{item.item}</p>
                      <p className="text-xs text-slate-500">By: {item.requester}</p>
                    </td>
                    <td className="p-4 text-sm text-slate-600">{item.project}</td>
                    <td className="p-4 text-sm text-slate-600">{item.qty}</td>
                    <td className="p-4 text-sm font-medium text-slate-900">{item.cost}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.priority === 'high' ? 'bg-red-100 text-red-700' :
                        item.priority === 'medium' ? 'bg-amber-100 text-amber-700' :
                        'bg-slate-100 text-slate-600'
                      }`}>
                        {item.priority.charAt(0).toUpperCase() + item.priority.slice(1)}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                          <span className="material-symbols-outlined text-lg">close</span>
                        </button>
                        <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
                          <span className="material-symbols-outlined text-lg">check</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Flow Navigation */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <span className="text-sm text-slate-400">Manager Web Flow:</span>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <Link href="/manager-web" className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">✓ Projects</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/manager-web/dpr-review" className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">✓ DPR Review</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <span className="px-3 py-1 rounded-full bg-[#136dec] text-white text-sm font-medium">Approvals</span>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/manager-web/attendance" className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200">Attendance</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/manager-web/budget" className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200">Budget</Link>
          </div>
        </div>
      </div>
    </DesktopLayout>
  );
}
