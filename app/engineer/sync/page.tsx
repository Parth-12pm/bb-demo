import MobileFrame from "../../components/MobileFrame";
import Link from "next/link";

const syncItems = [
  { type: "DPR", name: "Daily Report - 25 Oct", status: "synced", time: "2 min ago", size: "1.2 MB" },
  { type: "Attendance", name: "3 Labor Entries", status: "synced", time: "5 min ago", size: "12 KB" },
  { type: "DPR", name: "Daily Report - 24 Oct", status: "synced", time: "Yesterday", size: "2.1 MB" },
  { type: "Photo", name: "Site Photos (5)", status: "pending", time: "Waiting...", size: "8.4 MB" },
  { type: "Material", name: "Material Request", status: "failed", time: "Retry needed", size: "24 KB" },
];

const statusConfig = {
  synced: { icon: "check_circle", color: "text-green-600", bg: "bg-green-50", label: "Synced" },
  pending: { icon: "pending", color: "text-amber-600", bg: "bg-amber-50", label: "Pending" },
  failed: { icon: "error", color: "text-red-600", bg: "bg-red-50", label: "Failed" },
};

export default function EngineerSync() {
  const syncedCount = syncItems.filter(i => i.status === 'synced').length;
  const pendingCount = syncItems.filter(i => i.status === 'pending').length;
  const failedCount = syncItems.filter(i => i.status === 'failed').length;

  return (
    <MobileFrame showOfflineIndicator={false}>
      <div className="flex flex-col min-h-[750px]">
        {/* Header */}
        <header className="sticky top-0 z-20 bg-white border-b border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <Link href="/engineer/dpr" className="flex items-center justify-center p-2 -ml-2 rounded-full hover:bg-slate-100">
              <span className="material-symbols-outlined text-slate-900">arrow_back_ios_new</span>
            </Link>
            <div className="flex-1">
              <h1 className="text-lg font-bold text-slate-900">Sync Status</h1>
              <p className="text-xs text-slate-500">Last synced: 2 minutes ago</p>
            </div>
            <button className="p-2 rounded-full hover:bg-slate-100 text-[#136dec]">
              <span className="material-symbols-outlined">refresh</span>
            </button>
          </div>
        </header>

        {/* Connection Status */}
        <div className="bg-green-50 border-b border-green-100 px-4 py-3 flex items-center gap-2">
          <span className="material-symbols-outlined text-green-600">wifi</span>
          <div className="flex-1">
            <p className="text-sm font-medium text-green-700">Connected</p>
            <p className="text-xs text-green-600">All data will sync automatically</p>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs text-green-600">Live</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 p-4">
          <div className="bg-green-50 rounded-xl p-3 border border-green-200 text-center">
            <p className="text-2xl font-bold text-green-600">{syncedCount}</p>
            <p className="text-xs text-green-600">Synced</p>
          </div>
          <div className="bg-amber-50 rounded-xl p-3 border border-amber-200 text-center">
            <p className="text-2xl font-bold text-amber-600">{pendingCount}</p>
            <p className="text-xs text-amber-600">Pending</p>
          </div>
          <div className="bg-red-50 rounded-xl p-3 border border-red-200 text-center">
            <p className="text-2xl font-bold text-red-600">{failedCount}</p>
            <p className="text-xs text-red-600">Failed</p>
          </div>
        </div>

        {/* Sync Queue */}
        <main className="flex-1 px-4 pb-32">
          <h3 className="text-sm font-bold text-slate-900 mb-3">Sync Queue</h3>
          <div className="space-y-3 stagger-children">
            {syncItems.map((item, i) => {
              const config = statusConfig[item.status as keyof typeof statusConfig];
              return (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-xl bg-white border ${item.status === 'failed' ? 'border-red-200' : 'border-slate-200'}`}>
                  <div className={`w-10 h-10 rounded-lg ${config.bg} ${config.color} flex items-center justify-center`}>
                    <span className="material-symbols-outlined">{config.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-900">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.type} • {item.size}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-xs font-medium ${config.color}`}>{config.label}</p>
                    <p className="text-xs text-slate-400">{item.time}</p>
                  </div>
                  {item.status === 'failed' && (
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                      <span className="material-symbols-outlined text-lg">refresh</span>
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Offline Mode Info */}
          <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#136dec]">info</span>
              <div>
                <p className="text-sm font-medium text-[#136dec]">Offline Support</p>
                <p className="text-xs text-blue-700 mt-1">
                  All your work is saved locally. When you go offline, data will queue up and sync automatically when connection is restored.
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Flow Complete */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[375px] bg-white border-t border-slate-200 p-4">
          <div className="text-center mb-3">
            <p className="text-sm font-bold text-green-600">✓ Site Engineer Flow Complete!</p>
            <p className="text-xs text-slate-500">Login → Project → Labor → Verify → DPR → Sync</p>
          </div>
          <div className="flex items-center justify-center gap-1 mb-4">
            <span className="w-8 h-1.5 rounded-full bg-green-500"></span>
            <span className="w-8 h-1.5 rounded-full bg-green-500"></span>
            <span className="w-8 h-1.5 rounded-full bg-green-500"></span>
            <span className="w-8 h-1.5 rounded-full bg-green-500"></span>
            <span className="w-8 h-1.5 rounded-full bg-green-500"></span>
            <span className="w-8 h-1.5 rounded-full bg-[#136dec]"></span>
          </div>
          <Link 
            href="/"
            className="flex w-full items-center justify-center gap-2 rounded-xl h-12 bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 transition-all"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Role Selection
          </Link>
        </div>
      </div>
    </MobileFrame>
  );
}
