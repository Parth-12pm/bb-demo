import DesktopLayout from "../../components/DesktopLayout";
import Link from "next/link";

const navItems = [
  { label: "Projects", href: "/manager-web", icon: "folder_open" },
  { label: "DPR Review", href: "/manager-web/dpr-review", icon: "description" },
  { label: "Approvals", href: "/manager-web/approvals", icon: "task_alt" },
  { label: "Attendance", href: "/manager-web/attendance", icon: "groups" },
  { label: "Budget", href: "/manager-web/budget", icon: "currency_rupee" },
];

const budgetData = [
  { category: "Labor", allocated: 2500000, spent: 1800000 },
  { category: "Materials", allocated: 8000000, spent: 6200000 },
  { category: "Equipment", allocated: 1500000, spent: 1100000 },
  { category: "Subcontractors", allocated: 3000000, spent: 2400000 },
  { category: "Miscellaneous", allocated: 500000, spent: 350000 },
];

const formatCurrency = (value: number) => {
  if (value >= 10000000) return `₹ ${(value / 10000000).toFixed(2)} Cr`;
  if (value >= 100000) return `₹ ${(value / 100000).toFixed(1)} L`;
  return `₹ ${value.toLocaleString()}`;
};

export default function ManagerBudget() {
  const totalAllocated = budgetData.reduce((sum, c) => sum + c.allocated, 0);
  const totalSpent = budgetData.reduce((sum, c) => sum + c.spent, 0);
  const variance = totalAllocated - totalSpent;

  return (
    <DesktopLayout
      title="Budget & Variance"
      subtitle="Monitor budget utilization and cost variance"
      brandName="BharatBuild"
      brandSubtitle="Manager Console"
      navItems={navItems}
      userInfo={{ name: "Vikram Singh", role: "Project Manager" }}
    >
      <div className="animate-fade-in space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-500 mb-1">Total Allocated</p>
            <p className="text-3xl font-bold text-slate-900">{formatCurrency(totalAllocated)}</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-500 mb-1">Total Spent</p>
            <p className="text-3xl font-bold text-orange-600">{formatCurrency(totalSpent)}</p>
            <p className="text-sm text-slate-400">{((totalSpent / totalAllocated) * 100).toFixed(0)}% utilized</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-500 mb-1">Remaining</p>
            <p className="text-3xl font-bold text-green-600">{formatCurrency(variance)}</p>
            <p className="text-sm text-green-600">Under budget ✓</p>
          </div>
        </div>

        {/* Budget Breakdown */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Budget by Category</h3>
          <div className="space-y-6">
            {budgetData.map((item, i) => {
              const percent = (item.spent / item.allocated) * 100;
              const isOver = percent > 90;
              return (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-slate-900">{item.category}</span>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-slate-500">Spent: <span className="font-bold text-slate-900">{formatCurrency(item.spent)}</span></span>
                      <span className="text-slate-400">/</span>
                      <span className="text-slate-500">{formatCurrency(item.allocated)}</span>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${isOver ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                        {percent.toFixed(0)}%
                      </span>
                    </div>
                  </div>
                  <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div 
                      className={`h-3 rounded-full transition-all duration-700 ${isOver ? 'bg-red-500' : percent > 70 ? 'bg-orange-500' : 'bg-[#136dec]'}`}
                      style={{ width: `${Math.min(percent, 100)}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Flow Complete! */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <span className="text-sm text-slate-400">Manager Web Flow Complete!</span>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <Link href="/manager-web" className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">✓ Projects</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/manager-web/dpr-review" className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">✓ DPR Review</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/manager-web/approvals" className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">✓ Approvals</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/manager-web/attendance" className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">✓ Attendance</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <span className="px-3 py-1 rounded-full bg-[#136dec] text-white text-sm font-medium">✓ Budget</span>
          </div>
        </div>

        {/* Back to Home */}
        <div className="flex justify-center pt-4">
          <Link href="/" className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full font-medium transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Role Selection
          </Link>
        </div>
      </div>
    </DesktopLayout>
  );
}
