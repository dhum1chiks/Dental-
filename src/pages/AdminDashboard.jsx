const AdminDashboard = () => {
  return (
    <div className="flex-1 overflow-y-auto p-container-padding">
      <div className="max-w-7xl mx-auto space-y-stack-lg">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-headline-md font-headline-md text-on-surface">Overview</h1>
          <p className="text-body-sm font-body-sm text-on-surface-variant">Welcome back, Admin</p>
        </div>

        {/* Analytics Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          
          {/* KPI Card 1: Total Patients */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_4px_20px_rgba(15,76,129,0.05)] border border-surface-container-low">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined">patient_list</span>
              </div>
              <span className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded-full text-[10px] font-bold tracking-wide">+12%</span>
            </div>
            <div>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-1">Total Patients</p>
              <h3 className="text-headline-lg font-headline-lg text-on-surface">1,240</h3>
            </div>
          </div>
          
          {/* KPI Card 2: Revenue */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_4px_20px_rgba(15,76,129,0.05)] border border-surface-container-low">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">account_balance_wallet</span>
              </div>
            </div>
            <div>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-1">Monthly Revenue</p>
              <h3 className="text-headline-lg font-headline-lg text-on-surface">$42,500</h3>
            </div>
          </div>
          
          {/* KPI Card 3: Appointments Today */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_4px_20px_rgba(15,76,129,0.05)] border border-surface-container-low">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined">event</span>
              </div>
            </div>
            <div>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-1">Appointments Today</p>
              <h3 className="text-headline-lg font-headline-lg text-on-surface">18</h3>
            </div>
          </div>
          
        </section>

        {/* Charts & Activity Split */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          
          {/* Charts Area (Takes 2 columns) */}
          <div className="lg:col-span-2 space-y-gutter">
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_4px_20px_rgba(15,76,129,0.05)] border border-surface-container-low h-80 flex flex-col">
              <h3 className="text-headline-md font-headline-md text-on-surface mb-4">Monthly Revenue Trend</h3>
              {/* Faux Chart Container */}
              <div className="flex-1 bg-surface-container-low rounded-lg border border-outline-variant/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/20 to-transparent"></div>
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0,80 Q20,70 40,50 T80,30 T100,10" fill="none" stroke="#0f4c81" strokeWidth="2"></path>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Recent Activity Feed (Takes 1 column) */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_4px_20px_rgba(15,76,129,0.05)] border border-surface-container-low h-80 overflow-y-auto">
            <h3 className="text-headline-md font-headline-md text-on-surface mb-4">Recent Activity</h3>
            <div className="space-y-4">
              
              <div className="flex gap-3 items-start border-b border-outline-variant/10 pb-3">
                <div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[16px]">person_add</span>
                </div>
                <div>
                  <p className="text-body-sm font-body-sm text-on-surface leading-tight">New patient Sarah Jenkins registered</p>
                  <span className="text-label-md font-label-md text-on-surface-variant text-[10px]">10 mins ago</span>
                </div>
              </div>
              
              <div className="flex gap-3 items-start border-b border-outline-variant/10 pb-3">
                <div className="w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[16px]">dentistry</span>
                </div>
                <div>
                  <p className="text-body-sm font-body-sm text-on-surface leading-tight">Dr. Wells completed Root Canal for Patient #1024</p>
                  <span className="text-label-md font-label-md text-on-surface-variant text-[10px]">1 hour ago</span>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[16px]">receipt_long</span>
                </div>
                <div>
                  <p className="text-body-sm font-body-sm text-on-surface leading-tight">Invoice #INV-2024-090 paid</p>
                  <span className="text-label-md font-label-md text-on-surface-variant text-[10px]">2 hours ago</span>
                </div>
              </div>
              
            </div>
          </div>
          
        </section>

      </div>
    </div>
  );
};

export default AdminDashboard;
