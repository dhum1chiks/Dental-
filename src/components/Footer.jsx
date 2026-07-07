import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-on-background w-full py-stack-lg px-container-padding flex flex-col gap-stack-md mt-auto">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-gutter mb-stack-lg">
        <div className="col-span-1 md:col-span-2">
          <div className="text-headline-md font-headline-md text-on-primary dark:text-primary-fixed-dim font-bold flex items-center gap-2 mb-stack-sm">
            <span className="material-symbols-outlined" data-weight="fill">dentistry</span>
            DentalExpert
          </div>
          <p className="text-body-sm font-body-sm text-on-primary/80 max-w-sm">
            Providing world-class, professional dental care with a focus on patient comfort and advanced clinical precision.
          </p>
        </div>
        
        <div>
          <h4 className="text-label-md font-label-md text-on-primary font-bold mb-stack-sm">Quick Links</h4>
          <div className="flex flex-col gap-stack-sm">
            <Link to="/privacy" className="text-body-sm font-body-sm text-on-primary/80 hover:text-on-primary hover:underline transition-all">Privacy Policy</Link>
            <Link to="/terms" className="text-body-sm font-body-sm text-on-primary/80 hover:text-on-primary hover:underline transition-all">Terms of Service</Link>
            <Link to="/cookie" className="text-body-sm font-body-sm text-on-primary/80 hover:text-on-primary hover:underline transition-all">Cookie Policy</Link>
          </div>
        </div>
        
        <div>
          <h4 className="text-label-md font-label-md text-on-primary font-bold mb-stack-sm">Contact</h4>
          <div className="flex flex-col gap-stack-sm">
            <Link to="/contact" className="text-body-sm font-body-sm text-secondary-fixed font-bold hover:underline transition-all">Emergency Care</Link>
            <p className="text-body-sm font-body-sm text-on-primary/80">1-800-DENTAL-X</p>
            <p className="text-body-sm font-body-sm text-on-primary/80">info@dentalexpert.clinic</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full border-t border-on-primary/20 pt-stack-md flex justify-center">
        <p className="text-body-sm font-body-sm text-on-primary/80">© 2024 DentalExpert Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
