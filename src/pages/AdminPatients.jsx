const AdminPatients = () => {
  return (
    <div className="flex-1 p-container-padding flex flex-col min-h-screen bg-background">
      
      {/* Header Section */}
      <header className="flex justify-between items-center mb-stack-lg">
        <div>
          <h1 className="text-headline-lg font-headline-lg text-on-surface">Patient Management</h1>
          <p className="text-body-md font-body-md text-on-surface-variant mt-1">View and manage all registered patients.</p>
        </div>
        <button className="bg-primary text-on-primary rounded-xl py-3 px-6 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-sm">
          <span className="material-symbols-outlined">person_add</span>
          <span className="text-label-md font-label-md">Add New Patient</span>
        </button>
      </header>

      {/* Filters & Search Toolbar */}
      <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0px_4px_20px_rgba(15,76,129,0.12)] mb-stack-md flex flex-wrap gap-4 items-center justify-between border border-outline-variant/10">
        {/* Search */}
        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-on-surface-variant">search</span>
          </div>
          <input 
            type="text" 
            placeholder="Search by name, ID, or phone..." 
            className="block w-full pl-10 pr-3 py-3 border border-outline-variant rounded-xl bg-background text-body-md font-body-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all h-12"
          />
        </div>
        
        {/* Filters */}
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-full bg-primary-container text-on-primary-container text-label-md font-label-md hover:opacity-90 transition-opacity">
            All
          </button>
          <button className="px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-label-md font-label-md hover:bg-surface-variant transition-colors border border-outline-variant/20">
            Active
          </button>
          <button className="px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-label-md font-label-md hover:bg-surface-variant transition-colors border border-outline-variant/20">
            New
          </button>
          <button className="px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-label-md font-label-md hover:bg-surface-variant transition-colors border border-outline-variant/20">
            Inactive
          </button>
        </div>
      </div>

      {/* Data Table Card */}
      <div className="bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(15,76,129,0.12)] overflow-hidden flex-1 flex flex-col border border-outline-variant/10 min-h-[400px]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-low border-b border-outline-variant/20">
              <tr>
                <th className="py-4 px-6 text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Patient Name</th>
                <th className="py-4 px-6 text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Patient ID</th>
                <th className="py-4 px-6 text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Last Visit</th>
                <th className="py-4 px-6 text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Next Appt</th>
                <th className="py-4 px-6 text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Contact</th>
                <th className="py-4 px-6 text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Status</th>
                <th className="py-4 px-6 text-label-md font-label-md text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              
              {/* Row 1 */}
              <tr className="hover:bg-surface-container-low/50 transition-colors group">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <img className="w-10 h-10 rounded-full object-cover bg-surface-variant" alt="Patient Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAubesB2sXb2rTV12dwAjY8RFb3Dkw3vDDwoHlY0FOd3_9WF86AliHetNLFmSM8JDDQZy0999FoD47Xd5D0Q_ZB582lXx_iZCeLCzl3agepzSOGixAEYoIv6o-PUVefYM4SOoQFVbFXfXTHmaeQGY08eaoKRROwd3sz7xBMIXJR6F92F5aT2w0wQSP0cJ27I7oa5dn_1gwCNXxcxUhEv5Kqi9hqitaERMRje3tW4Mulz3v0sgaI0cuXzLLaoeQbpeHaZp3qZWlxIQ"/>
                    <div>
                      <div className="text-body-md font-headline-md text-on-surface">Sarah Jenkins</div>
                      <div className="text-label-md font-label-md text-on-surface-variant">DOB: 05/12/1990</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-body-sm font-body-sm text-on-surface-variant">PT-2023-0891</td>
                <td className="py-4 px-6 text-body-sm font-body-sm text-on-surface">Oct 12, 2023</td>
                <td className="py-4 px-6">
                  <span className="text-body-sm font-headline-md text-primary">Nov 15, 2023</span>
                  <div className="text-label-md font-label-md text-on-surface-variant">10:00 AM</div>
                </td>
                <td className="py-4 px-6 text-body-sm font-body-sm text-on-surface-variant">
                  <div>(555) 123-4567</div>
                  <div>sarah.j@email.com</div>
                </td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#e6f4ea] text-[#137333]">
                    Active
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container-high opacity-0 group-hover:opacity-100 focus:opacity-100">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
              
              {/* Row 2 */}
              <tr className="hover:bg-surface-container-low/50 transition-colors group">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <img className="w-10 h-10 rounded-full object-cover bg-surface-variant" alt="Patient Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8tUK1JtyZPAF8Wrj6m2xsMBv4zUrsNL0f2g1ZSX438SmIbhLyYGKhxG_cCP08NOZW6FGlp6K3PUYyjBmmKtmNpUVmB8NIOXpIySXuz1OKwNCPKUgSwwzjbZ_4Z-IuUVqF48V5i6CAd5HM3bwm-k3JSwd3BdfWPzMYT6itJynhxp97_-fQbzk5pDTO0X7vhgBA3x2pjD89qj4VJMAfuRNgryr2alnHFh-PSFZ5pTkynvngyIChH0nt13OtMzXupyjPzEBBOtNSaA"/>
                    <div>
                      <div className="text-body-md font-headline-md text-on-surface">Michael Chen</div>
                      <div className="text-label-md font-label-md text-on-surface-variant">DOB: 11/04/1975</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-body-sm font-body-sm text-on-surface-variant">PT-2023-1042</td>
                <td className="py-4 px-6 text-body-sm font-body-sm text-on-surface">Sep 28, 2023</td>
                <td className="py-4 px-6">
                  <span className="text-body-sm font-body-sm text-on-surface-variant">Not Scheduled</span>
                </td>
                <td className="py-4 px-6 text-body-sm font-body-sm text-on-surface-variant">
                  <div>(555) 987-6543</div>
                  <div>m.chen@email.com</div>
                </td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#e8f0fe] text-[#1967d2]">
                    New
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container-high opacity-0 group-hover:opacity-100 focus:opacity-100">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
};

export default AdminPatients;
