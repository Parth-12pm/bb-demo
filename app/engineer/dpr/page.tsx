import Link from "next/link";

export default function EngineerDPR() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-8 gap-10">
      {/* Mobile Frame */}
      <div className="mobile-frame relative flex flex-col">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-2xl z-50" />
        
        {/* Screen Content */}
        <div className="flex-1 overflow-hidden bg-[#f6f7f8] pt-8">
          <div className="h-full overflow-y-auto">
            <div className="flex flex-col min-h-[750px] bg-[#f6f7f8]">
              {/* Header */}
              <header className="sticky top-0 z-50 flex items-center bg-white border-b border-slate-200 p-4 justify-between shadow-sm">
                <Link href="/engineer/verify" className="flex items-center justify-center p-2 -ml-2 rounded-full hover:bg-slate-100">
                  <span className="material-symbols-outlined text-slate-900">arrow_back_ios_new</span>
                </Link>
                <h2 className="text-lg font-bold text-slate-900">New Daily Report</h2>
                <button className="text-[#136dec] font-bold text-sm">Save Draft</button>
              </header>

              {/* Offline Banner */}
              <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-amber-700 text-sm">wifi_off</span>
                <p className="text-amber-800 text-xs font-medium">Offline Mode - Report will sync when online</p>
              </div>

              {/* Content */}
              <main className="flex-1 overflow-y-auto pb-24">
                {/* Meta Info */}
                <div className="bg-white px-4 py-4 border-b border-slate-100">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Date</p>
                      <p className="text-slate-900 text-sm font-medium">25-10-2023</p>
                    </div>
                    <div className="w-px h-8 bg-slate-200"></div>
                    <div className="flex flex-col gap-1 flex-1 ml-4">
                      <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Site Location</p>
                      <p className="text-slate-900 text-sm font-medium">Block A - Foundation Area</p>
                    </div>
                    <span className="material-symbols-outlined text-[#136dec]">edit_location_alt</span>
                  </div>
                </div>

                {/* Photo Section */}
                <div className="bg-white mt-3 pb-4">
                  <div className="px-4 pt-4 pb-2 flex justify-between items-end">
                    <h3 className="text-slate-900 text-lg font-bold">Visual Proof <span className="text-red-500">*</span></h3>
                    <span className="text-xs text-slate-500">Min 2 photos</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 px-4 mt-2">
                    {/* Upload Button */}
                    <div className="aspect-square rounded-xl border-2 border-dashed border-[#136dec]/50 bg-[#136dec]/5 flex flex-col items-center justify-center gap-2 cursor-pointer active:bg-[#136dec]/10">
                      <div className="bg-[#136dec]/10 rounded-full p-2">
                        <span className="material-symbols-outlined text-[#136dec]">add_a_photo</span>
                      </div>
                      <span className="text-[#136dec] text-xs font-bold">Add Photo</span>
                    </div>
                    {/* Photo 1 */}
                    <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-100">
                      <div className="w-full h-full bg-gradient-to-br from-orange-200 to-orange-100 flex items-center justify-center text-3xl">🏗️</div>
                      <div className="absolute top-1 right-1 bg-black/50 text-white rounded-full p-1 cursor-pointer hover:bg-red-500">
                        <span className="material-symbols-outlined text-xs">close</span>
                      </div>
                    </div>
                    {/* Photo 2 */}
                    <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-100">
                      <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center text-3xl">🧱</div>
                      <div className="absolute top-1 right-1 bg-black/50 text-white rounded-full p-1 cursor-pointer hover:bg-red-500">
                        <span className="material-symbols-outlined text-xs">close</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Work Progress Section */}
                <div className="bg-white mt-3 pb-4">
                  <h3 className="text-slate-900 text-lg font-bold px-4 pt-4 pb-3">Work Done</h3>
                  <div className="px-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Activity Type</label>
                      <select className="w-full bg-white border border-slate-300 rounded-lg py-3 px-3 text-slate-900 focus:ring-2 focus:ring-[#136dec]/20 focus:border-[#136dec]">
                        <option>Concrete Work</option>
                        <option>Brickwork</option>
                        <option>Excavation</option>
                        <option>Plumbing</option>
                      </select>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="block text-sm font-medium text-slate-700">Description of Work</label>
                        {/* Voice Input Button */}
                        <button className="flex items-center gap-1 px-2 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-medium hover:bg-violet-200 transition-colors">
                          <span className="material-symbols-outlined text-sm">mic</span>
                          Voice Input
                        </button>
                      </div>
                      <textarea 
                        className="w-full bg-white border border-slate-300 rounded-lg py-3 px-3 text-slate-900 focus:ring-2 focus:ring-[#136dec]/20 focus:border-[#136dec]"
                        rows={3}
                        placeholder="Describe the work completed today..."
                        defaultValue="Completed foundation footing for Block A, Section 3. Rebar installation completed with 12mm TMT bars."
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Materials Section */}
                <div className="bg-white mt-3 pb-4">
                  <div className="px-4 pt-4 pb-2 flex justify-between items-center">
                    <h3 className="text-slate-900 text-lg font-bold">Materials Consumed</h3>
                  </div>
                  <div className="px-4 space-y-3 mt-2">
                    {/* Material Item 1 */}
                    <div className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-slate-50">
                      <div className="bg-[#136dec]/10 p-2 rounded-lg text-[#136dec]">
                        <span className="material-symbols-outlined">inventory_2</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-slate-900">Cement (PPC)</p>
                        <p className="text-xs text-slate-500">Ultratech 53 Grade</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-slate-900">50 <span className="text-xs font-normal text-slate-500">Bags</span></p>
                      </div>
                    </div>
                    {/* Material Item 2 */}
                    <div className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-slate-50">
                      <div className="bg-[#136dec]/10 p-2 rounded-lg text-[#136dec]">
                        <span className="material-symbols-outlined">grid_on</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-slate-900">Steel 12mm</p>
                        <p className="text-xs text-slate-500">TMT Bars</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-slate-900">200 <span className="text-xs font-normal text-slate-500">kg</span></p>
                      </div>
                    </div>
                    {/* Add Button */}
                    <button className="w-full py-3 rounded-lg border-2 border-dashed border-[#136dec]/30 text-[#136dec] font-semibold flex items-center justify-center gap-2 hover:bg-[#136dec]/5">
                      <span className="material-symbols-outlined">add</span>
                      Add Material
                    </button>
                  </div>
                </div>
              </main>

              {/* Submit Button */}
              <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[375px] bg-white border-t border-slate-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                <Link 
                  href="/engineer/sync"
                  className="flex w-full items-center justify-center gap-2 rounded-xl h-14 bg-[#136dec] text-white font-bold shadow-lg shadow-blue-200 hover:bg-blue-600 active:scale-[0.98] transition-all"
                >
                  <span className="material-symbols-outlined">send</span>
                  Submit Report
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full" />
      </div>

      {/* Right Side USP Cards */}
      <div className="hidden lg:flex flex-col gap-6 w-80">
        {/* Voice Reporting Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-5 text-white">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">mic</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Voice Reporting</h3>
                <p className="text-violet-200 text-sm">Our USP Feature</p>
              </div>
            </div>
          </div>
          <div className="p-5">
            <p className="text-sm text-slate-600 leading-relaxed">
              Site engineers can dictate DPR entries in their <strong>native language</strong> - no typing required! Supports Hindi, Tamil, Telugu, and more.
            </p>
            <div className="mt-4 p-3 bg-violet-50 rounded-lg border border-violet-100">
              <div className="flex items-center gap-2 text-violet-700 text-xs font-medium">
                <span className="material-symbols-outlined text-sm">memory</span>
                <span>Powered by Speech-to-Text AI</span>
              </div>
            </div>
          </div>
        </div>

        {/* OCR Bill Scanning Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-5 text-white">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">document_scanner</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Bill OCR Scanning</h3>
                <p className="text-emerald-200 text-sm">GST Readiness</p>
              </div>
            </div>
          </div>
          <div className="p-5">
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              Any bills or invoices uploaded are <strong>automatically OCR scanned</strong> and stored in the system for GST readiness.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span className="material-symbols-outlined text-emerald-600 text-base">check_circle</span>
                <span>Identify incomplete records</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span className="material-symbols-outlined text-emerald-600 text-base">check_circle</span>
                <span>Early anomaly detection</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span className="material-symbols-outlined text-emerald-600 text-base">check_circle</span>
                <span>Bill-readiness checks</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
              <p className="text-emerald-700 text-xs font-medium">
                ✓ Reduces billing risks & ensures compliance
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Flow Navigation - Fixed at bottom right */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-slate-200 text-slate-600 hover:text-primary hover:border-primary transition-all"
        >
          <span className="material-symbols-outlined text-lg">home</span>
          <span className="text-sm font-medium">All Roles</span>
        </a>
      </div>
    </div>
  );
}


