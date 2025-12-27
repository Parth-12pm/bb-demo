import MobileFrame from "../../components/MobileFrame";
import Link from "next/link";

export default function EngineerVerify() {
  return (
    <MobileFrame showOfflineIndicator={true}>
      <div className="flex flex-col min-h-[750px]">
        {/* Header */}
        <header className="sticky top-0 z-20 bg-[#f6f7f8] border-b border-slate-200">
          <div className="flex items-center justify-between px-4 py-3">
            <Link href="/engineer/labor" className="flex items-center justify-center p-2 -ml-2 rounded-full hover:bg-slate-200">
              <span className="material-symbols-outlined text-slate-900">arrow_back_ios_new</span>
            </Link>
            <h1 className="text-lg font-bold text-slate-900">Entry Verification</h1>
            <div className="w-10"></div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 px-4 pt-4 pb-32">
          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            {/* Alert Header */}
            <div className="bg-blue-50 px-4 py-3 border-b border-blue-100 flex items-center gap-2 justify-center">
              <span className="material-symbols-outlined text-[#136dec]">notifications_active</span>
              <p className="text-[#136dec] text-sm font-semibold">Geo-fence Entry Detected</p>
            </div>

            {/* Profile */}
            <div className="flex flex-col items-center p-6 gap-4">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-4xl font-bold text-orange-700 border-4 border-white shadow-lg">
                  RK
                </div>
                <div className="absolute bottom-0 right-0 bg-green-500 border-2 border-white rounded-full p-1">
                  <span className="material-symbols-outlined text-white text-sm">check</span>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-bold text-slate-900">Ramesh Kumar</h2>
                <p className="text-slate-500 text-sm">Bar Bender • Site A</p>
              </div>

              {/* Status Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 text-green-700 border border-green-200">
                <span className="material-symbols-outlined text-base">location_on</span>
                <span className="text-xs font-semibold uppercase tracking-wide">Detected On-Site</span>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 border-t border-slate-100">
              <div className="flex flex-col gap-1 p-4 border-r border-b border-slate-100">
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Worker ID</p>
                <p className="text-slate-900 text-base font-medium">EMP-4022</p>
              </div>
              <div className="flex flex-col gap-1 p-4 border-b border-slate-100">
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Trade</p>
                <p className="text-slate-900 text-base font-medium">Bar Bender</p>
              </div>
              <div className="flex flex-col gap-1 p-4 border-r border-slate-100">
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Time</p>
                <p className="text-slate-900 text-base font-medium">08:15 AM</p>
              </div>
              <div className="flex flex-col gap-1 p-4">
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Date</p>
                <p className="text-slate-900 text-base font-medium">25-10-2023</p>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 mt-4 flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
              <span className="material-symbols-outlined">map</span>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900">Zone 4 Entrance</p>
              <p className="text-xs text-slate-500">Main Gate Geo-fence Boundary</p>
            </div>
          </div>

          {/* Important Note */}
          <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-amber-600">info</span>
              <div>
                <p className="text-sm font-medium text-amber-800">Attendance Approval</p>
                <p className="text-xs text-amber-700 mt-1">
                  Only Site Engineer can verify attendance. This worker's attendance will be marked once you approve.
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Bottom Actions */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[375px] bg-white border-t border-slate-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col gap-3">
            <Link 
              href="/engineer/dpr"
              className="flex w-full items-center justify-center gap-2 rounded-xl h-14 bg-[#136dec] text-white font-bold shadow-lg shadow-blue-200 hover:bg-blue-600 active:scale-[0.98] transition-all"
            >
              <span className="material-symbols-outlined">verified_user</span>
              APPROVE ENTRY
            </Link>
            <button className="flex w-full items-center justify-center rounded-lg h-10 text-slate-500 hover:bg-slate-50 hover:text-red-600 transition-colors text-sm font-medium">
              Deny Entry / Report Issue
            </button>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}
