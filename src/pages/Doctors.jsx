import { Link } from 'react-router-dom';

const Doctors = () => {
  return (
    <div className="flex-grow w-full max-w-7xl mx-auto px-container-padding py-stack-lg">
      {/* Header & Filter Section */}
      <section className="mb-12">
        <h1 className="text-display-lg font-display-lg text-primary mb-stack-sm">Meet Our Specialists</h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mb-stack-lg">
          Experience exceptional care with our team of highly skilled and compassionate dental professionals.
        </p>
        
        <div className="bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(15,76,129,0.12)] p-stack-md flex flex-col sm:flex-row gap-stack-md items-center border border-outline-variant/20">
          <div className="relative w-full sm:w-1/3">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input 
              className="w-full pl-10 pr-4 py-3 bg-surface text-on-surface rounded-lg border-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-colors text-body-sm font-body-sm h-[48px]" 
              placeholder="Search doctors by name..." 
              type="text"
            />
          </div>
          <div className="flex-grow w-full sm:w-auto flex gap-stack-sm overflow-x-auto pb-2 sm:pb-0 hide-scrollbar" style={{msOverflowStyle: 'none', scrollbarWidth: 'none'}}>
            <button className="whitespace-nowrap px-4 py-2 rounded-full bg-primary-container text-on-primary-container text-label-md font-label-md border border-primary-container">All Specialists</button>
            <button className="whitespace-nowrap px-4 py-2 rounded-full bg-surface-container-high text-on-surface hover:bg-surface-variant/50 transition-colors text-label-md font-label-md border border-transparent">Orthodontics</button>
            <button className="whitespace-nowrap px-4 py-2 rounded-full bg-surface-container-high text-on-surface hover:bg-surface-variant/50 transition-colors text-label-md font-label-md border border-transparent">Periodontics</button>
            <button className="whitespace-nowrap px-4 py-2 rounded-full bg-surface-container-high text-on-surface hover:bg-surface-variant/50 transition-colors text-label-md font-label-md border border-transparent">Endodontics</button>
            <button className="whitespace-nowrap px-4 py-2 rounded-full bg-surface-container-high text-on-surface hover:bg-surface-variant/50 transition-colors text-label-md font-label-md border border-transparent">Pediatric</button>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {/* Doctor Card 1 */}
        <article className="bg-surface-container-lowest rounded-[24px] shadow-[0px_4px_20px_rgba(15,76,129,0.12)] overflow-hidden flex flex-col group border border-outline-variant/10 hover:shadow-[0px_10px_30px_rgba(15,76,129,0.15)] transition-all duration-300">
          <div className="relative h-64 bg-surface-container w-full overflow-hidden">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              alt="Professional headshot of a female dentist" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZSXjLmPIAaY5qrWfS96hm-9uN5gaWjiCUL2pQ3phnj7Ej24eN0M_jTX447snek2zTYyF5B3BxxNr9HeVqU4qOV1-99AjbM2Oc7cJneyBS6Lmd6GRnP_ejpc0ULnd4v13jnjyoWzKFuyd27zY_FpZq_PKmU3Xvp2EmVUQC21d9KMIODjfkp3UMX7tbDj2dsS5pd8XJcT76Fxc8NWci1DtMe-28VvI278zJdlCj3bkEI9NlvtEmpT-jxA6BZHvB6i1YCvCNH2zXoQ"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-headline-md font-headline-md text-primary">Dr. Sarah Jenkins</h3>
                <p className="text-body-sm font-body-sm text-secondary font-medium">Orthodontist</p>
              </div>
              <div className="flex items-center gap-1 bg-surface-container-high px-2 py-1 rounded-md">
                <span className="material-symbols-outlined text-[16px] text-tertiary-container" data-weight="fill">star</span>
                <span className="text-label-md font-label-md text-on-surface">4.9</span>
              </div>
            </div>
            <p className="text-body-sm font-body-sm text-on-surface-variant mb-4 line-clamp-2">Specializing in clear aligners and comprehensive orthodontic treatment for adults and teens.</p>
            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
              <span className="px-3 py-1 bg-surface-container rounded-full text-label-md font-label-md text-on-surface-variant">15+ Yrs Exp</span>
              <span className="px-3 py-1 bg-surface-container rounded-full text-label-md font-label-md text-on-surface-variant">Invisalign®</span>
            </div>
            <Link to="/book" className="w-full py-3 border-2 border-secondary text-secondary rounded-[16px] text-label-md font-label-md hover:bg-secondary hover:text-on-secondary transition-colors duration-200 text-center block">
              Book Appointment
            </Link>
          </div>
        </article>

        {/* Doctor Card 2 */}
        <article className="bg-surface-container-lowest rounded-[24px] shadow-[0px_4px_20px_rgba(15,76,129,0.12)] overflow-hidden flex flex-col group border border-outline-variant/10 hover:shadow-[0px_10px_30px_rgba(15,76,129,0.15)] transition-all duration-300">
          <div className="relative h-64 bg-surface-container w-full overflow-hidden">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              alt="Professional portrait of a male dentist" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNur8l8XVVnVbBxf1EBEC17_7nFw4RyivzlGkCNLLIxjE76vi72lMTH1wmtR6CLzgif2NhOz3dyKQcCClIlbJEjXHtyyTCSG1SYi-RIYKpyPx5-2j42dajYMM5JycNLTCrdg77S_CZYrjsV7ZBNv5wdJk2Oylbz__Xo51Nd9jz7Svi-kaOjXw0BFJ1bDcV3uVDe5CK6M8oVoqLXF6kQz6P_GBlO24NP_-_fSJjWGRW711KQ44LM-_wdIXtYkz71Fqfip-hXk-mtA"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-headline-md font-headline-md text-primary">Dr. Michael Chen</h3>
                <p className="text-body-sm font-body-sm text-secondary font-medium">Periodontist</p>
              </div>
              <div className="flex items-center gap-1 bg-surface-container-high px-2 py-1 rounded-md">
                <span className="material-symbols-outlined text-[16px] text-tertiary-container" data-weight="fill">star</span>
                <span className="text-label-md font-label-md text-on-surface">5.0</span>
              </div>
            </div>
            <p className="text-body-sm font-body-sm text-on-surface-variant mb-4 line-clamp-2">Expert in implant dentistry and advanced gum disease treatment with a focus on patient comfort.</p>
            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
              <span className="px-3 py-1 bg-surface-container rounded-full text-label-md font-label-md text-on-surface-variant">20+ Yrs Exp</span>
              <span className="px-3 py-1 bg-surface-container rounded-full text-label-md font-label-md text-on-surface-variant">Implants</span>
            </div>
            <Link to="/book" className="w-full py-3 border-2 border-secondary text-secondary rounded-[16px] text-label-md font-label-md hover:bg-secondary hover:text-on-secondary transition-colors duration-200 text-center block">
              Book Appointment
            </Link>
          </div>
        </article>

        {/* Doctor Card 3 */}
        <article className="bg-surface-container-lowest rounded-[24px] shadow-[0px_4px_20px_rgba(15,76,129,0.12)] overflow-hidden flex flex-col group border border-outline-variant/10 hover:shadow-[0px_10px_30px_rgba(15,76,129,0.15)] transition-all duration-300">
          <div className="relative h-64 bg-surface-container w-full overflow-hidden">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              alt="Headshot of a friendly young female pediatric dentist" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT4uKehwdPgdcE3BCTE3PiuqRik_TEmWjCh-nK2Q2mGNv4O1DFD1GCJ30g5JDSLeLj_ZTHA1UahWNrBKKfDgzMb5AOiCVCaptI5GYKK7qzFobovb6Mvn7KlTjmV_e4RO8FBmGNTcwUUoCKwb6Q_1AyjwHSEHZ5EdAkANBMA-ST2ioaDYr-c0oOK4VtLqlJSonU0HsQlUs8Gjb-snf0pMR6ZLS0dQxzQR-EmRT-F6CXYEzkeBIpd6qPddQ8104yUwwvqQ0QIF1kSg"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-headline-md font-headline-md text-primary">Dr. Emily Rodriguez</h3>
                <p className="text-body-sm font-body-sm text-secondary font-medium">Pediatric Dentist</p>
              </div>
              <div className="flex items-center gap-1 bg-surface-container-high px-2 py-1 rounded-md">
                <span className="material-symbols-outlined text-[16px] text-tertiary-container" data-weight="fill">star</span>
                <span className="text-label-md font-label-md text-on-surface">4.8</span>
              </div>
            </div>
            <p className="text-body-sm font-body-sm text-on-surface-variant mb-4 line-clamp-2">Dedicated to making dental visits a positive, stress-free experience for children of all ages.</p>
            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
              <span className="px-3 py-1 bg-surface-container rounded-full text-label-md font-label-md text-on-surface-variant">8+ Yrs Exp</span>
              <span className="px-3 py-1 bg-surface-container rounded-full text-label-md font-label-md text-on-surface-variant">Child-Friendly</span>
            </div>
            <Link to="/book" className="w-full py-3 border-2 border-secondary text-secondary rounded-[16px] text-label-md font-label-md hover:bg-secondary hover:text-on-secondary transition-colors duration-200 text-center block">
              Book Appointment
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Doctors;
