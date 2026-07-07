import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="w-full pb-stack-xl">
      {/* Hero Banner */}
      <section className="relative w-full pt-20 pb-32 px-container-padding bg-surface-container-low overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-40 mix-blend-multiply" 
          style={{backgroundImage: "radial-gradient(circle at 80% 20%, var(--tw-colors-secondary-container) 0%, transparent 40%), radial-gradient(circle at 20% 80%, var(--tw-colors-primary-container) 0%, transparent 50%)"}}
        ></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-gutter">
          <div className="w-full md:w-1/2 flex flex-col gap-stack-md">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-bright border border-outline-variant/30 text-label-md font-label-md text-secondary w-fit shadow-[0px_4px_20px_rgba(15,76,129,0.05)]">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              Comprehensive Care
            </div>
            <h1 className="text-display-lg font-display-lg text-on-primary-fixed">
              Advanced Dental<br/>Treatments for You
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-lg">
              From routine cleanings to complex restorative procedures, our state-of-the-art clinic provides expert care tailored to your unique smile in a pristine, calming environment.
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-stack-lg md:mt-0 relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0px_20px_40px_rgba(15,76,129,0.12)] border-[4px] border-surface-container-lowest">
              <img 
                className="w-full h-full object-cover" 
                alt="A bright, ultra-modern dental clinic operatory room" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkNO1gfKXuaXarnmzHn9iy014kfZdAovqaiGZ8JOicyRfBPt6xJLXPmrjAhOHzOCrr7kyT4OOJsDZiMJPdIbgPruwLkJtyKsbPADSMxi_vJUsUF75OSBn5BUZ6U1h2rOvzo5xIF-BT66igcOuh3NpaC9_TH6L9FnzwByrj5wK3e115-HaVdrQ0b77c3_Pg1gMDG9qH5p-CBrSp9jELcVw5FcnFG5jKtu4SUgNWGctQMk6CMlkExm_jMUvFGxELC9I_nCDSZ-Mpbg"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white/85 backdrop-blur-md border border-white/50 rounded-2xl p-4 shadow-[0px_10px_30px_rgba(15,76,129,0.08)] flex items-center gap-4 animate-bounce" style={{animationDuration: "3s"}}>
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined">sentiment_very_satisfied</span>
              </div>
              <div>
                <p className="text-headline-md font-headline-md text-on-surface m-0">15k+</p>
                <p className="text-label-md font-label-md text-on-surface-variant m-0">Happy Patients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Bento Overview */}
      <section className="max-w-7xl mx-auto px-container-padding py-stack-xl relative z-20 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Bento Item 1 */}
          <a className="group bg-surface-container-lowest p-6 rounded-3xl shadow-[0px_4px_20px_rgba(15,76,129,0.05)] hover:shadow-[0px_10px_30px_rgba(15,76,129,0.08)] border border-outline-variant/20 transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4" href="#general">
            <div className="w-14 h-14 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[28px]">health_and_safety</span>
            </div>
            <h3 className="text-headline-md font-headline-md text-on-surface">General Dentistry</h3>
            <p className="text-body-sm font-body-sm text-on-surface-variant">Preventative care, cleanings, and routine exams to maintain optimal oral health.</p>
          </a>
          {/* Bento Item 2 */}
          <a className="group bg-surface-container-lowest p-6 rounded-3xl shadow-[0px_4px_20px_rgba(15,76,129,0.05)] hover:shadow-[0px_10px_30px_rgba(15,76,129,0.08)] border border-outline-variant/20 transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4" href="#implants">
            <div className="w-14 h-14 rounded-2xl bg-secondary-container/30 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[28px]">planet</span>
            </div>
            <h3 className="text-headline-md font-headline-md text-on-surface">Dental Implants</h3>
            <p className="text-body-sm font-body-sm text-on-surface-variant">Permanent, natural-looking tooth replacements to restore function and confidence.</p>
          </a>
          {/* Bento Item 3 */}
          <a className="group bg-surface-container-lowest p-6 rounded-3xl shadow-[0px_4px_20px_rgba(15,76,129,0.05)] hover:shadow-[0px_10px_30px_rgba(15,76,129,0.08)] border border-outline-variant/20 transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4" href="#ortho">
            <div className="w-14 h-14 rounded-2xl bg-tertiary-fixed flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[28px]">align_horizontal_center</span>
            </div>
            <h3 className="text-headline-md font-headline-md text-on-surface">Orthodontics</h3>
            <p className="text-body-sm font-body-sm text-on-surface-variant">Clear aligners and modern braces for a perfectly straight, aligned smile.</p>
          </a>
        </div>
      </section>

      {/* Detailed Services Sections */}
      <div className="max-w-7xl mx-auto px-container-padding flex flex-col gap-stack-xl mt-stack-md">
        {/* Section: General Dentistry */}
        <section className="flex flex-col md:flex-row items-center gap-gutter py-stack-md" id="general">
          <div className="w-full md:w-1/2">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-[0px_10px_30px_rgba(15,76,129,0.08)]">
              <img 
                className="w-full h-full object-cover" 
                alt="Close up of a female patient smiling brightly while a professional dentist in sterile gloves uses a small dental mirror to examine her teeth." 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAebvKe2ZqCVTNQAb_jIwKcMrSjAMTBikL4kUCFwC6IyeRt7M2KuOBJg56706Ydzf5D3O-zSni061Wm-Zqx8a_KB8XF-oTECvDk-1Q7KlMZ_SD8DmLOQSYjy-hLz1g8uNNNW0ay1I_z5Fax_5HPWlVo9JyQLp_XC-lnTB5wjQZc_H8rUJHXVVaOJd2QbatCNZoNiOOYL2Ba4czi8H3g_vlZ1vLVdE--NBQdYWfMv-uIpes8i3xuSSlXYUwobjnwwPFUYddaAqEPWw"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-stack-md">
            <span className="text-label-md font-label-md text-secondary uppercase tracking-wider">Foundation Care</span>
            <h2 className="text-headline-lg font-headline-lg text-on-background">General Dentistry</h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">Our general dentistry services focus on disease prevention and early detection. We utilize digital radiography and intraoral cameras for precise diagnostics, ensuring your foundational oral health is uncompromised.</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-4 py-2 rounded-full bg-surface-container-low text-primary-container text-body-sm font-label-md border border-outline-variant/20">Comprehensive Exams</span>
              <span className="px-4 py-2 rounded-full bg-surface-container-low text-primary-container text-body-sm font-label-md border border-outline-variant/20">Prophylaxis Cleanings</span>
              <span className="px-4 py-2 rounded-full bg-surface-container-low text-primary-container text-body-sm font-label-md border border-outline-variant/20">Oral Cancer Screenings</span>
            </div>
            
            <div className="mt-stack-md bg-surface-bright p-6 rounded-2xl border border-outline-variant/20 shadow-[0px_4px_20px_rgba(15,76,129,0.05)]">
              <h4 className="text-body-md font-headline-md text-on-surface mb-4">Standard Visit Steps</h4>
              <div className="flex items-center gap-4 relative">
                {/* Progress Line */}
                <div className="absolute left-4 top-1/2 w-[calc(100%-2rem)] h-1 bg-surface-container-high -translate-y-1/2 z-0"></div>
                <div className="absolute left-4 top-1/2 w-1/3 h-1 bg-primary -translate-y-1/2 z-0"></div>
                {/* Steps */}
                <div className="flex flex-col items-center gap-2 z-10 w-1/3">
                  <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-label-md font-bold shadow-md">1</div>
                  <span className="text-label-md text-on-surface-variant text-center">X-Rays</span>
                </div>
                <div className="flex flex-col items-center gap-2 z-10 w-1/3">
                  <div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center text-label-md font-bold border-2 border-primary shadow-md">2</div>
                  <span className="text-label-md text-on-surface-variant text-center">Exam</span>
                </div>
                <div className="flex flex-col items-center gap-2 z-10 w-1/3">
                  <div className="w-8 h-8 rounded-full bg-surface text-outline flex items-center justify-center text-label-md font-bold border-2 border-outline-variant">3</div>
                  <span className="text-label-md text-outline text-center">Cleaning</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-outline-variant/20 w-full"/>

        {/* Section: Implants (Reversed Layout) */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-gutter py-stack-md" id="implants">
          <div className="w-full md:w-1/2">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-[0px_10px_30px_rgba(15,76,129,0.08)]">
              <img 
                className="w-full h-full object-cover" 
                alt="A highly detailed 3D rendering of a modern dental implant structure" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTy3Onv6ZLmqVjyXWrwpw8MLfIXtvPqkkRt9-WuLyBokslZBBk32rYpt-U8ikkuxCQui4eYzKWIFh1h7a4fpGUvlTwhYSOQrwFayOEiP5Fz2Iv38ZlWlNqN2T1jgUWPy3xcSAOPKdEIHYMaHh_nKsYc1E0tH19HgsLAGIElR-WgAzmIX7WhCHHl2ba715QjKhCX6fGwbUnQlLOih8WsZRf3hWbr8Usu6k8Bmm3xiZZnkCT0QUf4hfiD9KdaI6YHuWfhgcZ99ET6A"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-stack-md">
            <span className="text-label-md font-label-md text-secondary uppercase tracking-wider">Restoration</span>
            <h2 className="text-headline-lg font-headline-lg text-on-background">Dental Implants</h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">Regain the full function and aesthetics of your natural bite. Our implant specialists use 3D CBCT scanning for surgical precision, creating permanent restorations that feel identical to natural teeth.</p>
            
            <ul className="flex flex-col gap-3 mt-2 text-body-md text-on-surface-variant">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                Prevents jawbone density loss over time.
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                No impact on adjacent healthy teeth.
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                Lifetime durability with proper care.
              </li>
            </ul>

            <div className="mt-stack-md bg-surface-container-lowest p-6 rounded-2xl border border-primary/20 shadow-[0px_4px_20px_rgba(15,76,129,0.05)]">
              <h4 className="text-body-md font-headline-md text-primary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined">timeline</span> Implant Journey
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="flex-1 text-body-sm"><strong className="text-on-surface">Consultation:</strong> 3D imaging & planning.</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <div className="flex-1 text-body-sm"><strong className="text-on-surface">Placement:</strong> Minor surgical insertion of titanium post.</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                  <div className="flex-1 text-body-sm"><strong className="text-on-surface">Restoration:</strong> Custom crown attachment after healing.</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Appointment CTA */}
      <section className="max-w-5xl mx-auto px-container-padding mt-stack-xl">
        <div className="bg-primary rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-stack-lg shadow-[0px_20px_40px_rgba(15,76,129,0.12)] relative overflow-hidden">
          {/* Abstract BG Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary-container/20 rounded-full blur-2xl translate-y-1/4 -translate-x-1/4"></div>
          
          <div className="relative z-10 w-full md:w-2/3 flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-display-lg font-display-lg text-on-primary m-0">Ready for a healthier smile?</h2>
            <p className="text-body-lg font-body-lg text-primary-fixed-dim m-0">Schedule your comprehensive consultation today. Experience expert-friendly care designed around your comfort.</p>
          </div>
          
          <div className="relative z-10 w-full md:w-auto flex-shrink-0">
            <Link to="/book" className="w-full md:w-auto bg-surface-container-lowest text-primary text-headline-md font-headline-md px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
              Book Appointment
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
