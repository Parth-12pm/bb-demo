"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  icon: string;
}

interface DesktopLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  brandName?: string;
  brandSubtitle?: string;
  navItems: NavItem[];
  userInfo?: {
    name: string;
    role: string;
    avatar?: string;
  };
}

export default function DesktopLayout({
  children,
  title,
  subtitle,
  brandName = "BharatBuild",
  brandSubtitle = "Dashboard",
  navItems,
  userInfo = { name: "Demo User", role: "Prototype Mode" }
}: DesktopLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen overflow-hidden bg-[#f6f7f8]">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 bg-white border-r border-slate-200 flex flex-col h-full">
        {/* Brand */}
        <div className="p-6 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#136dec] to-[#1058c4] flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-white text-xl">construction</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-slate-900 text-base font-bold leading-tight">{brandName}</h1>
              <p className="text-slate-500 text-xs font-medium">{brandSubtitle}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-2 flex flex-col gap-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                  isActive
                    ? "bg-[#136dec]/10 text-[#136dec]"
                    : "text-slate-600 hover:bg-slate-50 hover:text-[#136dec]"
                }`}
              >
                <span className={`material-symbols-outlined text-[22px] ${isActive ? "font-medium" : ""}`}>
                  {item.icon}
                </span>
                <span className={`text-sm ${isActive ? "font-bold" : "font-medium"}`}>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-slate-200">
          <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
            {userInfo.avatar ? (
              <div 
                className="h-9 w-9 rounded-full bg-cover bg-center border border-slate-200" 
                style={{ backgroundImage: `url(${userInfo.avatar})` }}
              />
            ) : (
              <div className="h-9 w-9 rounded-full bg-[#136dec]/10 flex items-center justify-center text-[#136dec]">
                <span className="material-symbols-outlined text-lg">person</span>
              </div>
            )}
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-bold truncate text-slate-900">{userInfo.name}</span>
              <span className="text-xs text-slate-500 truncate">{userInfo.role}</span>
            </div>
            <span className="material-symbols-outlined text-slate-400 ml-auto text-sm">expand_more</span>
          </div>
          
          {/* Back to roles */}
          <Link 
            href="/"
            className="flex items-center gap-2 px-3 py-2 mt-2 text-slate-500 hover:text-[#136dec] hover:bg-slate-50 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined text-lg">logout</span>
            <span className="text-sm font-medium">Switch Role</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-full overflow-y-auto">
        {/* Page Header */}
        <div className="bg-white border-b border-slate-200 px-8 py-6">
          <h1 className="text-slate-900 text-2xl md:text-3xl font-extrabold tracking-tight">{title}</h1>
          {subtitle && (
            <p className="text-slate-500 text-base font-normal mt-1">{subtitle}</p>
          )}
        </div>
        
        {/* Page Content */}
        <div className="p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
