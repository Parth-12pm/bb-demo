import MobileFrame from "../../components/MobileFrame";
import Link from "next/link";

const projects = [
  { name: "Oberoi Sky City", status: "Critical", statusColor: "red", pending: 5 },
  { name: "Green Valley Villa", status: "On Track", statusColor: "green", pending: 2 },
  { name: "Tech Park Phase 2", status: "On Track", statusColor: "green", pending: 0 },
];

export default function ManagerMobileProjects() {
  return (
    <MobileFrame showOfflineIndicator={false}>
      <div className="flex flex-col min-h-[750px]">
        {/* Header */}
        <header className="sticky top-0 z-20 bg-white border-b border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold text-slate-900">My Projects</h1>
            <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm">
              VS
            </div>
          </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 p-4">
          <div className="bg-red-50 rounded-xl p-4 border border-red-200">
            <p className="text-2xl font-bold text-red-600">7</p>
            <p className="text-xs text-red-600">Pending Approvals</p>
          </div>
          <div className="bg-green-50 rounded-xl p-4 border border-green-200">
            <p className="text-2xl font-bold text-green-600">12</p>
            <p className="text-xs text-green-600">Approved Today</p>
          </div>
        </div>

        {/* Projects */}
        <main className="flex-1 px-4 pb-24">
          <h3 className="text-sm font-bold text-slate-900 mb-3">Active Projects</h3>
          <div className="space-y-3 stagger-children">
            {projects.map((project, i) => (
              <Link
                href="/manager-mobile/pending"
                key={i}
                className={`block p-4 rounded-xl bg-white border ${project.statusColor === 'red' ? 'border-l-4 border-l-red-500' : 'border-slate-200'} touch-feedback`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900">{project.name}</h4>
                    <span className={`inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full text-xs font-medium bg-${project.statusColor}-50 text-${project.statusColor}-700`}>
                      <span className={`w-1.5 h-1.5 rounded-full bg-${project.statusColor}-500`}></span>
                      {project.status}
                    </span>
                  </div>
                  {project.pending > 0 && (
                    <div className="flex items-center gap-2">
                      <div className="text-center">
                        <p className="text-lg font-bold text-red-600">{project.pending}</p>
                        <p className="text-[10px] text-slate-500">Pending</p>
                      </div>
                      <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </main>

        {/* Bottom Nav */}
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[375px] bg-white border-t border-slate-200 py-3 z-50">
          <div className="flex items-center justify-around">
            <div className="flex flex-col items-center gap-1 text-[#136dec]">
              <span className="material-symbols-outlined">folder_open</span>
              <span className="text-[10px] font-medium">Projects</span>
            </div>
            <Link href="/manager-mobile/pending" className="flex flex-col items-center gap-1 text-slate-400 relative">
              <span className="material-symbols-outlined">pending_actions</span>
              <span className="absolute -top-1 right-2 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">7</span>
              <span className="text-[10px] font-medium">Pending</span>
            </Link>
            <Link href="/manager-mobile/alerts" className="flex flex-col items-center gap-1 text-slate-400">
              <span className="material-symbols-outlined">notifications</span>
              <span className="text-[10px] font-medium">Alerts</span>
            </Link>
          </div>
        </nav>
      </div>
    </MobileFrame>
  );
}
