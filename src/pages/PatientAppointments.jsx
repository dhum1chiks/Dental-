import { Link } from 'react-router-dom';

const PatientAppointments = () => {
  return (
    <div className="flex-1 overflow-y-auto px-container-padding py-stack-lg pb-32">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Page Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-headline-md font-headline-md text-on-background">Appointments</h1>
            <p className="text-body-sm font-body-sm text-on-surface-variant">Manage your upcoming visits and view past appointments.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/book" className="px-4 py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:bg-primary/90 transition-colors flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-[18px]">add</span>
              Book New Appointment
            </Link>
          </div>
        </header>

        {/* Appointments List */}
        <section className="bg-surface rounded-2xl p-[24px] shadow-[0px_4px_20px_rgba(15,76,129,0.05)] border border-outline-variant/10 flex flex-col gap-stack-md">
          <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
            <h2 className="text-headline-sm font-headline-md text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container">calendar_today</span>
              Upcoming Appointments
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            
            {/* Appointment Card */}
            <div className="border border-outline-variant/30 rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-surface-bright hover:shadow-sm transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-surface-container rounded-xl p-4 text-center min-w-[80px] border border-outline-variant/20">
                  <span className="block text-label-md font-label-md text-on-surface-variant uppercase tracking-wide mb-1">Oct</span>
                  <span className="block text-headline-lg font-headline-lg text-primary">24</span>
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-label-md font-label-md mb-2">
                    <span className="material-symbols-outlined text-[14px]">schedule</span>
                    In 3 Days
                  </div>
                  <h3 className="text-headline-sm font-headline-md text-on-surface mb-1">Routine Cleaning & Exam</h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">Dr. Emily Chen • Suite 204 • 9:00 AM</p>
                </div>
              </div>
              
              <div className="flex gap-2 w-full md:w-auto mt-4 md:mt-0">
                <button className="flex-1 md:flex-none bg-surface border border-outline-variant/30 text-on-surface px-4 py-2 rounded-lg text-label-md font-label-md hover:bg-surface-container transition-colors">
                  Reschedule
                </button>
                <button className="flex-1 md:flex-none border border-error/30 text-error px-4 py-2 rounded-lg text-label-md font-label-md hover:bg-error-container transition-colors">
                  Cancel
                </button>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default PatientAppointments;
