import DesktopLayout from "../../components/DesktopLayout";
import Link from "next/link";

const navItems = [
  { label: "Overview", href: "/owner", icon: "dashboard" },
  { label: "Projects", href: "/owner/projects", icon: "business_center" },
  { label: "Budget", href: "/owner/budget", icon: "currency_rupee" },
  { label: "Timeline", href: "/owner/timeline", icon: "schedule" },
  { label: "Reports", href: "/owner/reports", icon: "bar_chart" },
];

const budgetData = [
  { project: "Sunrise Apartments", allocated: 45000000, spent: 29000000, remaining: 16000000 },
  { project: "Green Valley Villa", allocated: 12000000, spent: 8000000, remaining: 4000000 },
  { project: "Tech Park Phase 2", allocated: 85000000, spent: 25000000, remaining: 60000000 },
  { project: "Metro Station #14", allocated: 120000000, spent: 66000000, remaining: 54000000 },
];

const formatCurrency = (value: number) => {
  if (value >= 10000000) return `₹ ${(value / 10000000).toFixed(1)} Cr`;
  if (value >= 100000) return `₹ ${(value / 100000).toFixed(1)} L`;
  return `₹ ${value.toLocaleString()}`;
};

export default function OwnerBudget() {
  const totalAllocated = budgetData.reduce((sum, p) => sum + p.allocated, 0);
  const totalSpent = budgetData.reduce((sum, p) => sum + p.spent, 0);
  const totalRemaining = budgetData.reduce((sum, p) => sum + p.remaining, 0);

  return (
    <DesktopLayout
      title="Budget vs Spent Overview"
      subtitle="Financial summary across all projects"
      brandName="Sri Krishna Const."
      brandSubtitle="Owner Dashboard"
      navItems={navItems}
      userInfo={{ name: "Ramesh Krishnan", role: "Owner" }}
    >
      <div className="animate-fade-in space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <span className="material-symbols-outlined">account_balance_wallet</span>
              </div>
              <span className="text-slate-500 text-sm font-medium">Total Allocated</span>
            </div>
            <p className="text-3xl font-bold text-slate-900">{formatCurrency(totalAllocated)}</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
                <span className="material-symbols-outlined">payments</span>
              </div>
              <span className="text-slate-500 text-sm font-medium">Total Spent</span>
            </div>
            <p className="text-3xl font-bold text-orange-600">{formatCurrency(totalSpent)}</p>
            <p className="text-sm text-slate-400 mt-1">{((totalSpent / totalAllocated) * 100).toFixed(0)}% of budget</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                <span className="material-symbols-outlined">savings</span>
              </div>
              <span className="text-slate-500 text-sm font-medium">Remaining</span>
            </div>
            <p className="text-3xl font-bold text-green-600">{formatCurrency(totalRemaining)}</p>
          </div>
        </div>

        {/* Budget Chart (Visual Representation) */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Budget Utilization by Project</h3>
          <div className="space-y-6">
            {budgetData.map((project, i) => {
              const spentPercent = (project.spent / project.allocated) * 100;
              return (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-slate-900">{project.project}</span>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-slate-500">Spent: <span className="font-bold text-slate-900">{formatCurrency(project.spent)}</span></span>
                      <span className="text-slate-400">/</span>
                      <span className="text-slate-500">Budget: <span className="font-bold text-slate-900">{formatCurrency(project.allocated)}</span></span>
                    </div>
                  </div>
                  <div className="h-4 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div 
                      className={`h-4 rounded-full transition-all duration-700 ${
                        spentPercent > 80 ? 'bg-red-500' : spentPercent > 60 ? 'bg-orange-500' : 'bg-[#136dec]'
                      }`}
                      style={{ width: `${spentPercent}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{spentPercent.toFixed(0)}% utilized • Remaining: {formatCurrency(project.remaining)}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Budget Table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="p-5 border-b border-slate-100">
            <h3 className="text-lg font-bold text-slate-900">Detailed Breakdown</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Project</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 text-right">Allocated</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 text-right">Spent</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 text-right">Remaining</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {budgetData.map((project, i) => {
                  const spentPercent = (project.spent / project.allocated) * 100;
                  return (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-medium text-slate-900">{project.project}</td>
                      <td className="px-5 py-4 text-right text-slate-600">{formatCurrency(project.allocated)}</td>
                      <td className="px-5 py-4 text-right text-slate-600">{formatCurrency(project.spent)}</td>
                      <td className="px-5 py-4 text-right font-medium text-green-600">{formatCurrency(project.remaining)}</td>
                      <td className="px-5 py-4 text-right">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                          spentPercent > 80 ? 'bg-red-50 text-red-700' : 
                          spentPercent > 60 ? 'bg-orange-50 text-orange-700' : 
                          'bg-green-50 text-green-700'
                        }`}>
                          {spentPercent > 80 ? 'High Usage' : spentPercent > 60 ? 'Moderate' : 'On Track'}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot className="bg-slate-50 font-bold">
                <tr>
                  <td className="px-5 py-4 text-slate-900">Total</td>
                  <td className="px-5 py-4 text-right text-slate-900">{formatCurrency(totalAllocated)}</td>
                  <td className="px-5 py-4 text-right text-slate-900">{formatCurrency(totalSpent)}</td>
                  <td className="px-5 py-4 text-right text-green-600">{formatCurrency(totalRemaining)}</td>
                  <td className="px-5 py-4"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Flow Navigation */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <span className="text-sm text-slate-400">Owner Flow:</span>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <Link href="/owner" className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">✓ Overview</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/owner/projects" className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">✓ Projects</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <span className="px-3 py-1 rounded-full bg-[#136dec] text-white text-sm font-medium">Budget</span>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/owner/timeline" className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200 transition-colors">Timeline</Link>
            <span className="material-symbols-outlined text-slate-300">arrow_forward</span>
            <Link href="/owner/reports" className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200 transition-colors">Reports</Link>
          </div>
        </div>
      </div>
    </DesktopLayout>
  );
}
