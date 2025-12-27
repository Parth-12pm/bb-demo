import MobileFrame from "../../components/MobileFrame";
import Link from "next/link";

const pendingItems = [
  { type: "DPR", title: "Daily Report - Block A", project: "Oberoi Sky City", engineer: "Priya Sharma", time: "2h ago", hasPhotos: true },
  { type: "Material", title: "Cement 53 Grade (100 bags)", project: "Green Valley", engineer: "Amit Kumar", time: "3h ago", cost: "₹ 45,000" },
  { type: "DPR", title: "Foundation Complete", project: "Oberoi Sky City", engineer: "Raju Singh", time: "5h ago", hasPhotos: true },
];

export default function ManagerMobilePending() {
  return (
    <MobileFrame showOfflineIndicator={false}>
      <div className="flex flex-col min-h-[750px]">
        {/* Header */}
        <header className="sticky top-0 z-20 bg-white border-b border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <Link href="/manager-mobile/projects" className="p-2 -ml-2 rounded-full hover:bg-slate-100">
              <span className="material-symbols-outlined text-slate-900">arrow_back_ios_new</span>
            </Link>
            <h1 className="text-lg font-bold text-slate-900">Pending Approvals</h1>
          </div>
        </header>

        {/* Items */}
        <main className="flex-1 px-4 pt-4 pb-32">
          <div className="space-y-3 stagger-children">
            {pendingItems.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium mb-1 ${
                      item.type === 'DPR' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                    }`}>
                      {item.type}
                    </span>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-500">{item.project} • {item.engineer}</p>
                  </div>
                  <span className="text-xs text-slate-400">{item.time}</span>
                </div>

                {item.hasPhotos && (
                  <div className="flex items-center gap-1 text-xs text-green-600 mb-3">
                    <span className="material-symbols-outlined text-sm">verified</span>
                    Photos attached
                  </div>
                )}

                {item.cost && (
                  <p className="text-sm font-bold text-slate-900 mb-3">Cost: {item.cost}</p>
                )}

                <div className="flex gap-2">
                  <button className="flex-1 py-2 rounded-lg bg-red-50 text-red-600 font-medium text-sm">
                    Reject
                  </button>
                  <button className="flex-1 py-2 rounded-lg bg-[#136dec] text-white font-medium text-sm">
                    Approve
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Bottom Nav */}
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[375px] bg-white border-t border-slate-200 py-3 z-50">
          <div className="flex items-center justify-around">
            <Link href="/manager-mobile/projects" className="flex flex-col items-center gap-1 text-slate-400">
              <span className="material-symbols-outlined">folder_open</span>
              <span className="text-[10px] font-medium">Projects</span>
            </Link>
            <div className="flex flex-col items-center gap-1 text-[#136dec] relative">
              <span className="material-symbols-outlined">pending_actions</span>
              <span className="absolute -top-1 right-2 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">7</span>
              <span className="text-[10px] font-medium">Pending</span>
            </div>
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
