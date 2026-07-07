import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-container-padding overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-stack-lg items-center relative z-10">
          <div className="flex flex-col gap-stack-lg">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high w-max">
              <span className="material-symbols-outlined text-secondary" data-weight="fill">verified</span>
              <span className="text-label-md font-label-md text-on-surface-variant">Top Rated Dental Clinic</span>
            </div>
            <h1 className="text-display-lg font-display-lg text-primary">
              Professional Dental Care For Every Smile
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-lg">
              Experience world-class dentistry with a gentle touch. Our expert team utilizes state-of-the-art technology to ensure your smile is healthy, bright, and confident.
            </p>
            <div className="flex flex-wrap items-center gap-stack-md mt-stack-sm">
              <Link to="/book" className="px-8 py-4 rounded-[16px] text-body-md font-label-md font-bold text-on-primary bg-primary hover:bg-primary-container transition-all shadow-[0px_10px_30px_rgba(15,76,129,0.15)] flex items-center gap-2">
                Book Appointment <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <button className="px-8 py-4 rounded-[16px] text-body-md font-label-md font-bold text-secondary border-2 border-secondary bg-surface hover:bg-secondary-container transition-all flex items-center gap-2">
                <span className="material-symbols-outlined">call</span> Call Now
              </button>
            </div>
            <p className="text-label-md font-label-md text-error flex items-center gap-2 mt-stack-sm">
              <span className="material-symbols-outlined">emergency</span> 24/7 Emergency Care Available
            </p>
          </div>
          <div className="relative h-[600px] w-full rounded-[24px] overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.08)] bg-surface-container">
            <img 
              className="w-full h-full object-cover" 
              alt="A modern, high-end dental clinic room" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGfljXRiJkDXAEBok5OGadad5Z2cGVq5LflxDYANE6UmhO8f6eNA_4Ha3jumLi2EnAz8afTP_u_QkxiP5kOzQRxyTsgWxKmsnJ0ap6F5UQ_6D15Lrvl4suFtN7bwSap-JuRBcdxr0yAeX5Dfp-N5ZypTC_bueuMeRnmuiWNVXVrhGvIPgRa7PPkmDbLeEYookSIHOXBaIwreuf4d9VI1cXCDXq4F6lmU_sbIgni2SWg10NSqKihnwZRhcvi_fYVkM8AM9WXEa3CA"
            />
            {/* Floating Stats Card */}
            <div className="absolute bottom-8 left-8 bg-surface/95 backdrop-blur-md p-6 rounded-[16px] shadow-[0px_10px_30px_rgba(15,76,129,0.15)] border border-outline-variant/20 flex gap-8">
              <div>
                <div className="text-headline-md font-headline-md font-bold text-primary">15+</div>
                <div className="text-label-md font-label-md text-on-surface-variant">Years Exp.</div>
              </div>
              <div className="w-px bg-outline-variant/30"></div>
              <div>
                <div className="text-headline-md font-headline-md font-bold text-secondary">10k+</div>
                <div className="text-label-md font-label-md text-on-surface-variant">Happy Patients</div>
              </div>
            </div>
          </div>
        </div>
        {/* Abstract background shape */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-surface-container-high to-surface-container-low rounded-full blur-3xl opacity-50 -translate-y-1/4 translate-x-1/4 z-0 pointer-events-none"></div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-container-padding bg-surface-bright">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-stack-lg gap-stack-md">
            <div className="max-w-2xl">
              <h2 className="text-headline-lg font-headline-lg text-primary mb-stack-sm">Comprehensive Dental Services</h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant">From routine check-ups to advanced surgical procedures, we provide full-spectrum dental care under one roof.</p>
            </div>
            <Link to="/services" className="text-secondary font-label-md text-label-md flex items-center gap-1 hover:underline">
              View All Services <span className="material-symbols-outlined">chevron_right</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Main Card */}
            <div className="md:col-span-2 bg-surface p-8 rounded-[24px] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-surface-container-high group hover:shadow-[0px_10px_30px_rgba(15,76,129,0.1)] transition-all flex flex-col justify-between h-full min-h-[320px]">
              <div>
                <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mb-stack-md">
                  <span className="material-symbols-outlined">clean_hands</span>
                </div>
                <h3 className="text-headline-md font-headline-md text-primary mb-stack-sm">Preventive Care & Cleaning</h3>
                <p className="text-body-md font-body-md text-on-surface-variant max-w-md">Regular check-ups, professional cleaning, and early detection to maintain your optimal oral health.</p>
              </div>
              <div className="mt-stack-lg">
                <Link to="/services" className="text-primary font-label-md text-label-md group-hover:text-secondary transition-colors flex items-center gap-1">
                  Learn More <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Secondary Card 1 */}
            <div className="bg-surface p-8 rounded-[24px] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-surface-container-high group hover:shadow-[0px_10px_30px_rgba(15,76,129,0.1)] transition-all flex flex-col justify-between h-full min-h-[320px]">
              <div>
                <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mb-stack-md">
                  <span className="material-symbols-outlined">face</span>
                </div>
                <h3 className="text-headline-md font-headline-md text-primary mb-stack-sm">Cosmetic Dentistry</h3>
                <p className="text-body-md font-body-md text-on-surface-variant">Teeth whitening, veneers, and smile makeovers.</p>
              </div>
              <div className="mt-stack-lg">
                <Link to="/services" className="text-primary font-label-md text-label-md group-hover:text-secondary transition-colors flex items-center gap-1">
                  Learn More <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Secondary Card 2 */}
            <div className="bg-surface p-8 rounded-[24px] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-surface-container-high group hover:shadow-[0px_10px_30px_rgba(15,76,129,0.1)] transition-all flex flex-col justify-between h-full min-h-[320px]">
              <div>
                <div className="w-12 h-12 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center mb-stack-md">
                  <span className="material-symbols-outlined">healing</span>
                </div>
                <h3 className="text-headline-md font-headline-md text-primary mb-stack-sm">Implants & Surgery</h3>
                <p className="text-body-md font-body-md text-on-surface-variant">Permanent solutions for missing teeth with advanced surgical techniques.</p>
              </div>
              <div className="mt-stack-lg">
                <Link to="/services" className="text-primary font-label-md text-label-md group-hover:text-secondary transition-colors flex items-center gap-1">
                  Learn More <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Emergency CTA */}
            <div className="md:col-span-2 bg-primary text-on-primary p-8 rounded-[24px] shadow-[0px_4px_20px_rgba(0,0,0,0.1)] flex flex-col justify-center items-center text-center relative overflow-hidden h-full min-h-[320px]">
              <div className="absolute inset-0 bg-black/20 opacity-20 bg-cover bg-center mix-blend-overlay"></div>
              <div className="relative z-10 flex flex-col items-center">
                <span className="material-symbols-outlined text-[48px] mb-stack-md text-secondary">emergency</span>
                <h3 className="text-headline-md font-headline-md font-bold mb-stack-sm">Need Urgent Care?</h3>
                <p className="text-body-md font-body-md max-w-md mb-stack-lg text-primary-fixed-dim">Our emergency dental team is on standby for severe pain, trauma, or unexpected dental issues.</p>
                <button className="px-6 py-3 rounded-[16px] text-label-md font-label-md font-bold text-primary bg-on-primary hover:bg-surface-container transition-colors">
                  Contact Emergency Line
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
