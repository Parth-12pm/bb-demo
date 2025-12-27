import MobileFrame from "../../components/MobileFrame";
import Link from "next/link";

export default function LaborSummary() {
  return (
    <MobileFrame showOfflineIndicator={true}>
      <div className="flex flex-col min-h-[750px]">
        {/* Header */}
        <header className="sticky top-0 z-20 bg-white border-b border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <Link href="/labor/checkin" className="flex items-center justify-center p-2 -ml-2 rounded-full hover:bg-slate-100">
              <span className="material-symbols-outlined text-slate-900">arrow_back_ios_new</span>
            </Link>
            <div className="flex-1">
              <h1 className="text-lg font-bold text-slate-900">Work Summary</h1>
              <p className="text-xs text-slate-500">25-10-2023</p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 px-4 pt-4 pb-32">
          {/* Today's Summary Card */}
          <div className="bg-gradient-to-br from-[#136dec] to-indigo-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium opacity-80">Today's Work Hours</h3>
              <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-medium">In Progress</span>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-5xl font-bold">7</span>
              <span className="text-2xl font-medium opacity-80 pb-1">h</span>
              <span className="text-5xl font-bold">45</span>
              <span className="text-2xl font-medium opacity-80 pb-1">m</span>
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">login</span>
                <span>In: 08:15 AM</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">pending</span>
                <span>Active Now</span>
              </div>
            </div>
          </div>

          {/* Break Summary */}
          <div className="mt-4 bg-white rounded-xl border border-slate-200 p-4">
            <h3 className="text-sm font-bold text-slate-900 mb-3">Break Time</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                  <span className="material-symbols-outlined">restaurant</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Lunch Break</p>
                  <p className="text-xs text-slate-500">12:30 PM - 01:15 PM</p>
                </div>
              </div>
              <span className="text-lg font-bold text-slate-900">45m</span>
            </div>
          </div>

          {/* Weekly Summary */}
          <div className="mt-4 bg-white rounded-xl border border-slate-200 p-4">
            <h3 className="text-sm font-bold text-slate-900 mb-3">This Week</h3>
            <div className="grid grid-cols-7 gap-2 text-center">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => {
                const hours = [8, 8.5, 7.5, 8, 7.75, 0, 0];
                const isToday = i === 4;
                const hasData = hours[i] > 0;
                return (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <span className={`text-xs font-medium ${isToday ? 'text-[#136dec]' : 'text-slate-500'}`}>{day}</span>
                    <div className={`w-full py-2 rounded-lg text-xs font-bold ${
                      isToday ? 'bg-[#136dec] text-white' : 
                      hasData ? 'bg-green-50 text-green-700' : 
                      'bg-slate-50 text-slate-400'
                    }`}>
                      {hasData ? `${hours[i]}h` : '-'}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-sm text-slate-500">Total This Week</span>
              <span className="text-lg font-bold text-slate-900">39.75 hours</span>
            </div>
          </div>

          {/* Sync Status */}
          <div className="mt-4 p-4 bg-green-50 rounded-xl border border-green-200 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
              <span className="material-symbols-outlined text-white">cloud_done</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-green-800">All Data Synced</p>
              <p className="text-xs text-green-600">Last sync: 2 minutes ago</p>
            </div>
          </div>
        </main>

        {/* Bottom */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[375px] bg-white border-t border-slate-200 p-4">
          <div className="text-center mb-3">
            <p className="text-sm font-bold text-green-600">✓ Labor Flow Complete!</p>
            <p className="text-xs text-slate-500">OTP Login → Check-in → Summary</p>
          </div>
          <div className="flex items-center justify-center gap-1 mb-4">
            <span className="w-10 h-1.5 rounded-full bg-green-500"></span>
            <span className="w-10 h-1.5 rounded-full bg-green-500"></span>
            <span className="w-10 h-1.5 rounded-full bg-[#136dec]"></span>
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
