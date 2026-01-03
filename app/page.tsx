import Link from "next/link";

const roles = [
  {
    id: "admin",
    title: "Admin",
    subtitle: "System Configuration",
    description: "Organization management, user roles, audit logs",
    icon: "admin_panel_settings",
    href: "/admin",
    type: "desktop",
    color: "from-purple-500 to-purple-700",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
  },
  {
    id: "owner",
    title: "Owner",
    subtitle: "Executive Dashboard",
    description: "Project overview, budgets, timelines, reports",
    icon: "account_balance",
    href: "/owner",
    type: "desktop",
    color: "from-emerald-500 to-emerald-700",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-700",
  },
  {
    id: "manager-web",
    title: "Manager (Web)",
    subtitle: "Reviews & Approvals",
    description: "DPR review, material approvals, attendance view",
    icon: "verified_user",
    href: "/manager-web",
    type: "desktop",
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
  },
  {
    id: "manager-mobile",
    title: "Manager (Mobile)",
    subtitle: "On-the-go Approvals",
    description: "Quick approvals, alerts, project status",
    icon: "phone_android",
    href: "/manager-mobile",
    type: "mobile",
    color: "from-indigo-500 to-indigo-700",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-700",
  },
  {
    id: "engineer",
    title: "Site Engineer",
    subtitle: "Field Execution",
    description: "DPR creation, labor verification, attendance approval",
    icon: "engineering",
    href: "/engineer",
    type: "mobile",
    color: "from-orange-500 to-orange-700",
    bgColor: "bg-orange-50",
    textColor: "text-orange-700",
  },
  {
    id: "labor",
    title: "Labor",
    subtitle: "Attendance Only",
    description: "OTP login, geo-fence check-in, work summary",
    icon: "badge",
    href: "/labor",
    type: "mobile",
    color: "from-amber-500 to-amber-700",
    bgColor: "bg-amber-50",
    textColor: "text-amber-700",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#136dec] to-[#1058c4] flex items-center justify-center shadow-lg shadow-blue-200">
              <span className="material-symbols-outlined text-white text-xl">construction</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900">BharatBuild</h1>
              <p className="text-xs text-slate-500">Construction Field Management</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200">
            <span className="material-symbols-outlined text-amber-600 text-sm">science</span>
            <span className="text-xs font-medium text-amber-700">Prototype Mode</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Role-Based Workflow
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#136dec] to-indigo-600">
              Prototype
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Experience the complete user flow from <strong>Labor → Site Engineer → Manager → Owner</strong>.
            <br />
            Select a role below to explore its dedicated journey.
          </p>
        </div>

        {/* Data Flow Diagram */}
        <div className="mt-12 flex items-center justify-center gap-3 text-sm animate-slide-up">
          <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full border border-orange-200">
            <span className="material-symbols-outlined text-orange-600 text-lg">badge</span>
            <span className="font-medium text-orange-700">Labor</span>
          </div>  
          <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
          <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full border border-orange-200">
            <span className="material-symbols-outlined text-orange-600 text-lg">engineering</span>
            <span className="font-medium text-orange-700">Site Engineer</span>
          </div>
          <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
            <span className="material-symbols-outlined text-blue-600 text-lg">verified_user</span>
            <span className="font-medium text-blue-700">Manager</span>
          </div>
          <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
          <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-200">
            <span className="material-symbols-outlined text-emerald-600 text-lg">account_balance</span>
            <span className="font-medium text-emerald-700">Owner</span>
          </div>
        </div>
      </div>

      {/* Role Cards */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {roles.map((role) => (
            <Link
              key={role.id}
              href={role.href}
              className="role-card group relative bg-white rounded-2xl border border-slate-200 p-6 hover:border-transparent"
            >
              {/* Device Type Badge */}
              <div className="absolute top-4 right-4">
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${role.bgColor} ${role.textColor}`}>
                  <span className="material-symbols-outlined text-sm">
                    {role.type === "mobile" ? "smartphone" : "computer"}
                  </span>
                  {role.type === "mobile" ? "Mobile" : "Desktop"}
                </span>
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${role.color} flex items-center justify-center shadow-lg mb-4`}>
                <span className="material-symbols-outlined text-white text-2xl">{role.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#136dec] transition-colors">
                {role.title}
              </h3>
              <p className="text-sm font-medium text-slate-500 mt-1">{role.subtitle}</p>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">{role.description}</p>

              {/* Arrow */}
              <div className="mt-4 flex items-center gap-2 text-[#136dec] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Explore Flow</span>
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">computer</span>
            <span>Desktop = Full-width responsive layout</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">smartphone</span>
            <span>Mobile = 375px device frame</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-sm text-slate-500">
          <p>BharatBuild • Construction Management Prototype</p>
          <p>Currency: ₹ INR • Light Theme Only</p>
        </div>
      </footer>
    </div>
  );
}
