import MobileFrame from "../../components/MobileFrame";
import Link from "next/link";

export default function LaborCheckin() {
  return (
    <MobileFrame showOfflineIndicator={true}>
      <div className="flex flex-col min-h-[750px]">
        {/* Header */}
        <header className="sticky top-0 z-20 bg-white border-b border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-bold text-slate-900">Good Morning, Ramesh!</h1>
              <p className="text-xs text-slate-500">25-10-2023 • Site A</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
              RK
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 px-4 pt-6 pb-32">
          {/* Check-in Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            {/* Map Placeholder */}
            <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 relative flex items-center justify-center">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-4 border-dashed border-green-500 animate-pulse"></div>
              </div>
              <div className="z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg animate-pulse-soft">
                  <span className="material-symbols-outlined text-white text-3xl">location_on</span>
                </div>
                <p className="text-sm font-bold text-green-700 mt-2">Inside Geo-fence Zone</p>
              </div>
            </div>

            {/* Status */}
            <div className="p-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 border border-green-200 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm font-semibold">Location Verified</span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900">You're at the site!</h2>
              <p className="text-slate-500 mt-2">Your location has been detected within the geo-fence boundary.</p>

              {/* Details */}
              <div className="mt-6 grid grid-cols-2 gap-4 text-left">
                <div className="p-3 bg-slate-50 rounded-lg">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Site</p>
                  <p className="text-sm font-bold text-slate-900 mt-1">Oberoi Sky City</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Zone</p>
                  <p className="text-sm font-bold text-slate-900 mt-1">Block A</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Check-in Time</p>
                  <p className="text-sm font-bold text-slate-900 mt-1">08:15 AM</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Status</p>
                  <p className="text-sm font-bold text-amber-600 mt-1">Awaiting Approval</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Note */}
          <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-amber-600">info</span>
              <div>
                <p className="text-sm font-medium text-amber-800">Pending Verification</p>
                <p className="text-xs text-amber-700 mt-1">
                  Your Site Engineer will verify your entry. Once approved, your attendance will be recorded.
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Bottom Action */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[375px] bg-white border-t border-slate-200 p-4">
          <Link 
            href="/labor/summary"
            className="flex w-full items-center justify-center gap-2 rounded-xl h-14 bg-[#136dec] text-white font-bold shadow-lg shadow-blue-200 hover:bg-blue-600 active:scale-[0.98] transition-all"
          >
            <span className="material-symbols-outlined">schedule</span>
            View Work Hours
          </Link>

          {/* Flow Progress */}
          <div className="flex items-center justify-center gap-1 mt-4">
            <span className="w-10 h-1.5 rounded-full bg-green-500"></span>
            <span className="w-10 h-1.5 rounded-full bg-[#136dec]"></span>
            <span className="w-10 h-1.5 rounded-full bg-slate-200"></span>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}
