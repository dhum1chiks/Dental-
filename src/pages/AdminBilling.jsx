const AdminBilling = () => {
  return (
    <div className="flex-1 p-container-padding flex flex-col gap-stack-lg w-full overflow-y-auto">
      
      {/* Header & Page Actions */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-headline-lg font-headline-lg text-primary">Billing & Invoices</h1>
          <p className="text-body-md font-body-md text-on-surface-variant mt-1">Manage patient accounts, track revenue, and process payments.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-surface-container-lowest text-secondary border border-secondary px-6 py-3 rounded-xl text-label-md font-label-md hover:bg-surface-container-low transition-colors shadow-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Export Report
          </button>
          <button className="bg-primary text-on-primary px-6 py-3 rounded-xl text-label-md font-label-md hover:bg-primary/90 transition-colors shadow-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Create New Invoice
          </button>
        </div>
      </header>

      {/* Financial Overview Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        
        {/* Revenue Card */}
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0px_4px_20px_rgba(15,76,129,0.05)] flex flex-col gap-4 relative overflow-hidden border border-outline-variant/10">
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary-fixed rounded-full opacity-20"></div>
          <div className="flex justify-between items-center z-10">
            <span className="text-body-sm font-body-sm text-on-surface-variant font-medium">Revenue this Month</span>
            <span className="material-symbols-outlined text-primary bg-primary-fixed p-2 rounded-lg">account_balance_wallet</span>
          </div>
          <div className="z-10">
            <h2 className="text-headline-lg font-headline-lg text-on-surface">$42,500.00</h2>
            <p className="text-label-md font-label-md text-secondary mt-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">trending_up</span>
              +12.5% from last month
            </p>
          </div>
        </div>
        
        {/* Outstanding Card */}
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0px_4px_20px_rgba(15,76,129,0.05)] flex flex-col gap-4 relative overflow-hidden border border-outline-variant/10">
          <div className="flex justify-between items-center z-10">
            <span className="text-body-sm font-body-sm text-on-surface-variant font-medium">Total Outstanding</span>
            <span className="material-symbols-outlined text-tertiary bg-tertiary-fixed p-2 rounded-lg">pending_actions</span>
          </div>
          <div className="z-10">
            <h2 className="text-headline-lg font-headline-lg text-on-surface">$14,230.50</h2>
            <p className="text-label-md font-label-md text-on-surface-variant mt-1">Across 42 active invoices</p>
          </div>
        </div>
        
        {/* Overdue Card */}
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0px_4px_20px_rgba(15,76,129,0.05)] flex flex-col gap-4 relative overflow-hidden border border-error/20">
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-error-container rounded-full opacity-20"></div>
          <div className="flex justify-between items-center z-10">
            <span className="text-body-sm font-body-sm text-error font-medium">Overdue Payments</span>
            <span className="material-symbols-outlined text-error bg-error-container p-2 rounded-lg">warning</span>
          </div>
          <div className="z-10">
            <h2 className="text-headline-lg font-headline-lg text-error">$3,450.00</h2>
            <p className="text-label-md font-label-md text-error mt-1 flex items-center gap-1">
              Requires immediate action (8 invoices)
            </p>
          </div>
        </div>
        
      </section>

      {/* Invoice Table Section */}
      <section className="bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(15,76,129,0.05)] border border-outline-variant/10 flex flex-col overflow-hidden">
        {/* Table Controls */}
        <div className="p-6 border-b border-outline-variant/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h3 className="text-headline-md font-headline-md text-primary">Recent Invoices</h3>
          <div className="flex gap-3 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input 
                type="text" 
                placeholder="Search patient or invoice..." 
                className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant/30 rounded-lg text-body-sm font-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all h-10"
              />
            </div>
            <button className="px-4 py-2 bg-surface-container-low border border-outline-variant/30 rounded-lg text-body-sm font-body-sm hover:bg-surface-variant/50 transition-colors flex items-center gap-2 whitespace-nowrap h-10">
              <span className="material-symbols-outlined text-[18px]">filter_list</span>
              Filter
            </button>
          </div>
        </div>
        
        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant/20">
                <th className="p-4 text-label-md font-label-md text-on-surface-variant font-medium">Invoice #</th>
                <th className="p-4 text-label-md font-label-md text-on-surface-variant font-medium">Patient Name</th>
                <th className="p-4 text-label-md font-label-md text-on-surface-variant font-medium">Date Issued</th>
                <th className="p-4 text-label-md font-label-md text-on-surface-variant font-medium">Amount</th>
                <th className="p-4 text-label-md font-label-md text-on-surface-variant font-medium">Status</th>
                <th className="p-4 text-label-md font-label-md text-on-surface-variant font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10 text-body-sm font-body-sm">
              
              {/* Row 1: Paid */}
              <tr className="hover:bg-surface-container-low/50 transition-colors group">
                <td className="p-4 font-medium text-primary">INV-2024-089</td>
                <td className="p-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-xs">ER</div>
                  <span className="text-on-surface font-medium">Eleanor Rigby</span>
                </td>
                <td className="p-4 text-on-surface-variant">Oct 24, 2024</td>
                <td className="p-4 font-medium">$450.00</td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-[#E6F4EA] text-[#137333]">
                    Paid
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-outline hover:text-primary transition-colors rounded-lg hover:bg-surface-container-high" title="Download PDF">
                      <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                    </button>
                    <button className="p-2 text-outline hover:text-primary transition-colors rounded-lg hover:bg-surface-container-high" title="Print">
                      <span className="material-symbols-outlined text-[18px]">print</span>
                    </button>
                  </div>
                </td>
              </tr>
              
              {/* Row 2: Pending */}
              <tr className="hover:bg-surface-container-low/50 transition-colors group">
                <td className="p-4 font-medium text-primary">INV-2024-090</td>
                <td className="p-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-xs">JM</div>
                  <span className="text-on-surface font-medium">James McGill</span>
                </td>
                <td className="p-4 text-on-surface-variant">Oct 26, 2024</td>
                <td className="p-4 font-medium">$1,200.00</td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-[#FEF7E0] text-[#B06000]">
                    Pending
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-outline hover:text-primary transition-colors rounded-lg hover:bg-surface-container-high" title="Download PDF">
                      <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                    </button>
                    <button className="p-2 text-outline hover:text-primary transition-colors rounded-lg hover:bg-surface-container-high" title="Print">
                      <span className="material-symbols-outlined text-[18px]">print</span>
                    </button>
                  </div>
                </td>
              </tr>
              
              {/* Row 3: Overdue */}
              <tr className="hover:bg-error-container/10 transition-colors group bg-error-container/5">
                <td className="p-4 font-medium text-primary">INV-2024-075</td>
                <td className="p-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-bold text-xs">SW</div>
                  <span className="text-on-surface font-medium">Sarah Walker</span>
                </td>
                <td className="p-4 text-error font-medium">Sep 15, 2024</td>
                <td className="p-4 font-medium">$850.00</td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-[#FCE8E6] text-[#C5221F]">
                    Overdue
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-outline hover:text-primary transition-colors rounded-lg hover:bg-surface-container-high" title="Download PDF">
                      <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                    </button>
                    <button className="p-2 text-outline hover:text-primary transition-colors rounded-lg hover:bg-surface-container-high" title="Print">
                      <span className="material-symbols-outlined text-[18px]">print</span>
                    </button>
                  </div>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
        
        {/* Table Pagination */}
        <div className="p-4 border-t border-outline-variant/20 flex items-center justify-between bg-surface-container-lowest">
          <span className="text-label-md font-label-md text-on-surface-variant">Showing 1 to 3 of 42 entries</span>
          <div className="flex gap-1">
            <button className="p-2 border border-outline-variant/30 rounded-lg text-outline hover:bg-surface-container-low disabled:opacity-50" disabled>
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <button className="px-3 py-1 bg-primary text-on-primary rounded-lg text-label-md font-label-md">1</button>
            <button className="px-3 py-1 text-on-surface-variant hover:bg-surface-container-low rounded-lg text-label-md font-label-md">2</button>
            <button className="px-3 py-1 text-on-surface-variant hover:bg-surface-container-low rounded-lg text-label-md font-label-md">3</button>
            <button className="p-2 border border-outline-variant/30 rounded-lg text-outline hover:bg-surface-container-low">
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>
        
      </section>

    </div>
  );
};

export default AdminBilling;
