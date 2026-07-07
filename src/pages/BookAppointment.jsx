import { useState } from 'react';
import { Link } from 'react-router-dom';

const BookAppointment = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(s => Math.min(s + 1, 5));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  return (
    <div className="flex-grow flex flex-col items-center justify-center p-container-padding bg-background text-on-background min-h-screen py-8">
      {/* Booking Container */}
      <div className="w-full max-w-4xl mx-auto bg-white/70 backdrop-blur-md border border-white/40 rounded-xl shadow-[0px_10px_30px_rgba(15,76,129,0.08)] p-stack-lg relative overflow-hidden">
        
        {/* Header & Progress */}
        <div className="mb-stack-lg border-b border-outline-variant/30 pb-stack-md">
          <h1 className="font-headline-lg text-headline-lg text-primary mb-stack-sm">Book Appointment</h1>
          
          {/* Progress Indicator */}
          <div className="flex items-center justify-between mt-stack-md relative">
            {/* Background Line */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-surface-variant rounded-full z-0"></div>
            {/* Active Line (Dynamic width) */}
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full z-0 transition-all duration-300" 
              style={{ width: `${(step - 1) * 25}%` }}
            ></div>
            
            {/* Steps */}
            {[
              { num: 1, label: 'Service' },
              { num: 2, label: 'Doctor' },
              { num: 3, label: 'Date/Time' },
              { num: 4, label: 'Details' },
              { num: 5, label: 'Confirm' }
            ].map(s => (
              <div key={s.num} className="relative z-10 flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-label-md text-label-md mb-2 shadow-sm transition-colors duration-300 ${step >= s.num ? 'bg-primary text-on-primary' : 'bg-surface text-on-surface-variant border border-outline-variant/50'}`}>
                  {s.num}
                </div>
                <span className={`font-label-md text-label-md hidden sm:block ${step >= s.num ? 'text-primary' : 'text-on-surface-variant'}`}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Steps Container */}
        <div className="relative min-h-[400px]">
          
          {/* Step 1: Services */}
          {step === 1 && (
            <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-300">
              <h2 className="font-headline-md text-headline-md text-on-background mb-stack-md">Select a Service</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-gutter">
                <button onClick={nextStep} className="text-left bg-surface rounded-xl p-stack-md border border-outline-variant/30 shadow-sm hover:shadow-md hover:border-primary transition-all flex flex-col items-start focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  <span className="material-symbols-outlined text-primary mb-stack-sm text-3xl">medical_services</span>
                  <h3 className="font-label-md text-label-md text-on-background mb-1">General Checkup</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Routine examination and cleaning.</p>
                </button>
                <button onClick={nextStep} className="text-left bg-surface rounded-xl p-stack-md border border-outline-variant/30 shadow-sm hover:shadow-md hover:border-primary transition-all flex flex-col items-start focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  <span className="material-symbols-outlined text-primary mb-stack-sm text-3xl">dentistry</span>
                  <h3 className="font-label-md text-label-md text-on-background mb-1">Teeth Whitening</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Professional cosmetic whitening.</p>
                </button>
                <button onClick={nextStep} className="text-left bg-surface rounded-xl p-stack-md border border-outline-variant/30 shadow-sm hover:shadow-md hover:border-primary transition-all flex flex-col items-start focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  <span className="material-symbols-outlined text-primary mb-stack-sm text-3xl">prescriptions</span>
                  <h3 className="font-label-md text-label-md text-on-background mb-1">Orthodontics</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Braces and aligner consultations.</p>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Doctor */}
          {step === 2 && (
            <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-300">
              <h2 className="font-headline-md text-headline-md text-on-background mb-stack-md">Choose a Specialist</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
                <button onClick={nextStep} className="text-left bg-surface rounded-xl p-stack-md border border-outline-variant/30 shadow-sm hover:shadow-md hover:border-primary transition-all flex items-center gap-stack-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  <img className="w-16 h-16 rounded-full object-cover shadow-sm" alt="Dr. Sarah Jenkins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM7QYTvNHRthcicGuCyELhxoUrV08WMYCnG0hKir_Zyge-g8lB1MB-i6y3RWw2vZGQFlmsI04tIuIthEpE3Sprg2HS3Q2n7nnsK-PTlEyPa0m5AgFhsWTi_yWKvaUTOqumRHPTtJ16VZq22iLc0x01nA2ypcGtOONBACMf0OCr_6kOVCyC_H1tqv9mt6SPzOfJ-wNl1NbRXIGdfH4tf4kqP0XM2kXPRbl0FfcCDPoQ_sOL-S1QrfAN6eeOJxzpLdrpkuu0U8WneA"/>
                  <div>
                    <h3 className="font-label-md text-label-md text-on-background">Dr. Sarah Jenkins</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">General Dentistry</p>
                  </div>
                </button>
                <button onClick={nextStep} className="text-left bg-surface rounded-xl p-stack-md border border-outline-variant/30 shadow-sm hover:shadow-md hover:border-primary transition-all flex items-center gap-stack-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  <img className="w-16 h-16 rounded-full object-cover shadow-sm" alt="Dr. Michael Chen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4gi8qgwNzeoWVypomD_lS4VunQRcwDQtAV_MgYD6mW8p-83Rsdz6o_MUOyZKhfb9hyQQ_l3I0sm_b8Jl26tAB47m1nMgkpDYuEN0EYhEE1SDMPka3X8erRJovt8yGyooACpapcaONJHTR1xr-oPKAV5GAVZ-cGpx-VDQuYpJJ7Gha8q_-QiMJBmtef_MmfgRLKHuVIgHlVyv8ebm59wK_Q5ntqvIGyG-7J4bdB1sUHDTVaLKtfy3UqWjECqIkZmAS0xNz4vp_rg"/>
                  <div>
                    <h3 className="font-label-md text-label-md text-on-background">Dr. Michael Chen</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Orthodontist</p>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Date/Time */}
          {step === 3 && (
            <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-300">
              <h2 className="font-headline-md text-headline-md text-on-background mb-stack-md">Select Date & Time</h2>
              <div className="flex flex-col md:flex-row gap-gutter">
                <div className="w-full md:w-1/2 bg-surface rounded-xl border border-outline-variant/30 p-stack-md shadow-sm">
                  <div className="flex justify-between items-center mb-stack-sm">
                    <button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">chevron_left</span></button>
                    <span className="font-label-md text-label-md">October 2024</span>
                    <button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">chevron_right</span></button>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center font-body-sm text-body-sm mb-2">
                    <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center font-body-sm text-body-sm">
                    <div className="p-2 text-outline-variant">29</div><div className="p-2 text-outline-variant">30</div>
                    {[1,2,3,4,5,6].map(d => <div key={d} className="p-2 hover:bg-surface-variant rounded cursor-pointer">{d}</div>)}
                    <div className="p-2 bg-primary text-on-primary rounded cursor-pointer shadow-sm">7</div>
                    {[8,9].map(d => <div key={d} className="p-2 hover:bg-surface-variant rounded cursor-pointer">{d}</div>)}
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="font-label-md text-label-md text-on-background mb-stack-sm">Available Slots (Oct 7)</h3>
                  <div className="grid grid-cols-2 gap-stack-sm">
                    {['09:00 AM', '10:30 AM', '01:00 PM', '03:30 PM'].map(time => (
                      <button key={time} onClick={nextStep} className="py-2 px-4 rounded-lg border border-outline-variant/30 text-on-surface-variant hover:border-primary hover:text-primary font-body-sm text-body-sm focus:bg-primary-container focus:text-on-primary-container focus:border-primary-container transition-colors">{time}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Details */}
          {step === 4 && (
            <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-stack-md gap-4">
                <h2 className="font-headline-md text-headline-md text-on-background">Patient Details</h2>
                <div className="bg-surface-container-low px-4 py-2 rounded-xl text-body-sm font-body-sm text-on-surface flex items-center gap-2 border border-outline-variant/30">
                  <span className="material-symbols-outlined text-primary text-[18px]">account_circle</span>
                  <span>Already a patient?</span>
                  <Link to="/login" state={{ from: '/book' }} className="font-semibold text-primary hover:underline">Log in</Link>
                </div>
              </div>
              <form className="space-y-stack-md max-w-lg">
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-1">Full Name</label>
                  <input className="w-full h-12 px-4 rounded-lg bg-surface border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-on-primary transition-colors font-body-md text-body-md" placeholder="John Doe" type="text"/>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-stack-md">
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface-variant mb-1">Email</label>
                    <input className="w-full h-12 px-4 rounded-lg bg-surface border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-on-primary transition-colors font-body-md text-body-md" placeholder="john@example.com" type="email"/>
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface-variant mb-1">Phone</label>
                    <input className="w-full h-12 px-4 rounded-lg bg-surface border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-on-primary transition-colors font-body-md text-body-md" placeholder="(555) 123-4567" type="tel"/>
                  </div>
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-1">Reason for Visit (Optional)</label>
                  <textarea className="w-full p-4 rounded-lg bg-surface border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-on-primary transition-colors font-body-md text-body-md min-h-[100px]" placeholder="Briefly describe any specific concerns..."></textarea>
                </div>
                
                <button type="button" onClick={nextStep} className="bg-primary text-on-primary px-8 py-3 rounded-xl font-label-md text-label-md font-bold w-full hover:bg-primary/90 transition-colors shadow-md">
                  Confirm Booking
                </button>
              </form>
            </div>
          )}

          {/* Step 5: Confirmation */}
          {step === 5 && (
            <div className="w-full flex flex-col items-center justify-center text-center py-stack-lg animate-in zoom-in-95 duration-500">
              <div className="w-20 h-20 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center mb-stack-md shadow-md">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-background mb-stack-sm">Booking Confirmed!</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto mb-stack-lg">Your appointment for a General Checkup with Dr. Sarah Jenkins on Oct 7 at 10:30 AM is set. We've sent a confirmation to your email.</p>
              
              <div className="bg-surface rounded-xl p-stack-md border border-outline-variant/30 w-full max-w-md text-left shadow-sm">
                <h3 className="font-label-md text-label-md text-on-background border-b border-outline-variant/30 pb-2 mb-2">Summary</h3>
                <div className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                  <div className="flex justify-between"><span className="font-semibold">Service:</span> <span>General Checkup</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Doctor:</span> <span>Dr. Sarah Jenkins</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Date:</span> <span>October 7, 2024</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Time:</span> <span>10:30 AM</span></div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/" className="text-primary hover:underline font-label-md text-label-md">Return to Home</Link>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Actions (Bottom) */}
        {step > 1 && step < 5 && (
          <div className="mt-stack-lg pt-stack-md border-t border-outline-variant/30 flex justify-between">
            <button onClick={prevStep} className="px-6 py-2 rounded-lg border border-outline-variant/50 text-on-surface hover:bg-surface-variant transition-colors font-label-md text-label-md flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Back
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default BookAppointment;
