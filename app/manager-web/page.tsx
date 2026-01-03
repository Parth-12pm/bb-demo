import DesktopLayout from "../components/DesktopLayout";
import Link from "next/link";

const navItems = [
  { label: "Projects", href: "/manager-web", icon: "folder_open" },
  { label: "DPR Review", href: "/manager-web/dpr-review", icon: "description" },
  { label: "Approvals", href: "/manager-web/approvals", icon: "task_alt" },
  { label: "Attendance", href: "/manager-web/attendance", icon: "groups" },
  { label: "Budget", href: "/manager-web/budget", icon: "currency_rupee" },
];

const projects = [
  { name: "Oberoi Sky City - Wing B", id: "PRJ-Mum-042", status: "Critical", statusColor: "red", pendingDPR: 5, pendingApprovals: 8 },
  { name: "Green Valley Villa", id: "PRJ-Pun-108", status: "On Track", statusColor: "green", pendingDPR: 2, pendingApprovals: 3 },
  { name: "Tech Park Phase 2", id: "PRJ-Hyd-078", status: "On Track", statusColor: "green", pendingDPR: 0, pendingApprovals: 1 },
  { name: "Metro Station #14", id: "PRJ-Chn-056", status: "Delayed", statusColor: "orange", pendingDPR: 3, pendingApprovals: 4 },
];

export default function ManagerWebProjects() {
  return (
    <DesktopLayout
      title="Project Dashboard"
      subtitle="Review DPRs, approve materials, and monitor attendance"
      brandName="BharatBuild"
      brandSubtitle="Manager Console"
      navItems={navItems}
      userInfo={{ name: "Vikram Singh", role: "Project Manager" }}
    >
      <div className="animate-fade-in space-y-6">
        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-5 border border-slate-200 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
              <span className="material-symbols-outlined">pending_actions</span>
            </div>
            <div>
              <p className="text-slate-500 text-sm">Pending DPRs</p>
              <p className="text-2xl font-bold text-slate-900">10</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <span className="material-symbols-outlined">approval</span>
            </div>
            <div>
              <p className="text-slate-500 text-sm">Pending Approvals</p>
              <p className="text-2xl font-bold text-slate-900">16</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
              <span className="material-symbols-outlined">check_circle</span>
            </div>
            <div>
              <p className="text-slate-500 text-sm">Approved Today</p>
              <p className="text-2xl font-bold text-slate-900">24</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <span className="material-symbols-outlined">groups</span>
            </div>
            <div>
              <p className="text-slate-500 text-sm">Active Workers</p>
              <p className="text-2xl font-bold text-slate-900">180</p>
            </div>
          </div>
        </div>

        {/* Projects List */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">My Projects</h3>
            <select className="appearance-none bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg px-3 py-2">
              <option>All Projects</option>
              <option>Critical Only</option>
              <option>With Pending Items</option>
            </select>
          </div>
          <div className="divide-y divide-slate-100">
            {projects.map((project, i) => (
              <div key={i} className="p-5 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-${project.statusColor}-50 flex items-center justify-center`}>
                    <span className={`material-symbols-outlined text-${project.statusColor}-600`}>domain</span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{project.name}</h4>
                    <p className="text-sm text-slate-500">{project.id}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-lg font-bold text-red-600">{project.pendingDPR}</p>
                    <p className="text-xs text-slate-500">DPRs</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-amber-600">{project.pendingApprovals}</p>
                    <p className="text-xs text-slate-500">Approvals</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${project.statusColor}-50 text-${project.statusColor}-700 border border-${project.statusColor}-200`}>
                    {project.status}
                  </span>
                  <Link 
                    href="/manager-web/dpr-review"
                    className="px-4 py-2 bg-[#136dec] text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Review
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flow Navigation */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <span className="text-sm text-slate-400">Manager Web Flow:</span>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="px-3 py-1 rounded-full bg-[#136dec] text-white text-sm font-medium">Projects</span>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/manager-web/dpr-review" className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200">DPR Review</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/manager-web/approvals" className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200">Approvals</Link>
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
