const PatientBilling = () => {
  return (
    <div className="flex-1 overflow-y-auto px-container-padding py-stack-lg pb-32">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Page Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-headline-md font-headline-md text-on-background">Billing & Invoices</h1>
            <p className="text-body-sm font-body-sm text-on-surface-variant">Manage your payments, view past receipts, and check your balance.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-xl bg-surface-container border border-outline-variant/30 text-primary font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">download</span>
              Export Invoices
            </button>
          </div>
        </header>

        {/* Billing Module */}
        <section className="bg-surface rounded-2xl p-[24px] shadow-[0px_4px_20px_rgba(15,76,129,0.05)] border border-outline-variant/10 flex flex-col gap-stack-md">
          <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
            <h2 className="text-headline-sm font-headline-md text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary-container">receipt_long</span>
              Invoices
            </h2>
            <div className="text-body-sm font-label-md bg-error-container text-on-error-container px-3 py-1 rounded-full flex items-center gap-2">
              Balance Due: $850.00
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Pending Invoice Card */}
            <div className="border border-outline-variant/30 rounded-xl p-4 flex flex-col gap-4 bg-surface-bright hover:shadow-sm transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-label-md font-label-md text-on-surface-variant mb-1">INV-2024-089</div>
                  <div className="text-headline-md font-headline-md text-on-background">$850.00</div>
                  <div className="text-body-sm font-body-sm text-on-surface-variant mt-1">Due: Nov 12, 2024</div>
                </div>
                <span className="px-3 py-1 bg-error-container/50 text-error rounded-full text-label-md font-label-md border border-error/20 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">pending</span> Pending
                </span>
              </div>
              
              <div className="flex gap-2 mt-auto pt-2 border-t border-outline-variant/10">
                <button className="flex-1 bg-primary text-on-primary rounded-lg py-2 text-label-md font-label-md hover:opacity-90 transition-opacity">
                  Pay Now
                </button>
                <button className="p-2 border border-outline-variant/30 text-on-surface rounded-lg hover:bg-surface-container transition-colors" title="Download PDF">
                  <span className="material-symbols-outlined text-[20px]">download</span>
                </button>
              </div>
            </div>

            {/* Paid Invoice Card */}
            <div className="border border-outline-variant/20 rounded-xl p-4 flex flex-col gap-4 bg-surface/50 opacity-80">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-label-md font-label-md text-on-surface-variant mb-1">INV-2024-042</div>
                  <div className="text-headline-md font-headline-md text-on-background line-through opacity-60">$150.00</div>
                  <div className="text-body-sm font-body-sm text-on-surface-variant mt-1">Paid: Sep 05, 2024</div>
                </div>
                <span className="px-3 py-1 bg-secondary-container/30 text-on-secondary-container rounded-full text-label-md font-label-md border border-secondary-container/50 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span> Paid
                </span>
              </div>
              
              <div className="flex gap-2 mt-auto pt-2 border-t border-outline-variant/10">
                <button className="w-full flex items-center justify-center gap-2 border border-outline-variant/30 text-on-surface rounded-lg py-2 text-label-md font-label-md hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined text-[18px]">receipt</span> View Receipt
                </button>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default PatientBilling;
