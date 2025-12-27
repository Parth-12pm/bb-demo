import DesktopLayout from "../../components/DesktopLayout";
import Link from "next/link";

const navItems = [
  { label: "Projects", href: "/manager-web", icon: "folder_open" },
  { label: "DPR Review", href: "/manager-web/dpr-review", icon: "description" },
  { label: "Approvals", href: "/manager-web/approvals", icon: "task_alt" },
  { label: "Attendance", href: "/manager-web/attendance", icon: "groups" },
  { label: "Budget", href: "/manager-web/budget", icon: "currency_rupee" },
];

const dprs = [
  { 
    id: "DPR-2023-1025-01", 
    project: "Oberoi Sky City", 
    engineer: "Priya Sharma",
    date: "25-10-2023",
    status: "pending",
    hasPhotos: true,
    workDone: "Foundation work complete for Block A Section 3",
    materials: "Cement: 50 bags, Steel: 200kg"
  },
  { 
    id: "DPR-2023-1024-02", 
    project: "Green Valley Villa", 
    engineer: "Amit Kumar",
    date: "24-10-2023",
    status: "pending",
    hasPhotos: true,
    workDone: "Brickwork completed for ground floor",
    materials: "Bricks: 2000, Cement: 30 bags"
  },
  { 
    id: "DPR-2023-1024-01", 
    project: "Tech Park Phase 2", 
    engineer: "Raju Singh",
    date: "24-10-2023",
    status: "approved",
    hasPhotos: true,
    workDone: "Electrical conduit installation",
    materials: "PVC Pipes: 150m, Wires: 500m"
  },
];

export default function ManagerDPRReview() {
  return (
    <DesktopLayout
      title="DPR Review"
      subtitle="Review and approve Daily Progress Reports with photo verification"
      brandName="BuildTrack India"
      brandSubtitle="Manager Console"
      navItems={navItems}
      userInfo={{ name: "Vikram Singh", role: "Project Manager" }}
    >
      <div className="animate-fade-in space-y-6">
        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center gap-3">
          <span className="material-symbols-outlined text-[#136dec]">info</span>
          <p className="text-sm text-blue-800">
            <strong>Photo Verification Required:</strong> All DPRs must have at least 2 photos attached. DPRs without photos cannot be submitted.
          </p>
        </div>

        {/* DPR Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 stagger-children">
          {dprs.filter(d => d.status === 'pending').map((dpr, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden card-hover">
              {/* Header */}
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900">{dpr.id}</h4>
                  <p className="text-sm text-slate-500">{dpr.project} • {dpr.date}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-medium border border-amber-200">
                  Pending Review
                </span>
              </div>

              {/* Photo Gallery */}
              <div className="p-4 bg-slate-50 border-b border-slate-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-green-600 text-base">verified</span>
                  <span className="text-sm font-medium text-green-700">Photos Attached (3)</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center text-2xl">🏗️</div>
                  <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center text-2xl">🧱</div>
                  <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center text-2xl">📸</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Submitted By</p>
                  <p className="text-sm font-medium text-slate-900">{dpr.engineer}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Work Done</p>
                  <p className="text-sm text-slate-700">{dpr.workDone}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Materials Used</p>
                  <p className="text-sm text-slate-700">{dpr.materials}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="p-4 border-t border-slate-100 flex gap-3">
                <button className="flex-1 py-2.5 rounded-lg bg-red-50 text-red-600 font-medium text-sm hover:bg-red-100 transition-colors">
                  Reject
                </button>
                <Link 
                  href="/manager-web/approvals"
                  className="flex-1 py-2.5 rounded-lg bg-[#136dec] text-white font-medium text-sm text-center hover:bg-blue-600 transition-colors"
                >
                  Approve
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Approved Section */}
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <h3 className="font-bold text-slate-900 mb-3">Recently Approved</h3>
          {dprs.filter(d => d.status === 'approved').map((dpr, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-600 text-base">check</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">{dpr.id}</p>
                  <p className="text-xs text-slate-500">{dpr.project}</p>
                </div>
              </div>
              <span className="text-xs text-slate-400">{dpr.date}</span>
            </div>
          ))}
        </div>

        {/* Flow Navigation */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <span className="text-sm text-slate-400">Manager Web Flow:</span>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <Link href="/manager-web" className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">✓ Projects</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <span className="px-3 py-1 rounded-full bg-[#136dec] text-white text-sm font-medium">DPR Review</span>
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
