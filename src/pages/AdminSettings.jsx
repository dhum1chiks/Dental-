import { useTheme } from '../context/ThemeContext';

const AdminSettings = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex-1 overflow-y-auto px-container-padding py-stack-lg pb-32">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Page Header */}
        <header className="flex justify-between items-end">
          <div>
            <h1 className="text-headline-md font-headline-md text-on-background">System Settings</h1>
            <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">Manage global preferences, staff, and system integrations.</p>
          </div>
          <button type="button" className="bg-primary text-on-primary px-6 py-2 rounded-xl font-label-md text-label-md shadow-sm hover:opacity-90 transition-opacity">
            Save All Changes
          </button>
        </header>

        {/* Settings Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column: Navigation/Sections (Visual Only for now) */}
          <div className="lg:col-span-1 space-y-2">
            <button className="w-full text-left px-4 py-3 rounded-xl bg-primary-container text-on-primary-container font-label-md text-label-md font-semibold transition-colors">
              General & Display
            </button>
            <button className="w-full text-left px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high font-label-md text-label-md transition-colors">
              Clinic Profile
            </button>
            <button className="w-full text-left px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high font-label-md text-label-md transition-colors">
              Staff Management
            </button>
            <button className="w-full text-left px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high font-label-md text-label-md transition-colors">
              Billing Integrations
            </button>
          </div>

          {/* Right Column: Forms */}
          <div className="lg:col-span-2 space-y-6">
            
            <section className="bg-surface rounded-2xl p-[24px] shadow-[0px_4px_20px_rgba(15,76,129,0.05)] border border-outline-variant/10">
              <h2 className="text-title-lg font-headline-md text-primary mb-6">Display Preferences</h2>
              
              <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl border border-outline-variant/20 mb-4">
                <div>
                  <h3 className="font-label-md text-on-surface">Global Dark Mode</h3>
                  <p className="text-body-sm text-on-surface-variant mt-1">Switch the entire admin dashboard between light and dark themes.</p>
                </div>
                <button 
                  type="button" 
                  onClick={toggleTheme}
                  className="w-14 h-8 flex items-center bg-outline-variant rounded-full p-1 cursor-pointer transition-colors"
                  style={{ backgroundColor: theme === 'dark' ? 'var(--color-primary)' : 'var(--color-outline-variant)' }}
                >
                  <div 
                    className="bg-white w-6 h-6 rounded-full shadow-md transform transition-transform"
                    style={{ transform: theme === 'dark' ? 'translateX(24px)' : 'translateX(0)' }}
                  ></div>
                </button>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-label-md font-label-md text-on-surface-variant">Timezone</label>
                <select className="h-12 rounded-lg bg-surface-container-low border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary px-4 text-body-md text-on-surface">
                  <option>Pacific Time (PT)</option>
                  <option>Eastern Time (ET)</option>
                  <option>Central European Time (CET)</option>
                </select>
              </div>
            </section>

            <section className="bg-surface rounded-2xl p-[24px] shadow-[0px_4px_20px_rgba(15,76,129,0.05)] border border-outline-variant/10">
              <h2 className="text-title-lg font-headline-md text-primary mb-6">Clinic Profile</h2>
              
              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <label className="text-label-md font-label-md text-on-surface-variant">Clinic Name</label>
                  <input type="text" defaultValue="DentalExpert Premium Clinic" className="h-12 rounded-lg bg-surface-container-low border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary px-4 text-body-md text-on-surface" />
                </div>
                
                <div className="flex flex-col gap-1">
                  <label className="text-label-md font-label-md text-on-surface-variant">Contact Email (Public)</label>
                  <input type="email" defaultValue="hello@dentalexpert.com" className="h-12 rounded-lg bg-surface-container-low border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary px-4 text-body-md text-on-surface" />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-label-md font-label-md text-on-surface-variant">Phone Number (Public)</label>
                  <input type="tel" defaultValue="+1 (800) 123-4567" className="h-12 rounded-lg bg-surface-container-low border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary px-4 text-body-md text-on-surface" />
                </div>
              </div>
            </section>

            <section className="bg-surface rounded-2xl p-[24px] shadow-[0px_4px_20px_rgba(15,76,129,0.05)] border border-outline-variant/10">
              <h2 className="text-title-lg font-headline-md text-primary mb-6">Patient Portals & Booking</h2>
              
              <div className="space-y-4">
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-outline-variant/50 text-primary focus:ring-primary bg-surface-container-low" />
                  <span className="text-body-md text-on-surface font-medium">Enable Online Booking</span>
                </label>
                <p className="text-body-sm text-on-surface-variant pl-8 -mt-2">Allow new and existing patients to schedule appointments via the public website.</p>

                <label className="flex items-center gap-3 mt-4">
                  <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-outline-variant/50 text-primary focus:ring-primary bg-surface-container-low" />
                  <span className="text-body-md text-on-surface font-medium">Automated Reminders</span>
                </label>
                <p className="text-body-sm text-on-surface-variant pl-8 -mt-2">Automatically send email and SMS reminders 24h before an appointment.</p>
              </div>
            </section>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminSettings;
