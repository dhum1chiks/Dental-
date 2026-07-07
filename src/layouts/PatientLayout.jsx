import { Link, Outlet, useLocation } from 'react-router-dom';

const PatientLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="bg-background text-on-surface font-body-md flex h-screen overflow-hidden">
      {/* SideNavBar */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 h-full w-64 bg-surface-container-low shadow-md py-stack-lg border-r border-outline-variant/20 z-20">
        {/* Header / Brand */}
        <div className="px-6 mb-8 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant/30 flex-shrink-0 bg-surface-container-highest flex items-center justify-center text-primary font-bold">
              SJ
            </div>
            <div>
              <h2 className="text-headline-sm font-headline-md text-primary truncate" title="Sarah Jenkins">Sarah Jenkins</h2>
              <p className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Patient</p>
            </div>
          </div>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex-1 flex flex-col gap-2">
          <Link 
            to="/patient"
            className={`flex items-center gap-3 rounded-xl px-4 py-3 mx-2 transition-all ${currentPath === '/patient' || currentPath === '/patient/' ? 'bg-primary-container text-on-primary-container scale-[0.98]' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
          >
            <span className={`material-symbols-outlined ${currentPath === '/patient' ? 'icon-fill' : ''}`}>dashboard</span>
            <span className="text-label-md font-label-md">Dashboard</span>
          </Link>
          
          <Link 
            to="/patient/appointments"
            className={`flex items-center gap-3 rounded-xl px-4 py-3 mx-2 transition-all ${currentPath.includes('/appointments') ? 'bg-primary-container text-on-primary-container scale-[0.98]' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
          >
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="text-label-md font-label-md">Appointments</span>
          </Link>
          
          <Link 
            to="/patient/treatments"
            className={`flex items-center gap-3 rounded-xl px-4 py-3 mx-2 transition-all ${currentPath.includes('/treatments') ? 'bg-primary-container text-on-primary-container scale-[0.98]' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
          >
            <span className="material-symbols-outlined">medical_services</span>
            <span className="text-label-md font-label-md">Treatments</span>
          </Link>
          
          <Link 
            to="/patient/billing"
            className={`flex items-center gap-3 rounded-xl px-4 py-3 mx-2 transition-all ${currentPath.includes('/billing') ? 'bg-primary-container text-on-primary-container scale-[0.98]' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
          >
            <span className="material-symbols-outlined">payments</span>
            <span className="text-label-md font-label-md">Billing</span>
          </Link>
          
          <Link 
            to="/patient/settings"
            className={`flex items-center gap-3 rounded-xl px-4 py-3 mx-2 transition-all ${currentPath.includes('/settings') ? 'bg-primary-container text-on-primary-container scale-[0.98]' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="text-label-md font-label-md">Settings</span>
          </Link>
        </nav>
        
        {/* CTA */}
        <div className="mt-auto px-4 pt-4">
          <Link to="/book" className="w-full flex justify-center items-center gap-2 bg-primary text-on-primary py-3 px-4 rounded-2xl hover:bg-tertiary-container transition-colors shadow-sm text-label-md font-label-md">
            <span className="material-symbols-outlined text-[18px]">add</span>
            New Appointment
          </Link>
        </div>
      </aside>

      {/* Main Canvas */}
      <main className="flex-1 flex flex-col md:ml-64 h-full relative">
        {/* Top App Bar */}
        <header className="h-20 flex items-center justify-between px-container-padding bg-surface/90 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-primary p-2 -ml-2 rounded-lg hover:bg-surface-container-highest transition-colors">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h1 className="text-headline-md font-headline-md text-on-surface hidden sm:block">Patient Portal</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-container-highest">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
            </button>
            
            <div className="flex items-center gap-3 pl-4 border-l border-outline-variant/30">
              <div className="text-right hidden sm:block">
                <p className="text-label-md font-label-md text-on-surface">Sarah Jenkins</p>
                <p className="text-body-sm font-body-sm text-on-surface-variant">Patient</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center text-body-lg font-headline-md">
                SJ
              </div>
            </div>
            
            <Link to="/" className="text-on-surface-variant hover:text-primary transition-colors p-2" title="Logout">
              <span className="material-symbols-outlined">logout</span>
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <Outlet />
      </main>
    </div>
  );
};

export default PatientLayout;
