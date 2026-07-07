import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true);

  // If we came from booking, we might want to go back there
  const fromBooking = location.state?.from === '/book';

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login/signup success
    if (fromBooking) {
      navigate('/book');
    } else {
      // Default route for patients
      navigate('/patient');
    }
  };

  return (
    <div className="min-h-screen bg-surface flex">
      {/* Left Side: Branding / Image */}
      <div className="hidden lg:flex w-1/2 bg-primary-container relative flex-col items-center justify-center p-12 overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-tertiary-fixed rounded-full opacity-20 blur-3xl"></div>
        
        <div className="z-10 text-center text-on-primary-container flex flex-col items-center">
          <Link to="/" className="flex items-center gap-2 mb-8 hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>dentistry</span>
          </Link>
          <h1 className="text-display-lg font-display-lg font-bold mb-4">DentalExpert</h1>
          <p className="text-body-lg font-body-lg max-w-md opacity-90">
            Welcome to your digital portal. Manage your appointments, view treatment history, and handle billing all in one place.
          </p>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 bg-background relative">
        {/* Mobile Back Button */}
        <Link to="/" className="absolute top-6 left-6 lg:hidden flex items-center gap-2 text-primary hover:opacity-80 transition-opacity font-label-md">
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>dentistry</span>
          DentalExpert
        </Link>
        
        {/* Absolute Top Right (for Booking Redirect) */}
        {fromBooking && (
          <Link to="/book" className="absolute top-6 right-6 flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors text-label-md font-label-md">
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Back to Booking
          </Link>
        )}

        <div className="w-full max-w-md bg-surface-container-lowest p-8 rounded-[24px] shadow-[0px_4px_20px_rgba(15,76,129,0.05)] border border-outline-variant/10">
          
          <div className="mb-8">
            <h2 className="text-headline-lg font-headline-lg text-on-surface mb-2">
              {isLogin ? 'Welcome Back' : 'Create an Account'}
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              {isLogin 
                ? 'Please enter your details to sign in.' 
                : 'Enter your details to create your patient profile.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-label-md font-label-md text-on-surface-variant mb-1">First Name</label>
                  <input type="text" required className="w-full h-12 px-4 rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary bg-background text-body-md transition-colors" placeholder="Jane" />
                </div>
                <div className="flex-1">
                  <label className="block text-label-md font-label-md text-on-surface-variant mb-1">Last Name</label>
                  <input type="text" required className="w-full h-12 px-4 rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary bg-background text-body-md transition-colors" placeholder="Doe" />
                </div>
              </div>
            )}

            <div>
              <label className="block text-label-md font-label-md text-on-surface-variant mb-1">Email</label>
              <input type="email" required className="w-full h-12 px-4 rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary bg-background text-body-md transition-colors" placeholder="jane@example.com" />
            </div>

            <div>
              <label className="block text-label-md font-label-md text-on-surface-variant mb-1">Password</label>
              <input type="password" required className="w-full h-12 px-4 rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary bg-background text-body-md transition-colors" placeholder="••••••••" />
            </div>
            
            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-outline-variant/30 text-primary focus:ring-primary" />
                  <span className="text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">Remember for 30 days</span>
                </label>
                <a href="#" className="text-body-sm font-semibold text-primary hover:text-primary-container transition-colors">Forgot password?</a>
              </div>
            )}

            <button type="submit" className="w-full bg-primary text-on-primary h-12 rounded-xl text-label-md font-label-md font-bold hover:bg-primary/90 transition-colors shadow-sm mt-4">
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
            
            {/* Admin hint */}
            <div className="text-center pt-2">
              <span className="text-xs text-on-surface-variant italic">Hint: To see admin portal, use <Link to="/admin" className="text-primary hover:underline">/admin</Link> directly.</span>
            </div>
          </form>

          <div className="mt-8 text-center text-body-sm text-on-surface-variant">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button type="button" onClick={() => setIsLogin(!isLogin)} className="font-semibold text-primary hover:text-primary-container transition-colors">
              {isLogin ? 'Sign up' : 'Log in'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
