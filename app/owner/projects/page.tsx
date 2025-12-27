import DesktopLayout from "../../components/DesktopLayout";
import Link from "next/link";

const navItems = [
  { label: "Overview", href: "/owner", icon: "dashboard" },
  { label: "Projects", href: "/owner/projects", icon: "business_center" },
  { label: "Budget", href: "/owner/budget", icon: "currency_rupee" },
  { label: "Timeline", href: "/owner/timeline", icon: "schedule" },
  { label: "Reports", href: "/owner/reports", icon: "bar_chart" },
];

const projects = [
  { 
    name: "Sunrise Apartments", 
    id: "PRJ-Pun-101",
    location: "Pune, MH", 
    status: "On Schedule", 
    statusColor: "green",
    completion: 65,
    budget: "₹ 4.5 Cr",
    spent: "₹ 2.9 Cr",
    manager: "Vikram Singh",
    workers: 120,
    image: "🏢"
  },
  { 
    name: "Green Valley Villa", 
    id: "PRJ-Blr-042",
    location: "Bengaluru, KA", 
    status: "Delayed", 
    statusColor: "orange",
    completion: 45,
    budget: "₹ 1.2 Cr",
    spent: "₹ 0.8 Cr",
    manager: "Anjali Gupta",
    workers: 45,
    image: "🏡"
  },
  { 
    name: "Tech Park Phase 2", 
    id: "PRJ-Hyd-078",
    location: "Hyderabad, TS", 
    status: "On Schedule", 
    statusColor: "green",
    completion: 30,
    budget: "₹ 8.5 Cr",
    spent: "₹ 2.5 Cr",
    manager: "Priya Sharma",
    workers: 180,
    image: "🏗️"
  },
  { 
    name: "Metro Station #14", 
    id: "PRJ-Chn-056",
    location: "Chennai, TN", 
    status: "On Schedule", 
    statusColor: "green",
    completion: 55,
    budget: "₹ 12.0 Cr",
    spent: "₹ 6.6 Cr",
    manager: "Rajesh Kumar",
    workers: 200,
    image: "🚇"
  },
];

export default function OwnerProjects() {
  return (
    <DesktopLayout
      title="Project Summary"
      subtitle="Overview of all active construction projects"
      brandName="Sri Krishna Const."
      brandSubtitle="Owner Dashboard"
      navItems={navItems}
      userInfo={{ name: "Ramesh Krishnan", role: "Owner" }}
    >
      <div className="animate-fade-in space-y-6">
        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
            <p className="text-3xl font-bold text-slate-900">12</p>
            <p className="text-sm text-slate-500">Total Projects</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
            <p className="text-3xl font-bold text-green-600">9</p>
            <p className="text-sm text-slate-500">On Schedule</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
            <p className="text-3xl font-bold text-orange-600">2</p>
            <p className="text-sm text-slate-500">Delayed</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
            <p className="text-3xl font-bold text-blue-600">1</p>
            <p className="text-sm text-slate-500">Planning</p>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
          {projects.map((project, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-6 card-hover">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center text-3xl">
                    {project.image}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{project.name}</h3>
                    <p className="text-sm text-slate-500">{project.id} • {project.location}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-${project.statusColor}-50 text-${project.statusColor}-700 border border-${project.statusColor}-200`}>
                  <span className={`w-1.5 h-1.5 rounded-full bg-${project.statusColor}-500`}></span>
                  {project.status}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-500">Completion</span>
                  <span className="font-bold text-[#136dec]">{project.completion}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-100">
                  <div 
                    className="h-2 rounded-full bg-[#136dec] transition-all duration-500" 
                    style={{ width: `${project.completion}%` }}
                  ></div>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Budget</p>
                  <p className="text-lg font-bold text-slate-900">{project.budget}</p>
                  <p className="text-xs text-slate-500">Spent: {project.spent}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Team</p>
                  <p className="text-lg font-bold text-slate-900">{project.workers}</p>
                  <p className="text-xs text-slate-500">Manager: {project.manager}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flow Navigation */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <span className="text-sm text-slate-400">Owner Flow:</span>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <Link href="/owner" className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">✓ Overview</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <span className="px-3 py-1 rounded-full bg-[#136dec] text-white text-sm font-medium">Projects</span>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/owner/budget" className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200 transition-colors">Budget</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/owner/timeline" className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200 transition-colors">Timeline</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/owner/reports" className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200 transition-colors">Reports</Link>
          </div>
        </div>
      </div>
    </DesktopLayout>
  );
}
