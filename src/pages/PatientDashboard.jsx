import { Link } from 'react-router-dom';

const PatientDashboard = () => {
  return (
    <div className="flex-1 overflow-y-auto px-container-padding py-stack-lg pb-32">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Welcome Section */}
        <div>
          <h2 className="text-headline-lg font-headline-lg text-primary mb-2">Good morning, Sarah.</h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">Here is a summary of your upcoming treatments and recent clinic activity.</p>
        </div>

        {/* Bento Grid Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Primary Feature: Upcoming Appointment (Span 8) */}
          <div className="lg:col-span-8 bg-surface-container-lowest rounded-2xl shadow-[0px_4px_20px_rgba(15,76,129,0.08)] p-8 flex flex-col relative overflow-hidden border border-surface-container-highest">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
            
            <div className="flex items-start justify-between mb-8 relative z-10">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-label-md font-label-md mb-4">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  In 3 Days
                </div>
                <h3 className="text-headline-md font-headline-md text-on-surface mb-1">Routine Cleaning & Exam</h3>
                <p className="text-body-md font-body-md text-on-surface-variant">Dr. Emily Chen • Suite 204</p>
              </div>
              
              <div className="bg-surface-container rounded-xl p-4 text-center min-w-[100px] border border-outline-variant/20">
                <span className="block text-label-md font-label-md text-on-surface-variant uppercase tracking-wide mb-1">Oct</span>
                <span className="block text-headline-lg font-headline-lg text-primary">24</span>
                <span className="block text-body-sm font-body-sm text-on-surface-variant mt-1">9:00 AM</span>
              </div>
            </div>
            
            <div className="mt-auto flex gap-4 relative z-10">
              <button className="bg-primary text-on-primary px-6 py-3 rounded-xl text-body-md font-label-md font-semibold hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm">
                Prepare for Visit
              </button>
              <button className="bg-surface text-primary border border-primary/20 px-6 py-3 rounded-xl text-body-md font-label-md font-semibold hover:bg-surface-container transition-colors">
                Reschedule
              </button>
            </div>
          </div>

          {/* Metrics Stack (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-gutter">
            {/* Metric 1: Pending Bills */}
            <div className="bg-surface-container-lowest rounded-2xl shadow-[0px_4px_20px_rgba(15,76,129,0.08)] p-6 flex items-center justify-between border-l-4 border-error">
              <div>
                <p className="text-body-sm font-label-md text-on-surface-variant uppercase tracking-wider mb-1">Pending Balance</p>
                <h4 className="text-headline-md font-headline-md text-on-surface">$125.00</h4>
              </div>
              <div className="w-12 h-12 rounded-full bg-error-container text-on-error-container flex items-center justify-center">
                <span className="material-symbols-outlined">receipt_long</span>
              </div>
            </div>

            {/* Metric 2: Treatments */}
            <div className="bg-surface-container-lowest rounded-2xl shadow-[0px_4px_20px_rgba(15,76,129,0.08)] p-6 flex items-center justify-between border-l-4 border-secondary">
              <div>
                <p className="text-body-sm font-label-md text-on-surface-variant uppercase tracking-wider mb-1">Treatment Plan</p>
                <h4 className="text-headline-md font-headline-md text-on-surface">60% Complete</h4>
              </div>
              <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined">assignment_turned_in</span>
              </div>
            </div>

            {/* Metric 3: Prescriptions */}
            <div className="bg-surface-container-lowest rounded-2xl shadow-[0px_4px_20px_rgba(15,76,129,0.08)] p-6 flex items-center justify-between border-l-4 border-tertiary">
              <div>
                <p className="text-body-sm font-label-md text-on-surface-variant uppercase tracking-wider mb-1">Active Prescriptions</p>
                <h4 className="text-headline-md font-headline-md text-on-surface">1 Refill Ready</h4>
              </div>
              <div className="w-12 h-12 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined">medication</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Column: Quick Actions & Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-container-padding">
          {/* Quick Actions Glassmorphism Cards */}
          <div>
            <h3 className="text-headline-sm font-headline-sm text-primary mb-6">Quick Actions</h3>
            <div className="flex flex-col gap-4">
              <Link to="/book" className="group relative bg-surface-container-lowest rounded-2xl shadow-[0px_4px_20px_rgba(15,76,129,0.08)] p-5 flex items-center gap-4 border border-outline-variant/10 hover:border-primary/30 transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">calendar_add_on</span>
                </div>
                <div className="flex-1 relative z-10">
                  <h4 className="text-body-lg font-headline-md text-on-surface mb-1">Book New Appointment</h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">Schedule a cleaning, consultation, or procedure.</p>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">chevron_right</span>
              </Link>
              
              <Link to="/patient/treatments" className="group relative bg-surface-container-lowest rounded-2xl shadow-[0px_4px_20px_rgba(15,76,129,0.08)] p-5 flex items-center gap-4 border border-outline-variant/10 hover:border-secondary/30 transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-12 h-12 rounded-xl bg-surface-container text-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">pill</span>
                </div>
                <div className="flex-1 relative z-10">
                  <h4 className="text-body-lg font-headline-md text-on-surface mb-1">Request Prescription Refill</h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">Quickly request renewals for current medications.</p>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors">chevron_right</span>
              </Link>
              
              <Link to="/patient/settings" className="group relative bg-surface-container-lowest rounded-2xl shadow-[0px_4px_20px_rgba(15,76,129,0.08)] p-5 flex items-center gap-4 border border-outline-variant/10 hover:border-tertiary/30 transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-12 h-12 rounded-xl bg-surface-container text-tertiary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">chat</span>
                </div>
                <div className="flex-1 relative z-10">
                  <h4 className="text-body-lg font-headline-md text-on-surface mb-1">Message Care Team</h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">Directly contact your doctor or clinical staff securely.</p>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-tertiary transition-colors">chevron_right</span>
              </Link>
            </div>
          </div>

          {/* Recent Activity Timeline */}
          <div>
            <h3 className="text-headline-sm font-headline-sm text-primary mb-6">Recent Activity</h3>
            <div className="bg-surface-container-lowest rounded-2xl shadow-[0px_4px_20px_rgba(15,76,129,0.08)] p-6 border border-outline-variant/10">
              <div className="relative pl-8 space-y-8 before:absolute before:inset-y-0 before:left-[19px] before:w-[2px] before:bg-surface-container-highest">
                
                {/* Timeline Item */}
                <div className="relative">
                  <div className="absolute -left-10 w-6 h-6 rounded-full bg-primary-container border-4 border-surface-container-lowest flex items-center justify-center z-10">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-label-md font-label-md text-primary mb-1">Today, 10:30 AM</p>
                  <div className="bg-surface-container-low rounded-xl p-4 mt-2">
                    <h4 className="text-body-md font-headline-md text-on-surface">Appointment Confirmed</h4>
                    <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">You confirmed your upcoming visit for Oct 24th.</p>
                  </div>
                </div>

                {/* Timeline Item */}
                <div className="relative">
                  <div className="absolute -left-10 w-6 h-6 rounded-full bg-surface-container border-4 border-surface-container-lowest flex items-center justify-center z-10">
                    <div className="w-1.5 h-1.5 bg-outline rounded-full"></div>
                  </div>
                  <p className="text-label-md font-label-md text-on-surface-variant mb-1">Oct 15, 2024</p>
                  <div className="bg-surface-container-low rounded-xl p-4 mt-2">
                    <h4 className="text-body-md font-headline-md text-on-surface">Invoice Generated</h4>
                    <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">A new statement for $125.00 has been added to your account.</p>
                  </div>
                </div>

                {/* Timeline Item */}
                <div className="relative">
                  <div className="absolute -left-10 w-6 h-6 rounded-full bg-surface-container border-4 border-surface-container-lowest flex items-center justify-center z-10">
                    <div className="w-1.5 h-1.5 bg-outline rounded-full"></div>
                  </div>
                  <p className="text-label-md font-label-md text-on-surface-variant mb-1">Oct 02, 2024</p>
                  <div className="bg-surface-container-low rounded-xl p-4 mt-2 flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-outline-variant/20">
                      <img className="w-full h-full object-cover" alt="Treatment thumbnail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC012I-Z6Php3pbmEwx1bmzt1YOwXYxojFp3bS8HW6s3WzPuSISCHUMGqd5k20sjloZefq1oYueqNL9ukvgNCYHFcs7mXVSH4SE3A342nl99_5Qq7dTLLq7pyWI0Ikttu2DujEo6I58uJZO51S0VVtny1ru6oLfWLdMb_EpCTkshLqEBPJcbut1c7Rt4tB5yWRwrz9_Wz89MX_EohANJM563CN_Zh9GjtVR-yXsgz84Jq_h8QwRe9E1G-mrrEdqC45ylcBch0Rh7g"/>
                    </div>
                    <div>
                      <h4 className="text-body-md font-headline-md text-on-surface">Treatment Completed</h4>
                      <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">Phase 1 of deep cleaning finished successfully.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
