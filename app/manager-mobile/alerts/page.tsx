import MobileFrame from "../../components/MobileFrame";
import Link from "next/link";

const alerts = [
  { type: "urgent", title: "Budget Exceeded 90%", desc: "Green Valley Villa material budget", time: "30m ago", icon: "warning" },
  { type: "info", title: "DPR Submitted", desc: "Priya Sharma - Oberoi Sky City", time: "1h ago", icon: "description" },
  { type: "success", title: "Material Delivered", desc: "Steel TMT - Tech Park Phase 2", time: "2h ago", icon: "local_shipping" },
  { type: "urgent", title: "Worker Absent Alert", desc: "5 workers marked absent today", time: "3h ago", icon: "group_off" },
];

const typeColors = {
  urgent: { bg: "bg-red-50", border: "border-red-200", icon: "text-red-600" },
  info: { bg: "bg-blue-50", border: "border-blue-200", icon: "text-blue-600" },
  success: { bg: "bg-green-50", border: "border-green-200", icon: "text-green-600" },
};

export default function ManagerMobileAlerts() {
  return (
    <MobileFrame showOfflineIndicator={false}>
      <div className="flex flex-col min-h-[750px]">
        {/* Header */}
        <header className="sticky top-0 z-20 bg-white border-b border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold text-slate-900">Alerts & Notifications</h1>
            <button className="text-sm text-[#136dec] font-medium">Mark all read</button>
          </div>
        </header>

        {/* Alerts */}
        <main className="flex-1 px-4 pt-4 pb-32">
          <div className="space-y-3 stagger-children">
            {alerts.map((alert, i) => {
              const colors = typeColors[alert.type as keyof typeof typeColors];
              return (
                <div key={i} className={`p-4 rounded-xl ${colors.bg} border ${colors.border}`}>
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-white flex items-center justify-center ${colors.icon}`}>
                      <span className="material-symbols-outlined">{alert.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900">{alert.title}</h4>
                      <p className="text-sm text-slate-600 mt-0.5">{alert.desc}</p>
                      <p className="text-xs text-slate-400 mt-1">{alert.time}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>

        {/* Flow Complete */}
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-[375px] p-4">
          <div className="bg-green-50 rounded-xl border border-green-200 p-4 text-center">
            <p className="text-sm font-bold text-green-700">✓ Manager Mobile Flow Complete!</p>
            <p className="text-xs text-green-600 mt-1">Login → Projects → Pending → Alerts</p>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-white rounded-lg text-slate-700 font-medium text-sm border border-green-200"
            >
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Back to Roles
            </Link>
          </div>
        </div>

        {/* Bottom Nav */}
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[375px] bg-white border-t border-slate-200 py-3 z-50">
          <div className="flex items-center justify-around">
            <Link href="/manager-mobile/projects" className="flex flex-col items-center gap-1 text-slate-400">
              <span className="material-symbols-outlined">folder_open</span>
              <span className="text-[10px] font-medium">Projects</span>
            </Link>
            <Link href="/manager-mobile/pending" className="flex flex-col items-center gap-1 text-slate-400 relative">
              <span className="material-symbols-outlined">pending_actions</span>
              <span className="absolute -top-1 right-2 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">7</span>
              <span className="text-[10px] font-medium">Pending</span>
            </Link>
            <div className="flex flex-col items-center gap-1 text-[#136dec]">
              <span className="material-symbols-outlined">notifications</span>
              <span className="text-[10px] font-medium">Alerts</span>
            </div>
          </div>
        </nav>
      </div>
    </MobileFrame>
  );
}
