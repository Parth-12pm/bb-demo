import DesktopLayout from "../../components/DesktopLayout";
import Link from "next/link";

const navItems = [
  { label: "Overview", href: "/owner", icon: "dashboard" },
  { label: "Projects", href: "/owner/projects", icon: "business_center" },
  { label: "Budget", href: "/owner/budget", icon: "currency_rupee" },
  { label: "Timeline", href: "/owner/timeline", icon: "schedule" },
  { label: "Reports", href: "/owner/reports", icon: "bar_chart" },
];

const reportTypes = [
  { name: "Project Progress Report", desc: "Weekly summary of all project activities", icon: "trending_up", format: "PDF" },
  { name: "Financial Summary", desc: "Budget utilization and expense breakdown", icon: "currency_rupee", format: "Excel" },
  { name: "Workforce Report", desc: "Attendance, productivity, and labor costs", icon: "groups", format: "PDF" },
  { name: "Material Consumption", desc: "Inventory usage and procurement status", icon: "inventory_2", format: "Excel" },
];

const recentReports = [
  { name: "October Weekly Report", project: "All Projects", date: "25-10-2023", size: "2.4 MB" },
  { name: "Q3 Financial Summary", project: "All Projects", date: "01-10-2023", size: "1.8 MB" },
  { name: "Sunrise Apartments DPR", project: "Sunrise Apartments", date: "24-10-2023", size: "856 KB" },
  { name: "Green Valley Delay Report", project: "Green Valley Villa", date: "20-10-2023", size: "1.2 MB" },
];

export default function OwnerReports() {
  return (
    <DesktopLayout
      title="Reports & Export"
      subtitle="Generate and download project reports"
      brandName="Sri Krishna Const."
      brandSubtitle="Owner Dashboard"
      navItems={navItems}
      userInfo={{ name: "Ramesh Krishnan", role: "Owner" }}
    >
      <div className="animate-fade-in space-y-6">
        {/* Generate Report Section */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Generate New Report</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
            {reportTypes.map((report, i) => (
              <div key={i} className="p-4 rounded-xl border border-slate-200 hover:border-[#136dec] hover:shadow-md transition-all cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#136dec]/10 text-[#136dec] flex items-center justify-center group-hover:bg-[#136dec] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">{report.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900">{report.name}</h4>
                    <p className="text-sm text-slate-500 mt-1">{report.desc}</p>
                    <span className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-slate-400">
                      <span className="material-symbols-outlined text-sm">description</span>
                      {report.format}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Export */}
        <div className="bg-gradient-to-r from-[#136dec] to-indigo-600 rounded-xl p-6 text-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold">Quick Export</h3>
              <p className="text-blue-100 text-sm mt-1">Generate a comprehensive report for all active projects</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2.5 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-colors">
                <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
                Export PDF
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-white text-[#136dec] rounded-lg font-bold hover:bg-blue-50 transition-colors">
                <span className="material-symbols-outlined text-lg">table_view</span>
                Export Excel
              </button>
            </div>
          </div>
        </div>

        {/* Bill & Cost Records Section */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                <span className="material-symbols-outlined">receipt_long</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Bill & Cost Records</h3>
                <p className="text-sm text-slate-500">All vendor and labour records centrally stored</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-sm font-medium border border-green-200">
              <span className="material-symbols-outlined text-sm">verified</span>
              Data Verified
            </span>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-50 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-slate-900">248</p>
                <p className="text-sm text-slate-500">Bills Tracked</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-green-600">₹ 2.4 Cr</p>
                <p className="text-sm text-slate-500">Total Recorded Cost</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <span className="material-symbols-outlined text-blue-600 mt-0.5">info</span>
              <div>
                <p className="text-sm font-medium text-blue-800">Execution-Based Cost Mapping</p>
                <p className="text-xs text-blue-600 leading-relaxed">Daily DPR and attendance data mapped to planned BOQ quantities for budget tracking</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">Recent Reports</h3>
            <span className="text-sm text-slate-400">Last 30 days</span>
          </div>
          <div className="divide-y divide-slate-100">
            {recentReports.map((report, i) => (
              <div key={i} className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                    <span className="material-symbols-outlined">picture_as_pdf</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{report.name}</p>
                    <p className="text-sm text-slate-500">{report.project} • {report.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-slate-400">{report.size}</span>
                  <button className="p-2 text-slate-400 hover:text-[#136dec] hover:bg-blue-50 rounded-lg transition-colors">
                    <span className="material-symbols-outlined">download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flow Complete! */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <span className="text-sm text-slate-400">Owner Flow Complete!</span>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <Link href="/owner" className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">✓ Overview</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/owner/projects" className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">✓ Projects</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/owner/budget" className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">✓ Budget</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/owner/timeline" className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">✓ Timeline</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <span className="px-3 py-1 rounded-full bg-[#136dec] text-white text-sm font-medium">✓ Reports</span>
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
