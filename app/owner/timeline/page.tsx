import DesktopLayout from "../../components/DesktopLayout";
import Link from "next/link";

const navItems = [
  { label: "Overview", href: "/owner", icon: "dashboard" },
  { label: "Projects", href: "/owner/projects", icon: "business_center" },
  { label: "Budget", href: "/owner/budget", icon: "currency_rupee" },
  { label: "Timeline", href: "/owner/timeline", icon: "schedule" },
  { label: "Reports", href: "/owner/reports", icon: "bar_chart" },
];

const timelineData = [
  { 
    project: "Sunrise Apartments",
    startDate: "15-01-2023",
    endDate: "30-06-2024",
    currentDate: "25-10-2023",
    status: "On Schedule",
    statusColor: "green",
    milestones: [
      { name: "Foundation", date: "15-03-2023", status: "completed" },
      { name: "Structure", date: "15-08-2023", status: "completed" },
      { name: "Finishing", date: "15-03-2024", status: "in-progress" },
      { name: "Handover", date: "30-06-2024", status: "pending" },
    ]
  },
  { 
    project: "Green Valley Villa",
    startDate: "01-04-2023",
    endDate: "15-12-2023",
    currentDate: "25-10-2023",
    status: "Delayed",
    statusColor: "orange",
    delay: "45 days",
    milestones: [
      { name: "Foundation", date: "01-06-2023", status: "completed" },
      { name: "Structure", date: "15-09-2023", status: "delayed" },
      { name: "Finishing", date: "15-11-2023", status: "pending" },
      { name: "Handover", date: "15-12-2023", status: "pending" },
    ]
  },
  { 
    project: "Tech Park Phase 2",
    startDate: "01-07-2023",
    endDate: "31-12-2024",
    currentDate: "25-10-2023",
    status: "On Schedule",
    statusColor: "green",
    milestones: [
      { name: "Foundation", date: "15-09-2023", status: "completed" },
      { name: "Structure", date: "15-04-2024", status: "in-progress" },
      { name: "Finishing", date: "15-10-2024", status: "pending" },
      { name: "Handover", date: "31-12-2024", status: "pending" },
    ]
  },
];

const milestoneColors = {
  completed: { bg: "bg-green-500", text: "text-green-700", light: "bg-green-50" },
  "in-progress": { bg: "bg-blue-500", text: "text-blue-700", light: "bg-blue-50" },
  delayed: { bg: "bg-orange-500", text: "text-orange-700", light: "bg-orange-50" },
  pending: { bg: "bg-slate-300", text: "text-slate-500", light: "bg-slate-50" },
};

export default function OwnerTimeline() {
  return (
    <DesktopLayout
      title="Timeline & Delay Overview"
      subtitle="Project schedules and milestone tracking"
      brandName="Sri Krishna Const."
      brandSubtitle="Owner Dashboard"
      navItems={navItems}
      userInfo={{ name: "Ramesh Krishnan", role: "Owner" }}
    >
      <div className="animate-fade-in space-y-6">
        {/* Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-5 border border-slate-200 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
              <span className="material-symbols-outlined">check_circle</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">9</p>
              <p className="text-sm text-slate-500">On Schedule</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
              <span className="material-symbols-outlined">warning</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">2</p>
              <p className="text-sm text-slate-500">Delayed</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <span className="material-symbols-outlined">flag</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">15</p>
              <p className="text-sm text-slate-500">Milestones Due</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
              <span className="material-symbols-outlined">event</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">3</p>
              <p className="text-sm text-slate-500">Handovers in Q4</p>
            </div>
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-6 stagger-children">
          {timelineData.map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{item.project}</h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {item.startDate} → {item.endDate}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {item.delay && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-700 border border-red-200">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      {item.delay} delay
                    </span>
                  )}
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-${item.statusColor}-50 text-${item.statusColor}-700 border border-${item.statusColor}-200`}>
                    <span className={`w-2 h-2 rounded-full bg-${item.statusColor}-500`}></span>
                    {item.status}
                  </span>
                </div>
              </div>

              {/* Milestones Timeline */}
              <div className="relative">
                {/* Progress Line */}
                <div className="absolute top-4 left-0 right-0 h-1 bg-slate-200 rounded"></div>
                
                {/* Milestones */}
                <div className="relative flex justify-between">
                  {item.milestones.map((milestone, j) => {
                    const colors = milestoneColors[milestone.status as keyof typeof milestoneColors];
                    return (
                      <div key={j} className="flex flex-col items-center" style={{ width: '22%' }}>
                        <div className={`w-8 h-8 rounded-full ${colors.bg} flex items-center justify-center z-10 shadow-sm`}>
                          {milestone.status === 'completed' && (
                            <span className="material-symbols-outlined text-white text-sm">check</span>
                          )}
                          {milestone.status === 'in-progress' && (
                            <span className="material-symbols-outlined text-white text-sm">pending</span>
                          )}
                          {milestone.status === 'delayed' && (
                            <span className="material-symbols-outlined text-white text-sm">warning</span>
                          )}
                          {milestone.status === 'pending' && (
                            <span className="material-symbols-outlined text-white text-sm">circle</span>
                          )}
                        </div>
                        <p className="text-sm font-medium text-slate-900 mt-3">{milestone.name}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{milestone.date}</p>
                        <span className={`text-xs font-medium ${colors.text} mt-1 px-2 py-0.5 rounded ${colors.light}`}>
                          {milestone.status === 'in-progress' ? 'In Progress' : 
                           milestone.status.charAt(0).toUpperCase() + milestone.status.slice(1)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flow Navigation */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <span className="text-sm text-slate-400">Owner Flow:</span>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <Link href="/owner" className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">✓ Overview</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/owner/projects" className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">✓ Projects</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/owner/budget" className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">✓ Budget</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <span className="px-3 py-1 rounded-full bg-[#136dec] text-white text-sm font-medium">Timeline</span>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/owner/reports" className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200 transition-colors">Reports</Link>
          </div>
        </div>
      </div>
    </DesktopLayout>
  );
}
