const AdminAppointments = () => {
  return (
    <div className="flex-1 p-container-padding flex flex-col overflow-y-auto">
      
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-stack-lg">
        <div>
          <h2 className="text-headline-lg font-headline-lg text-primary mb-1">Appointment Management</h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant">Review and manage daily clinical schedules.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
            <input 
              type="text" 
              placeholder="Search patient or doctor..." 
              className="pl-10 pr-4 py-3 h-[48px] bg-surface-container-lowest border-none rounded-[16px] shadow-[0px_4px_20px_rgba(15,76,129,0.05)] focus:ring-2 focus:ring-primary w-64 text-body-sm font-body-sm placeholder:text-outline transition-all"
            />
          </div>
        </div>
      </header>

      {/* Controls Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-stack-md bg-surface-container-lowest p-4 rounded-[24px] shadow-[0px_4px_20px_rgba(15,76,129,0.05)]">
        {/* View Toggles */}
        <div className="flex bg-surface-container-low p-1 rounded-[16px]">
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest text-primary rounded-[12px] shadow-sm text-label-md font-label-md transition-all">
            <span className="material-symbols-outlined text-[18px]">list</span>
            Table
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-on-surface-variant hover:text-primary rounded-[12px] text-label-md font-label-md transition-all">
            <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            Calendar
          </button>
        </div>
        
        {/* Filters */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 h-[48px] rounded-[16px] border border-outline-variant/30 hover:border-primary/50 transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-primary text-[18px]">event</span>
            <span className="text-label-md font-label-md text-on-surface">Today, Oct 24</span>
            <span className="material-symbols-outlined text-outline text-[18px]">arrow_drop_down</span>
          </div>
          <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 h-[48px] rounded-[16px] border border-outline-variant/30 hover:border-primary/50 transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-primary text-[18px]">stethoscope</span>
            <span className="text-label-md font-label-md text-on-surface">All Doctors</span>
            <span className="material-symbols-outlined text-outline text-[18px]">arrow_drop_down</span>
          </div>
        </div>
      </div>

      {/* Data Canvas (Table View) */}
      <div className="bg-surface-container-lowest rounded-[24px] shadow-[0px_4px_20px_rgba(15,76,129,0.05)] overflow-hidden flex-1 border border-outline-variant/10 min-h-[400px]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant/20">
                <th className="py-4 px-6 text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Patient</th>
                <th className="py-4 px-6 text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Date & Time</th>
                <th className="py-4 px-6 text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Doctor</th>
                <th className="py-4 px-6 text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Service</th>
                <th className="py-4 px-6 text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Status</th>
                <th className="py-4 px-6 text-label-md font-label-md text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              
              {/* Row 1: Pending */}
              <tr className="hover:bg-surface-container-low/50 transition-colors group">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-surface-dim flex items-center justify-center text-primary font-bold text-body-sm">
                      JD
                    </div>
                    <div>
                      <p className="text-body-md font-body-md font-semibold text-on-surface">John Doe</p>
                      <p className="text-label-md font-label-md text-on-surface-variant">ID: #PT-8472</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <p className="text-body-sm font-body-sm text-on-surface font-semibold">Oct 24, 2024</p>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">09:00 AM - 10:00 AM</p>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <img className="w-8 h-8 rounded-full object-cover border border-outline-variant/30" alt="Dr. Sarah Jenkins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBigrYpBOdfSmWuJPsIkqWvL7SwVEetCc3lHTZJNOZlBzaWEl2mW_QJcdBUw2onvLPcU50CvGHlvV2umLb2PGyj28F_BCfl78LuD8mqcJgDeUTizQPG9h2B4S6_dTVPBiho6qPuoPq-rXoYoBVO8ATNjcHhjcVKS2Fv9vxn0niGsSW27I3yMsZrzMcs9v22neThropIzHk4lZaHVw9-L97HT3pBofKiu-F5E136tDFpmxZWV5jZlew2ZtcCtrJ5JQfQzjsSZhF00Q"/>
                    <span className="text-body-sm font-body-sm text-on-surface">Dr. Sarah Jenkins</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-body-sm font-body-sm text-on-surface">
                  Initial Consultation
                </td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-surface-container-high text-primary uppercase tracking-wide">
                    Pending
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-8 h-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-on-primary flex items-center justify-center transition-colors" title="Approve">
                      <span className="material-symbols-outlined text-[18px]">check</span>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant hover:bg-surface-tint hover:text-on-primary flex items-center justify-center transition-colors" title="Reschedule">
                      <span className="material-symbols-outlined text-[18px]">edit_calendar</span>
                    </button>
                  </div>
                </td>
              </tr>
              
              {/* Row 2: Approved */}
              <tr className="hover:bg-surface-container-low/50 transition-colors group">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <img className="w-10 h-10 rounded-full object-cover border border-outline-variant/30" alt="Patient" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6Z3jDryinejemzppg4amOcEXihBpWbc1sOEymhqEXrdG2SzyAbIpfZNXe_0UTSiQjtGceD1v0UnOVPaFjnPxetaAO22n_DmtzT-VqetLjGZgulVT6dvSyDwf1_iyP9KAV-zPzL5reFePz2CizA-1h3Pj3hsy50Z7bnalmvXxxp4jwD4Q5Zl8JbEfAU9ikrICbWgjwi-5uG4TxAgW1lK1LOE633zJqiROz9IiZCvpxleGSjmug80LqN_0BjFda9K0NBMkUYcgeuA"/>
                    <div>
                      <p className="text-body-md font-body-md font-semibold text-on-surface">Michael Clark</p>
                      <p className="text-label-md font-label-md text-on-surface-variant">ID: #PT-8473</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <p className="text-body-sm font-body-sm text-on-surface font-semibold">Oct 24, 2024</p>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">10:30 AM - 11:30 AM</p>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-body-sm">
                      MC
                    </div>
                    <span className="text-body-sm font-body-sm text-on-surface">Dr. Michael Chen</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-body-sm font-body-sm text-on-surface">
                  Braces Adjustment
                </td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-secondary/10 text-secondary uppercase tracking-wide">
                    Confirmed
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant hover:bg-surface-tint hover:text-on-primary flex items-center justify-center transition-colors" title="Edit">
                      <span className="material-symbols-outlined text-[18px]">edit</span>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-error/10 text-error hover:bg-error hover:text-on-error flex items-center justify-center transition-colors" title="Cancel">
                      <span className="material-symbols-outlined text-[18px]">close</span>
                    </button>
                  </div>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminAppointments;
