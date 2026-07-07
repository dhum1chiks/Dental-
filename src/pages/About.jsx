const About = () => {
  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="relative py-24 px-container-padding overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 z-10 space-y-stack-md">
            <h1 className="text-display-lg font-display-lg text-primary">Redefining Dental Excellence</h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              At DentalExpert, we combine state-of-the-art technology with compassionate care to deliver exceptional smiles. Our commitment to precision and hygiene ensures a comfortable, stress-free experience for every patient.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <div className="aspect-[4/3] rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(15,76,129,0.15)] border border-primary-fixed-dim/20">
              <img 
                className="w-full h-full object-cover" 
                alt="A brightly lit, modern dental clinic reception area" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEizvQbcI_XhkvellqV9gls4W9CsMGzzo7iYR_Bup4Ujqd76mgSSwHj0a6ZTshnKHtOi4lUfy5lW1zuzDE2H69Kppi3cWLwAu0teLtJ4CvfAQxADZ9CqpoMKpgVjIUGjDuWgyGWHTi_VUbCUIUmOLfECWSUNvRRAzD5SJHnhyW-vXeSfVaUEBqFi8616qdfW9f53tUesNqiHnUamEfAnS8Jpp2nu0--JecUV2SlzolRi4LCG-YYbAc5Qx44mFWp7PCNr9dYOpx3Q"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container-highest p-6 rounded-[16px] shadow-[0_4px_20px_rgba(15,76,129,0.12)] max-w-[200px]">
              <div className="flex items-center gap-2 mb-2 text-primary">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                <span className="text-label-md font-label-md font-bold">Trust & Precision</span>
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant">Over 15 years of dedicated clinical practice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-24 bg-surface-container-low px-container-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-stack-sm">
            <h2 className="text-headline-lg font-headline-lg text-primary">Our Journey</h2>
            <p className="text-body-md font-body-md text-on-surface-variant max-w-2xl mx-auto">A timeline of innovation and care.</p>
          </div>
          <div className="relative border-l border-outline-variant/30 ml-4 md:mx-auto md:w-0">
            {/* Timeline Item 1 */}
            <div className="mb-12 relative flex items-center w-full md:justify-end">
              <div className="absolute -left-2 md:left-1/2 md:-ml-2 w-4 h-4 bg-primary rounded-full border-4 border-surface shadow-sm z-10"></div>
              <div className="ml-8 md:ml-0 md:w-5/12 bg-surface p-6 rounded-[16px] shadow-[0_4px_20px_rgba(15,76,129,0.12)] hover:shadow-[0_10px_30px_rgba(15,76,129,0.15)] transition-shadow">
                <span className="text-label-md font-label-md text-secondary mb-2 block">2010</span>
                <h3 className="text-headline-md font-headline-md text-primary mb-2">Foundation</h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">Established with a vision to provide accessible, high-quality dental care using modern techniques in a patient-first environment.</p>
              </div>
            </div>
            {/* Timeline Item 2 */}
            <div className="mb-12 relative flex items-center w-full md:justify-start">
              <div className="absolute -left-2 md:left-1/2 md:-ml-2 w-4 h-4 bg-primary rounded-full border-4 border-surface shadow-sm z-10"></div>
              <div className="ml-8 md:ml-0 md:w-5/12 md:mr-auto bg-surface p-6 rounded-[16px] shadow-[0_4px_20px_rgba(15,76,129,0.12)] hover:shadow-[0_10px_30px_rgba(15,76,129,0.15)] transition-shadow">
                <span className="text-label-md font-label-md text-secondary mb-2 block">2015</span>
                <h3 className="text-headline-md font-headline-md text-primary mb-2">Digital Integration</h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">Fully integrated digital imaging and 3D scanning, revolutionizing diagnostics and patient treatment planning for enhanced precision.</p>
              </div>
            </div>
            {/* Timeline Item 3 */}
            <div className="relative flex items-center w-full md:justify-end">
              <div className="absolute -left-2 md:left-1/2 md:-ml-2 w-4 h-4 bg-primary rounded-full border-4 border-surface shadow-sm z-10"></div>
              <div className="ml-8 md:ml-0 md:w-5/12 bg-surface p-6 rounded-[16px] shadow-[0_4px_20px_rgba(15,76,129,0.12)] hover:shadow-[0_10px_30px_rgba(15,76,129,0.15)] transition-shadow">
                <span className="text-label-md font-label-md text-secondary mb-2 block">2023</span>
                <h3 className="text-headline-md font-headline-md text-primary mb-2">Expansion</h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">Opened our flagship clinic featuring an advanced surgical suite and dedicated pediatric care wings, expanding our community reach.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Bento Grid */}
      <section className="py-24 px-container-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Mission */}
            <div className="md:col-span-2 bg-primary-container text-on-primary-container p-8 rounded-[24px] shadow-[0_10px_30px_rgba(15,76,129,0.15)] flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-4xl mb-4" style={{fontVariationSettings: "'FILL' 1"}}>flag</span>
                <h2 className="text-headline-lg font-headline-lg mb-4 text-on-primary">Our Mission</h2>
                <p className="text-body-lg font-body-lg opacity-90 max-w-2xl">To elevate the standard of oral healthcare by merging cutting-edge clinical technology with an empathetic, personalized approach, ensuring every patient achieves optimal dental wellness in a serene environment.</p>
              </div>
            </div>
            {/* Vision */}
            <div className="bg-surface-variant p-8 rounded-[24px] shadow-[0_4px_20px_rgba(15,76,129,0.12)]">
              <span className="material-symbols-outlined text-4xl text-primary mb-4" style={{fontVariationSettings: "'FILL' 1"}}>visibility</span>
              <h2 className="text-headline-md font-headline-md text-primary mb-2">Our Vision</h2>
              <p className="text-body-md font-body-md text-on-surface-variant">To be the globally recognized benchmark for clinical excellence, setting new standards for hygiene, precision, and patient satisfaction in modern dentistry.</p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-gutter grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-gutter">
            <div className="bg-surface p-6 rounded-[16px] border border-outline-variant/20 hover:border-primary/50 transition-colors shadow-[0_4px_20px_rgba(15,76,129,0.05)]">
              <span className="material-symbols-outlined text-secondary mb-3">medical_services</span>
              <h3 className="text-body-lg font-body-lg text-primary font-semibold mb-2">Clinical Precision</h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">Unyielding commitment to accuracy and detail in every procedure.</p>
            </div>
            <div className="bg-surface p-6 rounded-[16px] border border-outline-variant/20 hover:border-primary/50 transition-colors shadow-[0_4px_20px_rgba(15,76,129,0.05)]">
              <span className="material-symbols-outlined text-secondary mb-3">volunteer_activism</span>
              <h3 className="text-body-lg font-body-lg text-primary font-semibold mb-2">Patient Empathy</h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">Fostering a welcoming, anxiety-free experience built on trust and understanding.</p>
            </div>
            <div className="bg-surface p-6 rounded-[16px] border border-outline-variant/20 hover:border-primary/50 transition-colors shadow-[0_4px_20px_rgba(15,76,129,0.05)]">
              <span className="material-symbols-outlined text-secondary mb-3">science</span>
              <h3 className="text-body-lg font-body-lg text-primary font-semibold mb-2">Innovation</h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">Continuously adopting the latest technologies to improve patient outcomes.</p>
            </div>
            <div className="bg-surface p-6 rounded-[16px] border border-outline-variant/20 hover:border-primary/50 transition-colors shadow-[0_4px_20px_rgba(15,76,129,0.05)]">
              <span className="material-symbols-outlined text-secondary mb-3">health_and_safety</span>
              <h3 className="text-body-lg font-body-lg text-primary font-semibold mb-2">Hygiene First</h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">Strict adherence to sterile protocols, ensuring maximum safety for all.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
