const tools = [
  {
    title: "Allocations",
    description:
      "Track and manage vehicle allocations across regions. View dealer inventory, pipeline status, and allocation summaries.",
    href: process.env.NEXT_PUBLIC_ALLOCATIONS_URL || "#",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
      </svg>
    ),
    color: "bg-blue-50 text-blue-700",
  },
  {
    title: "Incentive Dashboard",
    description:
      "Manage incentive programs, track budgets, and generate dealer pay files. Monitor campaign performance across regions.",
    href: process.env.NEXT_PUBLIC_INCENTIVES_URL || "#",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    color: "bg-green-50 text-green-700",
  },
  {
    title: "Americas Dashboard",
    description:
      "Daily operations dashboard with KPIs, vehicle status tracking, and regional performance metrics across the Americas.",
    href: process.env.NEXT_PUBLIC_DASHBOARD_URL || "#",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    color: "bg-amber-50 text-amber-700",
  },
  {
    title: "Fleet Management",
    description:
      "Fleet tracking, company car policies, delivery checklists, and dealer documentation for fleet operations.",
    href: process.env.NEXT_PUBLIC_FLEET_URL || "#",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25m-3.75 0V5.625m0 12.75v-2.251c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.251m-12 0V14.25m0-8.375a48.107 48.107 0 0 0-7.864 0C2.64 5.974 2.25 6.58 2.25 7.244v6.131c0 .662.388 1.267 1.033 1.37 1.487.237 3.003.383 4.542.433" />
      </svg>
    ),
    color: "bg-purple-50 text-purple-700",
  },
];

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-ineos-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-ineos-red rounded flex items-center justify-center font-bold text-lg">
              IN
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight">INEOS Automotive</div>
              <div className="text-xs text-ineos-silver-dust tracking-wide uppercase">Americas Hub</div>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm text-ineos-mushroom">
            {tools.map((tool) => (
              <a
                key={tool.title}
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {tool.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-ineos-charcoal tracking-tight">
              Americas Hub
            </h1>
            <p className="mt-2 text-ineos-iron-smoke text-lg">
              Central access point for all INEOS Automotive Americas tools and dashboards.
            </p>
          </div>

          {/* Tool Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <a
                key={tool.title}
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl border border-ineos-dove p-6 hover:shadow-lg hover:border-ineos-mushroom transition-all duration-200"
              >
                <div className={`w-14 h-14 rounded-lg ${tool.color} flex items-center justify-center mb-4`}>
                  {tool.icon}
                </div>
                <h2 className="text-lg font-semibold text-ineos-onyx group-hover:text-ineos-red transition-colors">
                  {tool.title}
                </h2>
                <p className="mt-2 text-sm text-ineos-iron-smoke leading-relaxed">
                  {tool.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-ineos-red opacity-0 group-hover:opacity-100 transition-opacity">
                  Open
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* Quick Stats Section */}
          <div className="mt-12 bg-white rounded-xl border border-ineos-dove p-6">
            <h3 className="text-sm font-semibold text-ineos-iron-smoke uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {tools.map((tool) => (
                <a
                  key={tool.title}
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-ineos-mushroom-light border border-transparent hover:border-ineos-dove transition-all text-sm"
                >
                  <span className="text-ineos-onyx font-medium">{tool.title}</span>
                  <svg className="w-3.5 h-3.5 text-ineos-silver-dust ml-auto" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-ineos-dove bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between text-sm text-ineos-silver-dust">
          <span>&copy; {new Date().getFullYear()} INEOS Automotive Americas</span>
          <span className="text-xs">v1.0.0</span>
        </div>
      </footer>
    </>
  );
}
