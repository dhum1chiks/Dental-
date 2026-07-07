const Contact = () => {
  return (
    <div className="flex-grow w-full max-w-7xl mx-auto px-container-padding py-stack-lg flex flex-col gap-stack-xl mt-8 mb-8">
      
      {/* Header */}
      <header className="text-center max-w-2xl mx-auto">
        <h1 className="text-display-lg font-display-lg text-primary mb-stack-sm">Get in Touch</h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant">We're here to help you achieve your best smile. Reach out to us with any questions or to schedule your next visit.</p>
      </header>

      {/* Emergency Banner */}
      <div className="bg-error-container border border-error/20 rounded-xl p-stack-md flex flex-col sm:flex-row items-center justify-between gap-stack-md shadow-[0px_4px_20px_rgba(15,76,129,0.05)]">
        <div className="flex items-center gap-stack-sm text-error">
          <span className="material-symbols-outlined text-3xl">emergency</span>
          <div>
            <h3 className="text-headline-md font-headline-md font-bold">Need Emergency Care?</h3>
            <p className="text-body-sm font-body-sm text-on-error-container">We offer priority treatment for severe dental pain, trauma, or bleeding.</p>
          </div>
        </div>
        <a className="bg-error text-on-error px-6 py-3 rounded-xl font-label-md text-label-md font-bold whitespace-nowrap hover:bg-error/90 transition-colors shadow-md" href="tel:1800DENTAL">
          Call Emergency Line
        </a>
      </div>

      {/* Contact Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Info Sidebar (Left) */}
        <div className="lg:col-span-4 flex flex-col gap-stack-md">
          {/* Contact Details Card */}
          <div className="bg-surface-lowest rounded-xl p-stack-md shadow-[0px_4px_20px_rgba(15,76,129,0.05)] border border-outline-variant/20 flex flex-col gap-stack-md">
            <h2 className="text-headline-md font-headline-md text-primary">Clinic Info</h2>
            
            <div className="flex items-start gap-stack-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-primary mt-1">location_on</span>
              <div>
                <p className="font-label-md text-label-md text-on-surface font-semibold">Address</p>
                <p className="text-body-md font-body-md">123 Health Ave, Suite 400<br/>Medical District, NY 10001</p>
              </div>
            </div>
            
            <div className="flex items-start gap-stack-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-primary mt-1">call</span>
              <div>
                <p className="font-label-md text-label-md text-on-surface font-semibold">Phone</p>
                <p className="text-body-md font-body-md">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start gap-stack-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-primary mt-1">mail</span>
              <div>
                <p className="font-label-md text-label-md text-on-surface font-semibold">Email</p>
                <p className="text-body-md font-body-md">care@dentalexpert.com</p>
              </div>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-surface-lowest rounded-xl p-stack-md shadow-[0px_4px_20px_rgba(15,76,129,0.05)] border border-outline-variant/20 flex flex-col gap-stack-md">
            <h2 className="text-headline-md font-headline-md text-primary">Working Hours</h2>
            <ul className="flex flex-col gap-unit text-body-md font-body-md text-on-surface-variant">
              <li className="flex justify-between border-b border-outline-variant/10 pb-unit">
                <span>Monday - Friday</span>
                <span className="font-semibold text-on-surface">8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-outline-variant/10 pb-unit">
                <span>Saturday</span>
                <span className="font-semibold text-on-surface">9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between pt-unit">
                <span>Sunday</span>
                <span className="font-semibold text-error">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Form Area (Right) */}
        <div className="lg:col-span-8 bg-surface-lowest rounded-xl p-stack-lg shadow-[0px_4px_20px_rgba(15,76,129,0.05)] border border-outline-variant/20">
          <h2 className="text-headline-md font-headline-md text-primary mb-stack-md">Send us a Message</h2>
          <form className="flex flex-col gap-stack-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
              <div className="flex flex-col gap-unit">
                <label className="text-label-md font-label-md text-on-surface-variant" htmlFor="firstName">First Name</label>
                <input className="h-12 rounded-lg bg-surface-container-low border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-surface-lowest transition-colors text-body-md font-body-md px-4" id="firstName" placeholder="Jane" type="text"/>
              </div>
              <div className="flex flex-col gap-unit">
                <label className="text-label-md font-label-md text-on-surface-variant" htmlFor="lastName">Last Name</label>
                <input className="h-12 rounded-lg bg-surface-container-low border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-surface-lowest transition-colors text-body-md font-body-md px-4" id="lastName" placeholder="Doe" type="text"/>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
              <div className="flex flex-col gap-unit">
                <label className="text-label-md font-label-md text-on-surface-variant" htmlFor="email">Email Address</label>
                <input className="h-12 rounded-lg bg-surface-container-low border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-surface-lowest transition-colors text-body-md font-body-md px-4" id="email" placeholder="jane@example.com" type="email"/>
              </div>
              <div className="flex flex-col gap-unit">
                <label className="text-label-md font-label-md text-on-surface-variant" htmlFor="phone">Phone Number</label>
                <input className="h-12 rounded-lg bg-surface-container-low border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-surface-lowest transition-colors text-body-md font-body-md px-4" id="phone" placeholder="(555) 000-0000" type="tel"/>
              </div>
            </div>
            
            <div className="flex flex-col gap-unit">
              <label className="text-label-md font-label-md text-on-surface-variant" htmlFor="subject">Subject</label>
              <select className="h-12 rounded-lg bg-surface-container-low border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-surface-lowest transition-colors text-body-md font-body-md px-4 text-on-surface" id="subject">
                <option>General Inquiry</option>
                <option>Book Appointment</option>
                <option>Billing Question</option>
                <option>Feedback</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-unit">
              <label className="text-label-md font-label-md text-on-surface-variant" htmlFor="message">Message</label>
              <textarea className="rounded-lg bg-surface-container-low border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-surface-lowest transition-colors text-body-md font-body-md p-4 resize-none" id="message" placeholder="How can we help you?" rows={5}></textarea>
            </div>
            
            <button className="mt-stack-sm self-end px-8 py-3 rounded-full bg-primary text-on-primary font-label-md text-label-md hover:bg-primary/90 transition-colors shadow-[0px_4px_20px_rgba(15,76,129,0.05)] flex items-center gap-2" type="button">
              <span>Send Message</span>
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
