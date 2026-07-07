const PatientTreatments = () => {
  return (
    <div className="flex-1 overflow-y-auto px-container-padding py-stack-lg pb-32">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Page Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-headline-md font-headline-md text-on-background">Treatment History</h1>
            <p className="text-body-sm font-body-sm text-on-surface-variant">View your past procedures, diagnoses, and prescriptions.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-xl bg-surface-container border border-outline-variant/30 text-primary font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">download</span>
              Export Records
            </button>
          </div>
        </header>

        {/* Treatment History Module */}
        <section className="bg-surface rounded-2xl p-[24px] shadow-[0px_4px_20px_rgba(15,76,129,0.05)] border border-outline-variant/10 flex flex-col gap-stack-md">
          <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
            <h2 className="text-headline-sm font-headline-md text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary-container">history</span>
              Past Treatments
            </h2>
            <button className="text-primary hover:text-primary-container text-body-sm font-label-md flex items-center gap-1 transition-colors">
              Filter <span className="material-symbols-outlined text-[16px]">filter_list</span>
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-label-md font-label-md text-on-surface-variant border-b border-outline-variant/10">
                  <th className="py-4 pr-4 font-semibold uppercase tracking-wider">Date</th>
                  <th className="py-4 px-4 font-semibold uppercase tracking-wider">Doctor</th>
                  <th className="py-4 px-4 font-semibold uppercase tracking-wider">Treatment</th>
                  <th className="py-4 px-4 font-semibold uppercase tracking-wider">Diagnosis / Notes</th>
                  <th className="py-4 pl-4 font-semibold uppercase tracking-wider text-right">Prescription</th>
                </tr>
              </thead>
              <tbody className="text-body-sm font-body-sm divide-y divide-outline-variant/10">
                
                <tr className="hover:bg-surface-bright transition-colors group">
                  <td className="py-4 pr-4 text-on-background whitespace-nowrap">Oct 12, 2024</td>
                  <td className="py-4 px-4 text-on-surface flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center text-[10px] font-bold">EW</div>
                    Dr. E. Wells
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 bg-surface-container-high text-on-surface rounded-md font-medium">Root Canal Therapy</span>
                  </td>
                  <td className="py-4 px-4 text-on-surface-variant max-w-xs truncate" title="Irreversible pulpitis tooth #14. Procedure completed without complications.">
                    Irreversible pulpitis tooth #14. Procedure completed...
                  </td>
                  <td className="py-4 pl-4 text-right">
                    <button className="text-primary hover:text-primary-container flex items-center justify-end gap-1 w-full opacity-70 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-[18px]">prescriptions</span> Rx PDF
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-surface-bright transition-colors group">
                  <td className="py-4 pr-4 text-on-background whitespace-nowrap">Sep 05, 2024</td>
                  <td className="py-4 px-4 text-on-surface flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center text-[10px] font-bold">MS</div>
                    Dr. M. Smith
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 bg-surface-container-high text-on-surface rounded-md font-medium">Comprehensive Exam</span>
                  </td>
                  <td className="py-4 px-4 text-on-surface-variant max-w-xs truncate" title="Routine checkup. Deep decay noted on #14. Scheduled for RCT.">
                    Routine checkup. Deep decay noted on #14...
                  </td>
                  <td className="py-4 pl-4 text-right text-outline text-[12px] italic">
                    None
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
};

export default PatientTreatments;
