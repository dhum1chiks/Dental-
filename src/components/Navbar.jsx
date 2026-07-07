import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-surface/90 backdrop-blur-md text-primary border-b border-outline-variant/30 shadow-sm top-0 sticky z-50">
      <div className="flex justify-between items-center w-full px-container-padding max-w-7xl mx-auto h-20">
        {/* Brand Logo */}
        <Link to="/" className="text-headline-md font-headline-md font-bold text-primary flex items-center gap-2">
          <span className="material-symbols-outlined" data-weight="fill">dentistry</span>
          DentalExpert
        </Link>
        
        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-gutter">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-label-md text-label-md transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-primary font-bold border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Actions */}
        <div className="hidden md:flex items-center gap-stack-md">
          <Link to="/login" className="px-6 py-2 rounded-[16px] text-label-md font-label-md font-bold text-secondary border-2 border-secondary bg-on-secondary hover:bg-secondary-container transition-colors">
            Login
          </Link>
          <Link to="/book" className="px-6 py-2 rounded-[16px] text-label-md font-label-md font-bold text-on-primary bg-primary hover:opacity-80 scale-95 transition-all">
            Book Appointment
          </Link>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-primary">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
