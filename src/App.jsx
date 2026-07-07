import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

import About from './pages/About';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BookAppointment from './pages/BookAppointment';
import Login from './pages/Login';
import PatientLayout from './layouts/PatientLayout';
import PatientDashboard from './pages/PatientDashboard';
import PatientTreatments from './pages/PatientTreatments';
import PatientBilling from './pages/PatientBilling';
import PatientAppointments from './pages/PatientAppointments';
import PatientSettings from './pages/PatientSettings';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/AdminDashboard';
import AdminPatients from './pages/AdminPatients';
import AdminAppointments from './pages/AdminAppointments';
import AdminBilling from './pages/AdminBilling';
import AdminSettings from './pages/AdminSettings';

import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Full Screen Public Routes */}
          <Route path="/login" element={<Login />} />

          {/* Public Routes with Navbar/Footer */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="book" element={<BookAppointment />} />
          </Route>
          
          {/* Patient Portal Routes */}
          <Route path="/patient" element={<PatientLayout />}>
            <Route index element={<PatientDashboard />} />
            <Route path="appointments" element={<PatientAppointments />} />
            <Route path="treatments" element={<PatientTreatments />} />
            <Route path="billing" element={<PatientBilling />} />
            <Route path="settings" element={<PatientSettings />} />
          </Route>

          {/* Admin Portal Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="patients" element={<AdminPatients />} />
            <Route path="appointments" element={<AdminAppointments />} />
            <Route path="billing" element={<AdminBilling />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
