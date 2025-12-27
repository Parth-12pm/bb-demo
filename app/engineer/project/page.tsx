import MobileFrame from "../../components/MobileFrame";
import Link from "next/link";

const projects = [
  { 
    name: "Oberoi Sky City - Wing B", 
    id: "PRJ-Mum-042",
    location: "Mumbai",
    status: "Action Required",
    statusColor: "red",
    budget: "₹ 4.5 Cr",
    pendingApprovals: 3,
    image: "🏗️"
  },
  { 
    name: "Green Valley Villa", 
    id: "PRJ-Pun-108",
    location: "Pune",
    status: "In Progress",
    statusColor: "green",
    completion: 45,
    budget: "₹ 1.2 Cr",
    image: "🏡"
  },
  { 
    name: "NH-48 Road Widening", 
    id: "PRJ-Hwy-009",
    location: "Highway",
    status: "Delayed",
    statusColor: "orange",
    budget: "₹ 85 L",
    image: "🛤️"
  },
];

export default function EngineerProjectSelect() {
  return (
    <MobileFrame showOfflineIndicator={true}>
      <div className="flex flex-col min-h-[750px]">
        {/* Header */}
        <header className="sticky top-0 z-20 bg-[#f6f7f8] border-b border-slate-200 px-4 pt-4 pb-2">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <Link href="/engineer" className="flex items-center justify-center p-2 -ml-2 rounded-full hover:bg-slate-100 transition-colors">
                <span className="material-symbols-outlined text-slate-800">menu</span>
              </Link>
              <h1 className="text-xl font-bold text-slate-900">Assigned Projects</h1>
            </div>
            <div className="flex items-center gap-2">
              <button className="relative p-2 rounded-full hover:bg-slate-100 transition-colors">
                <span className="material-symbols-outlined text-slate-800">notifications</span>
                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
              </button>
              <div className="h-8 w-8 rounded-full bg-[#136dec]/20 flex items-center justify-center text-[#136dec] font-bold text-sm">
                VS
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
              <span className="material-symbols-outlined">search</span>
            </span>
            <input 
              type="text" 
              placeholder="Search by Name or Project ID..."
              className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#136dec]/20 focus:border-[#136dec]"
            />
          </div>
        </header>

        {/* Filter Chips */}
        <div className="py-3 px-4 overflow-x-auto flex gap-2 no-scrollbar">
          <span className="shrink-0 px-4 py-2 rounded-full bg-[#136dec] text-white text-sm font-medium">All</span>
          <span className="shrink-0 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium flex items-center gap-1">
            Action Required <span className="ml-1 px-1.5 py-0.5 bg-red-100 text-red-600 rounded-full text-xs font-bold">3</span>
          </span>
          <span className="shrink-0 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium">In Progress</span>
          <span className="shrink-0 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium">Delayed</span>
        </div>

        {/* Project Cards */}
        <main className="flex-1 px-4 pb-24">
          <div className="flex items-center justify-between py-3">
            <h3 className="text-slate-900 text-base font-bold">Active Projects (3)</h3>
            <span className="text-xs text-slate-500">Sort by: Priority</span>
          </div>

          <div className="flex flex-col gap-4 stagger-children">
            {projects.map((project, i) => (
              <Link 
                href="/engineer/labor"
                key={i} 
                className={`relative rounded-xl bg-white p-4 shadow-sm border border-slate-100 ${project.statusColor === 'red' ? 'border-l-4 border-l-red-500' : ''} touch-feedback`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-${project.statusColor}-50 text-${project.statusColor}-700 ring-1 ring-inset ring-${project.statusColor}-600/10`}>
                      {project.status}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mt-1">{project.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">ID: {project.id} • {project.location}</p>
                  </div>
                  <div className="h-14 w-14 shrink-0 rounded-lg bg-slate-100 flex items-center justify-center text-2xl">
                    {project.image}
                  </div>
                </div>

                {project.completion && (
                  <div className="mt-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-500">Completion</span>
                      <span className="font-bold text-[#136dec]">{project.completion}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-100">
                      <div className="h-2 rounded-full bg-[#136dec]" style={{ width: `${project.completion}%` }}></div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-3 mt-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Budget</p>
                    <p className="text-sm font-semibold text-slate-700">{project.budget}</p>
                  </div>
                  {project.pendingApprovals && (
                    <div className="flex flex-col items-end">
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Pending</p>
                      <p className="text-sm font-semibold text-red-600 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">assignment_late</span>
                        {project.pendingApprovals} Labor Entries
                      </p>
                    </div>
                  )}
                </div>

                {project.pendingApprovals && (
                  <button className="mt-3 w-full py-2.5 rounded-lg bg-red-50 text-red-600 font-semibold text-sm hover:bg-red-100 transition-colors">
                    Verify Entries
                  </button>
                )}
              </Link>
            ))}
          </div>
        </main>

        {/* Bottom Nav */}
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[375px] bg-white border-t border-slate-200 py-2 z-50">
          <div className="flex items-center justify-around">
            <div className="flex flex-col items-center gap-1 text-[#136dec]">
              <span className="material-symbols-outlined text-2xl">domain</span>
              <span className="text-[10px] font-medium">Projects</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-slate-400">
              <span className="material-symbols-outlined text-2xl">groups</span>
              <span className="text-[10px] font-medium">Labor</span>
            </div>
            <Link href="/engineer/dpr" className="relative -top-4">
              <div className="h-12 w-12 rounded-full bg-[#136dec] text-white flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-2xl">add</span>
              </div>
            </Link>
            <Link href="/engineer/verify" className="flex flex-col items-center gap-1 text-slate-400 relative">
              <span className="material-symbols-outlined text-2xl">approval</span>
              <span className="absolute -top-1 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              <span className="text-[10px] font-medium">Verify</span>
            </Link>
            <Link href="/engineer/sync" className="flex flex-col items-center gap-1 text-slate-400">
              <span className="material-symbols-outlined text-2xl">sync</span>
              <span className="text-[10px] font-medium">Sync</span>
            </Link>
          </div>
        </nav>
      </div>
    </MobileFrame>
  );
}
