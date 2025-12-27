import MobileFrame from "../components/MobileFrame";
import Link from "next/link";

export default function EngineerLogin() {
  return (
    <MobileFrame showOfflineIndicator={false}>
      <div className="flex flex-col min-h-[750px]">
        {/* Header */}
        <div className="bg-white border-b border-slate-200 p-4 flex items-center justify-between">
          <h1 className="text-lg font-bold text-slate-900">Site Engineer Login</h1>
          <div className="w-10 h-10 rounded-full bg-[#136dec]/10 flex items-center justify-center text-[#136dec]">
            <span className="material-symbols-outlined">help</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col">
          {/* Logo */}
          <div className="flex justify-center py-8">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#136dec] to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-200">
              <span className="material-symbols-outlined text-white text-4xl">engineering</span>
            </div>
          </div>

          {/* Welcome Text */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Welcome Back</h2>
            <p className="text-slate-500 mt-2">Login to access your assigned projects</p>
          </div>

          {/* Login Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Employee ID</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <span className="material-symbols-outlined text-xl">badge</span>
                </span>
                <input 
                  type="text" 
                  defaultValue="ENG-2045"
                  className="w-full bg-white border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 text-slate-900 focus:ring-2 focus:ring-[#136dec]/20 focus:border-[#136dec] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <span className="material-symbols-outlined text-xl">lock</span>
                </span>
                <input 
                  type="password" 
                  defaultValue="••••••••"
                  className="w-full bg-white border border-slate-200 rounded-xl py-3.5 pl-11 pr-11 text-slate-900 focus:ring-2 focus:ring-[#136dec]/20 focus:border-[#136dec] transition-all"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 cursor-pointer">
                  <span className="material-symbols-outlined text-xl">visibility_off</span>
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-slate-300 text-[#136dec] focus:ring-[#136dec]" defaultChecked />
                <span className="text-slate-600">Remember me</span>
              </label>
              <span className="text-[#136dec] font-medium cursor-pointer">Forgot Password?</span>
            </div>
          </div>

          {/* Login Button */}
          <div className="mt-8">
            <Link 
              href="/engineer/project"
              className="flex w-full items-center justify-center gap-2 rounded-xl h-14 bg-[#136dec] text-white font-bold text-lg shadow-lg shadow-blue-200 hover:bg-blue-600 active:scale-[0.98] transition-all"
            >
              <span className="material-symbols-outlined">login</span>
              Login
            </Link>
          </div>

          {/* Site Selection Info */}
          <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-amber-600">info</span>
              <div>
                <p className="text-sm font-medium text-amber-800">Site Assignment</p>
                <p className="text-xs text-amber-700 mt-1">You will be shown projects assigned to your account after login.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Flow Indicator */}
        <div className="p-4 bg-slate-50 border-t border-slate-200">
          <p className="text-xs text-slate-400 text-center mb-2">Site Engineer Flow</p>
          <div className="flex items-center justify-center gap-1">
            <span className="w-8 h-1.5 rounded-full bg-[#136dec]"></span>
            <span className="w-8 h-1.5 rounded-full bg-slate-200"></span>
            <span className="w-8 h-1.5 rounded-full bg-slate-200"></span>
            <span className="w-8 h-1.5 rounded-full bg-slate-200"></span>
            <span className="w-8 h-1.5 rounded-full bg-slate-200"></span>
            <span className="w-8 h-1.5 rounded-full bg-slate-200"></span>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}
