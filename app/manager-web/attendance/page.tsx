import DesktopLayout from "../../components/DesktopLayout";
import Link from "next/link";

const navItems = [
  { label: "Projects", href: "/manager-web", icon: "folder_open" },
  { label: "DPR Review", href: "/manager-web/dpr-review", icon: "description" },
  { label: "Approvals", href: "/manager-web/approvals", icon: "task_alt" },
  { label: "Attendance", href: "/manager-web/attendance", icon: "groups" },
  { label: "Budget", href: "/manager-web/budget", icon: "currency_rupee" },
];

const attendance = [
  { name: "Ramesh Kumar", id: "EMP-4022", trade: "Bar Bender", project: "Oberoi Sky City", checkIn: "08:15 AM", checkOut: "-", hours: "7h 45m", status: "Present" },
  { name: "Suresh Yadav", id: "EMP-4023", trade: "Mason", project: "Oberoi Sky City", checkIn: "08:22 AM", checkOut: "-", hours: "7h 38m", status: "Present" },
  { name: "Mohan Das", id: "EMP-4025", trade: "Carpenter", project: "Green Valley", checkIn: "07:55 AM", checkOut: "05:30 PM", hours: "9h 35m", status: "Completed" },
  { name: "Raju Sharma", id: "EMP-4028", trade: "Plumber", project: "Tech Park", checkIn: "08:05 AM", checkOut: "04:00 PM", hours: "7h 55m", status: "Completed" },
  { name: "Amit Singh", id: "EMP-4030", trade: "Electrician", project: "Metro Station", checkIn: "-", checkOut: "-", hours: "-", status: "Absent" },
];

export default function ManagerAttendance() {
  return (
    <DesktopLayout
      title="Labor Attendance Review"
      subtitle="View workforce attendance data (Site Engineer approves entries)"
      brandName="BharatBuild"
      brandSubtitle="Manager Console"
      navItems={navItems}
      userInfo={{ name: "Vikram Singh", role: "Project Manager" }}
    >
      <div className="animate-fade-in space-y-6">
        {/* Info Banner - Manager can only VIEW */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center gap-3">
          <span className="material-symbols-outlined text-[#136dec]">info</span>
          <p className="text-sm text-blue-800">
            <strong>View Only:</strong> Attendance is approved by Site Engineers at the geo-fence verification step. This screen is for viewing work hours and attendance data.
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-green-50 rounded-xl p-4 border border-green-200 text-center">
            <p className="text-3xl font-bold text-green-700">142</p>
            <p className="text-sm text-green-600">Present Today</p>
          </div>
          <div className="bg-red-50 rounded-xl p-4 border border-red-200 text-center">
            <p className="text-3xl font-bold text-red-700">8</p>
            <p className="text-sm text-red-600">Absent</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 text-center">
            <p className="text-3xl font-bold text-blue-700">1,120</p>
            <p className="text-sm text-blue-600">Total Hours Today</p>
          </div>
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 text-center">
            <p className="text-3xl font-bold text-amber-700">7.8h</p>
            <p className="text-sm text-amber-600">Avg Hours/Worker</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-wrap gap-4">
          <select className="appearance-none bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg px-3 py-2.5">
            <option>All Projects</option>
            <option>Oberoi Sky City</option>
            <option>Green Valley</option>
            <option>Tech Park</option>
          </select>
          <select className="appearance-none bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg px-3 py-2.5">
            <option>Today (25-10-2023)</option>
            <option>Yesterday</option>
            <option>This Week</option>
          </select>
          <select className="appearance-none bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg px-3 py-2.5">
            <option>All Status</option>
            <option>Present</option>
            <option>Absent</option>
          </select>
          <div className="flex-1"></div>
          <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-slate-200">
            <span className="material-symbols-outlined text-lg">download</span>
            Export
          </button>
        </div>

        {/* Attendance Table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Worker</th>
                  <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Trade</th>
                  <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Project</th>
                  <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Check In</th>
                  <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Check Out</th>
                  <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Hours</th>
                  <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {attendance.map((worker, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold ${
                          worker.status === 'Absent' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                        }`}>
                          {worker.name.split(' ').map(w => w[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900">{worker.name}</p>
                          <p className="text-xs text-slate-500">{worker.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-slate-600">{worker.trade}</td>
                    <td className="p-4 text-sm text-slate-600">{worker.project}</td>
                    <td className="p-4 text-sm text-slate-900 font-medium">{worker.checkIn}</td>
                    <td className="p-4 text-sm text-slate-900 font-medium">{worker.checkOut}</td>
                    <td className="p-4 text-sm text-slate-900 font-bold">{worker.hours}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        worker.status === 'Present' ? 'bg-green-100 text-green-700' :
                        worker.status === 'Completed' ? 'bg-blue-100 text-blue-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {worker.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Flow Navigation */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <span className="text-sm text-slate-400">Manager Web Flow:</span>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <Link href="/manager-web" className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">✓ Projects</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/manager-web/dpr-review" className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">✓ DPR Review</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/manager-web/approvals" className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">✓ Approvals</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <span className="px-3 py-1 rounded-full bg-[#136dec] text-white text-sm font-medium">Attendance</span>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/manager-web/budget" className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200">Budget</Link>
          </div>
        </div>
      </div>
    </DesktopLayout>
  );
}
