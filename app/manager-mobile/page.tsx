import MobileFrame from "../components/MobileFrame";
import Link from "next/link";

export default function ManagerMobileLogin() {
  return (
    <MobileFrame showOfflineIndicator={false}>
      <div className="flex flex-col min-h-[750px]">
        {/* Header */}
        <div className="bg-white border-b border-slate-200 p-4">
          <h1 className="text-lg font-bold text-slate-900">Manager Login</h1>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col">
          {/* Logo */}
          <div className="flex justify-center py-8">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-lg shadow-indigo-200">
              <span className="material-symbols-outlined text-white text-4xl">verified_user</span>
            </div>
          </div>

          {/* Welcome */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Manager Mobile</h2>
            <p className="text-slate-500 mt-2">Quick access to approvals on the go</p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
              <input 
                type="email" 
                defaultValue="vikram.s@buildtrack.in"
                className="w-full bg-white border border-slate-200 rounded-xl py-3.5 px-4 text-slate-900 focus:ring-2 focus:ring-[#136dec]/20 focus:border-[#136dec]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
              <input 
                type="password" 
                defaultValue="••••••••"
                className="w-full bg-white border border-slate-200 rounded-xl py-3.5 px-4 text-slate-900 focus:ring-2 focus:ring-[#136dec]/20 focus:border-[#136dec]"
              />
            </div>
          </div>

          {/* Login Button */}
          <div className="mt-8">
            <Link 
              href="/manager-mobile/projects"
              className="flex w-full items-center justify-center gap-2 rounded-xl h-14 bg-[#136dec] text-white font-bold text-lg shadow-lg shadow-blue-200 hover:bg-blue-600 active:scale-[0.98] transition-all"
            >
              <span className="material-symbols-outlined">login</span>
              Login
            </Link>
          </div>
        </div>

        {/* Flow Indicator */}
        <div className="p-4 bg-slate-50 border-t border-slate-200">
          <p className="text-xs text-slate-400 text-center mb-2">Manager Mobile Flow</p>
          <div className="flex items-center justify-center gap-1">
            <span className="w-10 h-1.5 rounded-full bg-[#136dec]"></span>
            <span className="w-10 h-1.5 rounded-full bg-slate-200"></span>
            <span className="w-10 h-1.5 rounded-full bg-slate-200"></span>
            <span className="w-10 h-1.5 rounded-full bg-slate-200"></span>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}
