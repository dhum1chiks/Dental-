import { Link, Outlet, useLocation } from 'react-router-dom';

const AdminLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="bg-background text-on-surface font-body-md flex h-screen overflow-hidden">
      {/* SideNavBar */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-64 flex-col py-stack-lg border-r border-outline-variant/20 bg-surface-container-low shadow-md z-50">
        
        {/* Brand Header */}
        <div className="px-container-padding mb-stack-lg flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-on-primary shadow-sm">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dentistry</span>
          </div>
          <div>
            <h1 className="text-headline-sm font-headline-md text-primary font-bold">DentalExpert</h1>
          </div>
        </div>

        {/* Admin Profile Summary */}
        <div className="px-container-padding mb-stack-lg flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container font-bold shadow-sm">
            AD
          </div>
          <div>
            <p className="text-body-sm font-body-sm font-semibold text-on-surface">DentalExpert Admin</p>
            <p className="text-label-md font-label-md text-on-surface-variant">Clinical Director</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto space-y-1">
          <Link 
            to="/admin" 
            className={`flex items-center gap-3 rounded-xl px-4 py-3 mx-2 transition-all ${currentPath === '/admin' || currentPath === '/admin/' ? 'bg-primary-container text-on-primary-container scale-[0.98]' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
          >
            <span className={`material-symbols-outlined ${currentPath === '/admin' ? 'icon-fill' : ''}`}>dashboard</span>
            <span className="text-label-md font-label-md">Dashboard</span>
          </Link>
          
          <Link 
            to="/admin/patients" 
            className={`flex items-center gap-3 rounded-xl px-4 py-3 mx-2 transition-all ${currentPath.includes('/patients') ? 'bg-primary-container text-on-primary-container scale-[0.98]' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
          >
            <span className="material-symbols-outlined">group</span>
            <span className="text-label-md font-label-md">Patients</span>
          </Link>
          
          <Link 
            to="/admin/appointments" 
            className={`flex items-center gap-3 rounded-xl px-4 py-3 mx-2 transition-all ${currentPath.includes('/appointments') ? 'bg-primary-container text-on-primary-container scale-[0.98]' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
          >
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="text-label-md font-label-md">Appointments</span>
          </Link>
          
          <Link 
            to="/admin/billing" 
            className={`flex items-center gap-3 rounded-xl px-4 py-3 mx-2 transition-all ${currentPath.includes('/billing') ? 'bg-primary-container text-on-primary-container scale-[0.98]' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
          >
            <span className="material-symbols-outlined">payments</span>
            <span className="text-label-md font-label-md">Billing</span>
          </Link>

          <Link 
            to="/admin/settings" 
            className={`flex items-center gap-3 rounded-xl px-4 py-3 mx-2 transition-all ${currentPath.includes('/settings') ? 'bg-primary-container text-on-primary-container scale-[0.98]' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="text-label-md font-label-md">Settings</span>
          </Link>
        </div>

      </nav>

      {/* Main Canvas */}
      <main className="flex-1 md:ml-64 h-full relative flex flex-col">
        {/* Top App Bar */}
        <header className="h-[72px] flex-shrink-0 flex items-center justify-between px-container-padding bg-surface/80 backdrop-blur-md sticky top-0 z-40 border-b border-outline-variant/10">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-on-surface-variant p-2 -ml-2 rounded-lg hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined">menu</span>
            </button>
            {/* Contextual Title based on route can be added here if desired */}
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input type="text" placeholder="Global Search..." className="pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant/30 rounded-full text-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-64 transition-all" />
            </div>
            <button className="relative p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-container-highest">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
            </button>
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

export default AdminLayout;
