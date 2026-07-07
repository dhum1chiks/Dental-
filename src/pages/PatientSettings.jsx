import { useTheme } from '../context/ThemeContext';

const PatientSettings = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex-1 overflow-y-auto px-container-padding py-stack-lg pb-32">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Page Header */}
        <header>
          <h1 className="text-headline-md font-headline-md text-on-background">Account Settings</h1>
          <p className="text-body-sm font-body-sm text-on-surface-variant">Update your personal information and preferences.</p>
        </header>

        {/* Settings Form */}
        <section className="bg-surface rounded-2xl p-[24px] shadow-[0px_4px_20px_rgba(15,76,129,0.05)] border border-outline-variant/10">
          <form className="space-y-6">
            
            <div>
              <h2 className="text-headline-sm font-headline-md text-primary border-b border-outline-variant/20 pb-2 mb-4">Profile Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-label-md font-label-md text-on-surface-variant">First Name</label>
                  <input type="text" defaultValue="Sarah" className="h-12 rounded-lg bg-surface-container-low border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary px-4 text-body-md" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-label-md font-label-md text-on-surface-variant">Last Name</label>
                  <input type="text" defaultValue="Jenkins" className="h-12 rounded-lg bg-surface-container-low border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary px-4 text-body-md" />
                </div>
                <div className="flex flex-col gap-1 md:col-span-2">
                  <label className="text-label-md font-label-md text-on-surface-variant">Email Address</label>
                  <input type="email" defaultValue="sarah.jenkins@example.com" className="h-12 rounded-lg bg-surface-container-low border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary px-4 text-body-md" />
                </div>
                <div className="flex flex-col gap-1 md:col-span-2">
                  <label className="text-label-md font-label-md text-on-surface-variant">Phone Number</label>
                  <input type="tel" defaultValue="(555) 123-4567" className="h-12 rounded-lg bg-surface-container-low border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary px-4 text-body-md" />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-headline-sm font-headline-md text-primary border-b border-outline-variant/20 pb-2 mb-4 mt-8">System Preferences</h2>
              <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl border border-outline-variant/20">
                <div>
                  <h3 className="font-label-md text-on-surface">Dark Mode</h3>
                  <p className="text-body-sm text-on-surface-variant">Switch the interface between light and dark themes.</p>
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
            </div>

            <div>
              <h2 className="text-headline-sm font-headline-md text-primary border-b border-outline-variant/20 pb-2 mb-4 mt-8">Notifications</h2>
              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-outline-variant/50 text-primary focus:ring-primary bg-surface-container-low" />
                  <span className="text-body-md text-on-surface">Email notifications for upcoming appointments</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-outline-variant/50 text-primary focus:ring-primary bg-surface-container-low" />
                  <span className="text-body-md text-on-surface">SMS reminders</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 rounded border-outline-variant/50 text-primary focus:ring-primary bg-surface-container-low" />
                  <span className="text-body-md text-on-surface">Promotional offers and clinic news</span>
                </label>
              </div>
            </div>

            <div>
              <h2 className="text-headline-sm font-headline-md text-primary border-b border-outline-variant/20 pb-2 mb-4 mt-8">Security</h2>
              <button type="button" className="text-primary font-label-md text-label-md hover:bg-primary-container/20 px-4 py-2 rounded-lg transition-colors border border-primary/30">
                Change Password
              </button>
            </div>

            <div className="pt-6 border-t border-outline-variant/20 flex justify-end gap-3">
              <button type="button" className="px-6 py-2 rounded-xl text-primary font-label-md text-label-md hover:bg-primary-container/20 transition-colors">
                Cancel
              </button>
              <button type="button" className="bg-primary text-on-primary px-6 py-2 rounded-xl font-label-md text-label-md shadow-sm hover:opacity-90 transition-opacity">
                Save Changes
              </button>
            </div>

          </form>
        </section>

      </div>
    </div>
  );
};

export default PatientSettings;
