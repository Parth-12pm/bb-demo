import MobileFrame from "../../components/MobileFrame";
import Link from "next/link";

const laborList = [
  { name: "Ramesh Kumar", id: "EMP-4022", trade: "Bar Bender", status: "pending", time: "08:15 AM" },
  { name: "Suresh Yadav", id: "EMP-4023", trade: "Mason", status: "pending", time: "08:22 AM" },
  { name: "Mohan Das", id: "EMP-4025", trade: "Carpenter", status: "pending", time: "08:30 AM" },
  { name: "Raju Sharma", id: "EMP-4028", trade: "Plumber", status: "approved", time: "08:05 AM" },
  { name: "Amit Singh", id: "EMP-4030", trade: "Electrician", status: "approved", time: "07:55 AM" },
  { name: "Vijay Kumar", id: "EMP-4032", trade: "Helper", status: "approved", time: "08:00 AM" },
];

export default function EngineerLaborList() {
  const pendingCount = laborList.filter(l => l.status === 'pending').length;
  const approvedCount = laborList.filter(l => l.status === 'approved').length;

  return (
    <MobileFrame showOfflineIndicator={true}>
      <div className="flex flex-col min-h-[750px]">
        {/* Header */}
        <header className="sticky top-0 z-20 bg-white border-b border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <Link href="/engineer/project" className="flex items-center justify-center p-2 -ml-2 rounded-full hover:bg-slate-100">
              <span className="material-symbols-outlined text-slate-900">arrow_back_ios_new</span>
            </Link>
            <div className="flex-1">
              <h1 className="text-lg font-bold text-slate-900">Labor Attendance</h1>
              <p className="text-xs text-slate-500">Oberoi Sky City - Wing B</p>
            </div>
          </div>
        </header>

        {/* Alert Banner */}
        <div className="bg-blue-50 border-b border-blue-100 px-4 py-3 flex items-center gap-2 animate-pulse-soft">
          <span className="material-symbols-outlined text-[#136dec]">notifications_active</span>
          <div className="flex-1">
            <p className="text-sm font-medium text-[#136dec]">{pendingCount} workers awaiting verification</p>
            <p className="text-xs text-blue-600">Tap on a worker to verify their entry</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 p-4">
          <div className="bg-white rounded-xl p-3 border border-slate-200 text-center">
            <p className="text-2xl font-bold text-slate-900">{laborList.length}</p>
            <p className="text-xs text-slate-500">Total Today</p>
          </div>
          <div className="bg-green-50 rounded-xl p-3 border border-green-200 text-center">
            <p className="text-2xl font-bold text-green-600">{approvedCount}</p>
            <p className="text-xs text-green-600">Verified</p>
          </div>
          <div className="bg-amber-50 rounded-xl p-3 border border-amber-200 text-center">
            <p className="text-2xl font-bold text-amber-600">{pendingCount}</p>
            <p className="text-xs text-amber-600">Pending</p>
          </div>
        </div>

        {/* Labor List */}
        <main className="flex-1 px-4 pb-24">
          {/* Pending Section */}
          {pendingCount > 0 && (
            <>
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                Pending Verification
              </h3>
              <div className="space-y-3 mb-6 stagger-children">
                {laborList.filter(l => l.status === 'pending').map((worker, i) => (
                  <Link 
                    href="/engineer/verify"
                    key={i} 
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-amber-200 shadow-sm touch-feedback"
                  >
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
                      {worker.name.split(' ').map(w => w[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-slate-900">{worker.name}</p>
                      <p className="text-xs text-slate-500">{worker.id} • {worker.trade}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500">{worker.time}</p>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700 mt-1">
                        <span className="w-1 h-1 rounded-full bg-amber-500 animate-pulse"></span>
                        Verify
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                  </Link>
                ))}
              </div>
            </>
          )}

          {/* Approved Section */}
          <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Verified Today
          </h3>
          <div className="space-y-3">
            {laborList.filter(l => l.status === 'approved').map((worker, i) => (
              <div 
                key={i} 
                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold relative">
                  {worker.name.split(' ').map(w => w[0]).join('')}
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-xs">check</span>
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-900">{worker.name}</p>
                  <p className="text-xs text-slate-500">{worker.id} • {worker.trade}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500">In: {worker.time}</p>
                  <span className="text-xs text-green-600 font-medium">Verified ✓</span>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Flow Indicator */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[375px] p-4 bg-white border-t border-slate-200">
          <div className="flex items-center justify-center gap-1">
            <span className="w-8 h-1.5 rounded-full bg-green-500"></span>
            <span className="w-8 h-1.5 rounded-full bg-green-500"></span>
            <span className="w-8 h-1.5 rounded-full bg-[#136dec]"></span>
            <span className="w-8 h-1.5 rounded-full bg-slate-200"></span>
            <span className="w-8 h-1.5 rounded-full bg-slate-200"></span>
            <span className="w-8 h-1.5 rounded-full bg-slate-200"></span>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}
