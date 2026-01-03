import MobileFrame from "../components/MobileFrame";
import Link from "next/link";

export default function LaborLogin() {
  return (
    <MobileFrame showOfflineIndicator={false}>
      <div className="flex flex-col min-h-[750px]">
        {/* Header */}
        <div className="flex items-center bg-[#f6f7f8] p-4 pb-2 justify-between border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">Labor Registration</h2>
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#136dec]/10 text-[#136dec]">
            <span className="material-symbols-outlined">call</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Logo Area */}
          <div className="flex justify-center py-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center shadow-lg border-4 border-white">
              <span className="material-symbols-outlined text-amber-700 text-4xl">hard_hat</span>
            </div>
          </div>

          {/* Header Text */}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-slate-900 text-center px-4">
              Welcome to BharatBuild
            </h2>
            <p className="text-slate-500 text-sm text-center max-w-md px-6 pt-2 pb-4">
              Enter your details to register and mark attendance
            </p>
          </div>

          {/* Input Form */}
          <div className="w-full max-w-[380px] mx-auto px-4 flex flex-col gap-4">
            {/* Name Fields - Side by Side */}
            <div className="flex gap-3">
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-slate-700 text-sm font-medium">First Name</label>
                <input 
                  type="text"
                  defaultValue="Ramesh"
                  className="h-12 rounded-lg border border-slate-300 bg-white px-3 text-base font-medium text-slate-900 focus:border-[#136dec] focus:ring-2 focus:ring-[#136dec]/20"
                  placeholder="First name"
                />
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-slate-700 text-sm font-medium">Last Name</label>
                <input 
                  type="text"
                  defaultValue="Kumar"
                  className="h-12 rounded-lg border border-slate-300 bg-white px-3 text-base font-medium text-slate-900 focus:border-[#136dec] focus:ring-2 focus:ring-[#136dec]/20"
                  placeholder="Last name"
                />
              </div>
            </div>

            {/* Mobile Number Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-slate-700 text-sm font-medium">Mobile Number</label>
              <div className="flex items-center gap-2">
                <div className="flex h-12 w-[60px] items-center justify-center rounded-lg border border-slate-300 bg-white text-base font-medium text-slate-900">
                  +91
                </div>
                <input 
                  type="tel"
                  defaultValue="98765 00001"
                  className="flex-1 h-12 rounded-lg border border-slate-300 bg-white px-3 text-base font-medium text-slate-900 focus:border-[#136dec] focus:ring-2 focus:ring-[#136dec]/20"
                  placeholder="98765 43210"
                />
              </div>
            </div>

            {/* OTP Input Section */}
            <div className="flex flex-col gap-1.5 pt-1">
              <div className="flex justify-between items-center">
                <label className="text-slate-700 text-sm font-medium">Enter OTP</label>
                <span className="text-[#136dec] text-xs font-medium cursor-pointer hover:underline">Resend Code</span>
              </div>
              <div className="flex justify-between gap-2">
                <input 
                  type="text" 
                  maxLength={1} 
                  defaultValue="4"
                  className="h-12 w-12 flex-1 rounded-lg border-2 border-[#136dec] bg-[#136dec]/5 text-center text-xl font-bold text-slate-900 focus:ring-0"
                />
                <input 
                  type="text" 
                  maxLength={1}
                  defaultValue="2"
                  className="h-12 w-12 flex-1 rounded-lg border border-slate-300 bg-white text-center text-xl font-bold text-slate-900 focus:border-[#136dec] focus:ring-2 focus:ring-[#136dec]/20"
                />
                <input 
                  type="text" 
                  maxLength={1}
                  defaultValue="8"
                  className="h-12 w-12 flex-1 rounded-lg border border-slate-300 bg-white text-center text-xl font-bold text-slate-900 focus:border-[#136dec] focus:ring-2 focus:ring-[#136dec]/20"
                />
                <input 
                  type="text" 
                  maxLength={1}
                  defaultValue="1"
                  className="h-12 w-12 flex-1 rounded-lg border border-slate-300 bg-white text-center text-xl font-bold text-slate-900 focus:border-[#136dec] focus:ring-2 focus:ring-[#136dec]/20"
                />
              </div>
              <p className="text-slate-400 text-xs mt-0.5 text-center">00:24 remaining</p>
            </div>

            {/* Login Button */}
            <div className="pt-3">
              <Link 
                href="/labor/checkin"
                className="flex w-full items-center justify-center rounded-xl bg-[#136dec] h-12 text-base font-bold text-white shadow-lg shadow-blue-200 hover:bg-blue-600 active:scale-[0.98] transition-all"
              >
                Login & Proceed
              </Link>
            </div>
          </div>

          {/* Spacer */}
          <div className="h-6"></div>
        </div>

        {/* Footer Help */}
        <div className="bg-[#f6f7f8] p-3 text-center border-t border-slate-200">
          <button className="inline-flex items-center gap-2 text-slate-500 text-sm font-medium hover:text-[#136dec] transition-colors">
            <span className="material-symbols-outlined text-base">help</span>
            Need help? Call Supervisor
          </button>
        </div>

        {/* Flow Indicator */}
        <div className="p-3 bg-slate-50 border-t border-slate-200">
          <p className="text-xs text-slate-400 text-center mb-2">Labor Flow</p>
          <div className="flex items-center justify-center gap-1">
            <span className="w-10 h-1.5 rounded-full bg-[#136dec]"></span>
            <span className="w-10 h-1.5 rounded-full bg-slate-200"></span>
            <span className="w-10 h-1.5 rounded-full bg-slate-200"></span>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}

