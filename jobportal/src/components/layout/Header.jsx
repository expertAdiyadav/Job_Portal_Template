import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Placeholder for authentication state

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            JobPortal
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <Link to="/jobs" className="hover:text-primary">Find Jobs</Link>
            {isLoggedIn ? (
              <>
                <Link to="/profile" className="hover:text-primary">Profile</Link>
                <Link to="/post-job" className="hover:text-primary">Post a Job</Link>
                <button onClick={() => setIsLoggedIn(false)} className="hover:text-primary">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-primary">Login</Link>
                <Link to="/register" className="btn btn-primary">Register</Link>
              </>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-dark focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-3 border-t">
            <nav className="flex flex-col space-y-3 pb-3">
              <Link to="/" className="hover:text-primary">Home</Link>
              <Link to="/jobs" className="hover:text-primary">Find Jobs</Link>
              {isLoggedIn ? (
                <>
                  <Link to="/profile" className="hover:text-primary">Profile</Link>
                  <Link to="/post-job" className="hover:text-primary">Post a Job</Link>
                  <button onClick={() => setIsLoggedIn(false)} className="hover:text-primary text-left">Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="hover:text-primary">Login</Link>
                  <Link to="/register" className="hover:text-primary">Register</Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 