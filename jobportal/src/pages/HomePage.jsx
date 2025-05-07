import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../components/common/SearchBar';
import JobCard from '../components/common/JobCard';
import { jobs } from '../utils/mockData';

const HomePage = () => {
  const navigate = useNavigate();
  const [featuredJobs] = useState(jobs.slice(0, 4)); // Display only 4 featured jobs

  const handleSearch = (searchParams) => {
    // In a real app, this would process the search and route to jobs page with search params
    navigate('/jobs', { state: { searchParams } });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Dream Job Today
            </h1>
            <p className="text-xl mb-10">
              Connect with top employers and discover opportunities that match your skills and career goals.
            </p>
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Jobs</h2>
            <Link to="/jobs" className="text-primary hover:underline">
              View All Jobs
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Create Your Profile</h3>
              <p className="text-gray-600">
                Sign up and build your professional profile to showcase your skills and experience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Discover Opportunities</h3>
              <p className="text-gray-600">
                Search for jobs that match your skills, experience, and career goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Apply and Connect</h3>
              <p className="text-gray-600">
                Apply to jobs with your profile and connect directly with employers.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/register" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* For Employers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-4">For Employers</h2>
                <p className="text-gray-600 mb-6">
                  Find the perfect candidates for your open positions. Post jobs, review applications, and connect with qualified professionals.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Post unlimited job listings
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Access to candidate database
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Advanced applicant tracking
                  </li>
                </ul>
                <Link to="/post-job" className="btn btn-primary">
                  Post a Job
                </Link>
              </div>
              <div className="md:w-1/2 bg-gray-200 flex items-center justify-center p-8">
                <img 
                  src="https://via.placeholder.com/400x300" 
                  alt="Employers dashboard" 
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 