import DesktopLayout from "../components/DesktopLayout";
import Link from "next/link";

const navItems = [
  { label: "Overview", href: "/owner", icon: "dashboard" },
  { label: "Projects", href: "/owner/projects", icon: "business_center" },
  { label: "Budget", href: "/owner/budget", icon: "currency_rupee" },
  { label: "Timeline", href: "/owner/timeline", icon: "schedule" },
  { label: "Reports", href: "/owner/reports", icon: "bar_chart" },
];

const stats = [
  { label: "Total Active Projects", value: "12", icon: "engineering", change: "+2 new this month", changeType: "positive" },
  { label: "Total Workforce", value: "450+", icon: "groups", change: "Across 4 sites", changeType: "neutral" },
  { label: "Total Revenue YTD", value: "₹ 12.5 Cr", icon: "payments", change: "↑ 15% vs last year", changeType: "positive" },
];

const projects = [
  { name: "Sunrise Apartments", location: "Pune, MH", status: "On Schedule", statusColor: "green", budget: "₹ 4.5 Cr" },
  { name: "Green Valley Villa", location: "Bengaluru, KA", status: "Delayed", statusColor: "orange", budget: "₹ 1.2 Cr" },
  { name: "Tech Park Phase 2", location: "Hyderabad, TS", status: "On Schedule", statusColor: "green", budget: "₹ 8.5 Cr" },
  { name: "Riverside Bridge", location: "Kochi, KL", status: "Planning", statusColor: "blue", budget: "₹ 0.1 Cr" },
  { name: "Metro Station #14", location: "Chennai, TN", status: "On Schedule", statusColor: "green", budget: "₹ 12.0 Cr" },
];

const recentUpdates = [
  { title: "Payment Received", desc: "₹ 25 Lakhs from Sunrise Apts", time: "Today, 10:30 AM", color: "primary" },
  { title: "Milestone Reached", desc: "Foundation complete at Tech Park", time: "Yesterday, 04:15 PM", color: "green-500" },
  { title: "Material Alert", desc: "Cement stock low at Green Valley", time: "25-10-2023", color: "orange-400" },
  { title: "New Hire", desc: "Site Engineer joined Kochi team", time: "24-10-2023", color: "slate-400" },
];

export default function OwnerOverview() {
  return (
    <DesktopLayout
      title="Organization Overview"
      subtitle="Snapshot of Sri Krishna Constructions Pvt. Ltd."
      brandName="Sri Krishna Const."
      brandSubtitle="Owner Dashboard"
      navItems={navItems}
      userInfo={{ name: "Ramesh Krishnan", role: "Owner" }}
    >
      <div className="animate-fade-in space-y-6">
        {/* Company Profile Card */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-[#136dec] to-indigo-700 flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-white text-4xl">apartment</span>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">Sri Krishna Constructions Pvt. Ltd.</h2>
                <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full font-medium border border-green-200">
                  <span className="material-symbols-outlined text-sm">verified</span> Verified
                </span>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-slate-500 mt-2">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">calendar_month</span> Est: 12-05-2015
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">location_on</span> Bengaluru, KA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border border-slate-200 card-hover relative overflow-hidden group">
              <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-[#136dec]">{stat.icon}</span>
              </div>
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
              <p className="text-slate-900 text-3xl font-bold tracking-tight">{stat.value}</p>
              <p className={`text-xs font-medium mt-1 flex items-center gap-1 ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-slate-400'
              }`}>
                {stat.changeType === 'positive' && <span className="material-symbols-outlined text-sm">trending_up</span>}
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Projects Table */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-slate-900 text-lg font-bold">Active Projects Overview</h3>
              <Link href="/owner/projects" className="text-[#136dec] text-sm font-semibold hover:underline">View All</Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-slate-900 font-semibold">
                  <tr>
                    <th className="px-5 py-3">Project Name</th>
                    <th className="px-5 py-3">Location</th>
                    <th className="px-5 py-3">Status</th>
                    <th className="px-5 py-3 text-right">Budget Utilized</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {projects.map((project, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-medium text-slate-900">{project.name}</td>
                      <td className="px-5 py-4">{project.location}</td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-${project.statusColor}-100 text-${project.statusColor}-800`}>
                          <span className={`w-1.5 h-1.5 rounded-full bg-${project.statusColor}-600`}></span>
                          {project.status}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-right font-medium">{project.budget}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Updates */}
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-slate-900 text-lg font-bold">Recent Updates</h3>
              <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded">Last 7 Days</span>
            </div>
            <div className="relative pl-2">
              <div className="absolute left-2 top-2 bottom-4 w-0.5 bg-slate-200"></div>
              <div className="flex flex-col gap-6">
                {recentUpdates.map((update, i) => (
                  <div key={i} className="relative flex gap-3 pl-4">
                    <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-white bg-${update.color} z-10`}></div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-sm font-semibold text-slate-900">{update.title}</p>
                      <p className="text-xs text-slate-500">{update.desc}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">{update.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Flow Navigation */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <span className="text-sm text-slate-400">Owner Flow:</span>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="px-3 py-1 rounded-full bg-[#136dec] text-white text-sm font-medium">Overview</span>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/owner/projects" className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200 transition-colors">Projects</Link>
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
